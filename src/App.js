import React,{useState, useEffect} from 'react'
import {commerce} from './lib/commerce'
import {Products,Navbar,Footer,Cart, Checkout,Contact,TermAndCondition,PrivacyPolicy,About,Faq,Help} from './components'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import ProductView from './components/ProductView/ProductView';



const App = () =>{
    const[products,setProducts]=useState([])
    const [cart, setCart] = useState({})
    const [order,setOrder]=useState({})
    const [errorMessage,setErrorMessage]=useState('')


    const fetchCart = async()=>{
        setCart(await commerce.cart.retrieve())
    }

    const fetchProducts =async()=>{
        const {data} = await commerce.products.list() 
        setProducts(data)
    }
    const addProduct = async(productId,quantity)=>{
        const {cart}=await commerce.cart.add(productId,quantity) 
        setCart(cart)
    }

    const handleUpdateCartQty= async (productId, quantity)=>{
        const {cart} =await commerce.cart.update(productId,{quantity})

        setCart(cart)
    }


    const handleRemoveFromCart= async (productId)=>{
        const {cart} =await commerce.cart.remove(productId)

        setCart(cart)
    }

    const refreshCart= async()=>{
        const newCart=await commerce.cart.refresh()
        setCart(newCart)
    }
    const handleCaptureCheckout=async (checkoutTokenId,newOrder)=>{
        try{
            const incomingOrder= await commerce.checkout.capture(checkoutTokenId,newOrder)
            
            setOrder(incomingOrder)
            refreshCart()
        }catch(error){
            setErrorMessage(error.data.error.message)
        }
    }

    useEffect(()=>{
        fetchProducts()
        fetchCart()
        
    }, [])
     

    return(
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Routes>   
                    <Route exact path="/" element={  <Products products={products} />} />
                    <Route exact path="/cart" element={  <Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />} />
                    <Route exact path="/checkout" element={  <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} />
                    <Route exact path="/product-view/:id" element={  <ProductView addProduct={addProduct}/>} />
                    
                    <Route exact path="/faq" element={  <Faq  />} />
                    <Route exact path="/privacy-policy" element={  <PrivacyPolicy  />} />
                    <Route exact path="/term" element={  <TermAndCondition  />} />
                    <Route exact path="/help" element={  <Help  />} />
                    <Route exact path="/contact" element={  <Contact  />} />
                    <Route exact path="/about" element={  <About />} />
                </Routes> 
                <Footer />
            </div>
        </Router>
    )
}

export default App