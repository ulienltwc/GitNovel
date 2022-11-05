import React from 'react'
import { css } from '@emotion/css'
import { Link } from 'react-router-dom';

const header = css`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #FD91AB;
color: #333;
 /*ヘッダーを固定する */
width: 100%;
z-index: 99999;
box-shadow: 0px 0px 5px 0px #777777;
border-radius: 0px;
`
const logo = css`
    font-size: 30px;
    margin-left: 30px;
    height: 50px;
    `

const headerButton = css`
    list-style: none;
    display: inline-block;
    margin-right: 30px;
`
const roginLink = css`
    list-style: none;
    text-decoration: none;
`

const rogInButton = css`
    text-decoration: none;
    color: #333;
    transition: all 0.2s;
    &:hover {
      color: #777;
    }
`

    
const Header = () => {
  return (
  <header className={header}>
    <div className={logo}>
      <img src='#' alt="ロゴ"></img>
    </div>
    <nav className={headerButton}>
        <ul>
            <li className={roginLink}>
                <Link to='/RogIn' className={rogInButton}>ログイン</Link>
            </li>
        </ul>
    </nav>
  </header>
  );
}

export default Header