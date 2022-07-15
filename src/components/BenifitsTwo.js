import React from 'react'
import styled from 'styled-components'

function BenifitsTwo() {
  return (
    <Container>
        <Wrap>
            <Header>
            <h1>UTILITY & BENEFITS</h1>
            <h1>03/02</h1>
            </Header>
            <Content>
                <Numbers>
                    <SlotNum>
                        <p>3.0</p>
                    </SlotNum>

                    <SlotNum>
                        <p>3.1</p>
                    </SlotNum>

                    <SlotNum>
                        <p>3.2</p>
                    </SlotNum>

                    <SlotNum>
                        <p>3.3</p>
                    </SlotNum>

                    <SlotNum>
                        <p>3.4</p>
                    </SlotNum>

                    <SlotNum>
                        <p>3.5</p>
                    </SlotNum>

                    <SlotNum>
                        <p>3.6</p>
                    </SlotNum>

                    <SlotNum>
                        <p>3.7</p>
                    </SlotNum>

                    <SlotNum>
                        <p>3.8</p>
                    </SlotNum>

                   
                </Numbers>
                <Right>
                    <SlotRight>
                        <p>Receive a share of 2% royalties from all future NFT drops in perpetuity</p>
                    </SlotRight>

                    <SlotRight>
                        <p>Free printed version, endorsed by founder and shipped to you</p>
                    </SlotRight>

                    <SlotRight>
                        <p>Free whitelist for future NFT drops</p>
                    </SlotRight>

                    <SlotRight>
                        <p>Free membership to exclusive private business group </p>
                    </SlotRight>

                    <SlotRight>
                        <p>Free access to founder</p>
                    </SlotRight>

                    <SlotRight>
                        <p>Exclusive access to new business opportunities and projects</p>
                    </SlotRight>

                    <SlotRight>
                        <p>Free signals & market tips</p>
                    </SlotRight>

                    <SlotRight>
                        <p>Early access to new projects</p>
                    </SlotRight>

                    <SlotRight>
                        <p>A share of 10% voting rights on community decisions</p>
                    </SlotRight>


                   
                    
                </Right>
            </Content>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center; 
    background: #eae9e9;
`

const Wrap = styled.div`
    width: 90%;
    background: black;
    padding: 20px 40px;

`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    
    h1{
        font-size: 60px;
        padding: 15px;
        color: white;
    }

`

const Content = styled.div`
    display: flex;
    margin: 80px 0;

`

const Numbers = styled.div`
    width: 10%;
`
const SlotNum = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid white;
    // border-radius: 0 0 10px 0;
    padding: 40px 30px;
    margin-bottom: 20px;

    p{
        font-size: 18px;
        color: white;
    }

`

const Right = styled.div`
    width: 90%; 
    display: flex;
    flex-direction: column;


`

const SlotRight = styled.div`
    width: 50%;
    height: 100px;
    background: white;
    padding: 10px;
    margin-left: 550px;
    margin-bottom: 20px;

    p{
        font-size: 20px;
    }

`
export default BenifitsTwo