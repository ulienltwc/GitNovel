import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



const SeachBar = () => {
    
  return (
    <div>
        <FormControl>
            <FormLabel>検索</FormLabel>
            <input type='search' />
            <FormHelperText></FormHelperText>
        </FormControl>
  </div>
  )
}

export default SeachBar