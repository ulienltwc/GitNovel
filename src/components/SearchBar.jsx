import React from 'react'
import Box from '@mui/material/Box';
import { css } from '@emotion/react';
import { Input } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

const search = css`

`

const searchForm = css`
`

const SearchBar = () => {
    
  return (
    <div>
        <Box className={search}>
          <Stack spacing={3}>
            <Input className={searchForm}
              focusBorderColor='#FD91AB'
              placeholder='検索'
              bg='#fcfcfc'
              boxShadow='0px 5px 10px 2px rgba(0, 0, 0, 0.2)'
            />
          </Stack>
        </Box>
  </div>
  )
}

export default SearchBar