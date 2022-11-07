import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { css } from '@emotion/css';



const Title = css`
font-size: 30px;
text-align: center;
`

const uiForm = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const formContainer = css`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const form = css`
  background-color: #f1f1f1;
  padding: 30px;
  border-radius: 20px;
  border: #555;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.35);
`

const formField = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const button = css`
  
`

const SignUp = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
  return (
    <div className={formContainer}>
      <form className={form}>
        <h1 className={Title}>
          会員登録
        </h1>
        <div className={uiForm}>
            <Box className={formField} component="formField" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label=""
                name="email"
                autoComplete="email"
                autoFocus
                />
            </Box> 
            <Box className={formField} component="formField" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label=""
                name="password"
                autoComplete="password"
                autoFocus
                />
            </Box>
            <Box className={formField} component="formField" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label=""
                name="email"
                autoComplete="email"
                autoFocus
                />
            </Box> 
            <Box className={formField} component="formField" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label=""
                name="password"
                autoComplete="password"
                autoFocus
                />
            </Box> 
            <Button className={button} variant='contained' sx={{ mt: 3 }}>
            送信する
            </Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp