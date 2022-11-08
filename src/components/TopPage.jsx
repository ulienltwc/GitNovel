import React from 'react'
import { css } from '@emotion/css'
import { ChakraProvider, cssVar } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

const box = css`
  display: flexbox;
  justify-content: center;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 10px;
  background-color: #faebf1;
  border-radius: 20px;
  border: #555;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
`
const largeBox = css`
  background-color: #a2f7f7;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const logo = css`
`

const img = css`
  margin-left: auto;
  margin-right: auto;
`
const search = css`
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 10px;
`
const searchForm = css`
  &:focus {
    background-color: #ffceda;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  }
  
  border-radius: 3px;
  margin-top: 10px;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
`


const TopPage = () => {
  return (
    
    <div className={largeBox}>わかりやすいように色つけてる！
        <Box className={logo} >
          <img className={img} src="https://bit.ly/3teQMUw" alt="GirNovel"></img>
        </Box>
        <Box className={search}>
          <Stack spacing={3}>
            <Input className={searchForm}
              focusBorderColor='#FD91AB'
              placeholder='検索'
            />
          </Stack>
        </Box>
      
    </div> 
  )
}

export default TopPage