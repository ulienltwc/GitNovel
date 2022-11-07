import React from 'react'
import { css } from '@emotion/css'
import { ChakraProvider } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import SearchBar from './SeachBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'

const logo = css`
text-align: center;
`

const logoImg = css`
`

const top = css`
  text-align: center;
`
const searchBox = css`
  background-color: #ffffff;
  justify-content: center;
  text-align: center;
`

const search = css`
  text-align: center;

`
const searchForm = css`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;	
  outline: 0;	
  height: 50px;
  width: 50%;
  padding: 20px; 
  border-radius: 2px;
  background: #eee;
  border: 1px #555 solid;

`


const TopPage = () => {

  
  return (
    
    <div className={top}>
      <p className={logo}>
        <img  className={logoImg} src="https://pbs.twimg.com/profile_banners/1026855715019747328/1652114248/1500x500" alt="GirNovel"></img>
      </p>
      <br />
      <p>
      <form id="form5" action="" className={searchBox}>
        <input id="serch" type="text" placeholder="検索" className={searchForm} />
      </form>
      </p>
    </div> 
  )
}

export default TopPage