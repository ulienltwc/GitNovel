import React from 'react'
import { css } from '@emotion/css'
import { Box } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import  WorkNovel from './WorkNovel'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const largeBox = css`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    margin-top: 80px;
    margin-left: 10%;
    margin-right: 10%;
`

const aside = css`
    background-color: #b17ce2;
    grid-column: 1/1;
    grid-row: 1;
`

const main = css`
    background-color: #c18b65;
    grid-column: 2/5;
    grid-row: 1
`
const tabL = css`
    
`

const MyAccount = () => {
  return (
    <div className={largeBox}>
        <div className={aside}>
            プロフィール画像とか
            <Wrap>
                <WrapItem>
                    <Avatar size='md' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
            </Wrap>
        </div>
        <div className={main}>
            メインコンテンツ（この中を区切る）
            <Tabs variant='soft-rounded' colorScheme='brand'>
                <TabList className={tabL}>
                    <Tab>公開作品</Tab>
                    <Tab>非公開作品</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>{//JavaScriptでDBの内容を表示→要素の分だけ繰り返す？
                    }
                     <a href=''>
                        <Box>作品を表示する箱</Box>
                     </a>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
  )
}

export default MyAccount