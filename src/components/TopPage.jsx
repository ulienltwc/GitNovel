import React from 'react'
import { css } from '@emotion/css'
import SearchIcon from '@mui/icons-material/Search';




const logo = css`
  display: block;
    margin-left: auto;
    margin-right: auto
`
const searchBox = css`
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-right: 20%;
  margin-left: 20%;
  border-radius: 20px;
  border: #555;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.1);
`

const searchIcon = css`
  margin-top: 2%;
  margin-bottom: 1%;
  margin-left: 3%;
`


const TopPage = () => {
  return (
    
    <div>
      <img className={logo} src="https://3.bp.blogspot.com/-FJiaJ8gidCs/Ugsu-rSFw0I/AAAAAAAAXNA/JFiIUoxggW4/s400/book_tate.png" alt="GirNovel"></img>
      <a></a>
      <br />
      <a href='./SignIn'>SignIn</a>
    </div> 
  )
}

export default TopPage