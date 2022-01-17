import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    textfield:{
        textDecoration: 'none',
        color: 'red',
        borderColor:'red',
        '& label.Mui-focused': {
            color: 'black',
          },
          '& label.Mui:after': {
            borderBottomColor: 'green',
          },
          '& label.Mui-underline:after': {
            color: 'red',
          },
          '& label.Mui-root': {
            color: 'red',
          },
          '& label.Mui:hover': {
            color: 'red',
          },

          "& .MuiFormLabel-root": {
            color: 'black',
            fontFamily: 'Noto Sans Display', 
            fontWeight: 500,
          },
      
    },

    input: {
    color: "black",
    fontFamily: 'Noto Sans Display', 
    fontWeight: 700,
    '& input[type=number]': {
      '-moz-appearance': 'textfield'
  },
  '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
  },
  '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
  }
    },
    
    label: {
        color: "black"
        }
}));