import * as React from 'react';
import { css } from '@emotion/css';
import { Box, BoxProps } from '@chakra-ui/react';
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';

const RogInTitle = css`
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
  background-color: #f5f5f532;
  padding: 30px;
  border-radius: 20px;
  border: #555;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;

`

const formField = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10%;
`

const button = css`
  background-color: #FD91AB;
  margin-bottom: 10%;
`

const linkMessage = css`
  font-size: small;
  color: #444;
  margin-bottom: 5%;
`

const RogIn = () => {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

    return (
    <div>
      <Box className={formContainer}>
        <Box className={form}>
          <FormControl isInvalid={isError} className={formField}>
            <FormLabel color='#333'>メールアドレス</FormLabel>
            <Input 
              type='email' 
              value={input} onChange={handleInputChange} 
              focusBorderColor='#FD91AB' 
            />
            {!isError ? (
              <FormHelperText>
                a
              </FormHelperText>
            ) : (
              <FormErrorMessage>メールアドレスが間違っています。</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isError} className={formField}>
            <FormLabel color='#333'>パスワード</FormLabel>
            <Input type='email' 
              value={input} 
              onChange={handleInputChange} 
              focusBorderColor='#FD91AB'
            />
            {!isError ? (
              <FormHelperText>
                a
              </FormHelperText>
            ) : (
              <FormErrorMessage>パスワードが間違っています。</FormErrorMessage>
            )}
          </FormControl>
          <Button className={button} colorScheme="">ログイン</Button>
          <p className={linkMessage}>アカウントを持っていない方は
            <Link href='' color='pink.400'>こちら</Link>
          </p>
        </Box>
      </Box>

    </div>
  )
}

export default RogIn