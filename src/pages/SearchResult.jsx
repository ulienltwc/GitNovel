import React from 'react'
import SearchBar from '../components/SearchBar'
import { css } from '@emotion/css'
import { Box } from '@chakra-ui/react'

const largeBox = css`
    grid-template-columns: auto;
    grid-template-rows: auto;
    margin-top: 80px;
    margin-left: 10%;
    margin-right: 10%;
`

const searchForm = css`
    border-radius: 5px;
    grid-column: 2/3;
    grid-row: 1;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    margin-bottom: 10%;

`

const resultList = css`
    background-color: #e7e7da;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const result = css`
    background-color: #e7dae2;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

const SearchResult = () => {
  return (
    <div className={largeBox}>
        <Box className = {searchForm}><SearchBar /></Box>
        <Box  className={resultList}>
        検索結果表示箱
            <a href='/NovelDetail'><Box className={result}>検索結果</Box></a>
            <Box className={result}>検索結果</Box>
            <Box className={result}>検索結果</Box>
        </Box>
        

    </div>
  )
}

export default SearchResult