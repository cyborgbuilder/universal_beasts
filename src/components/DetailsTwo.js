import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function DetailsTwo() {
  return (
    <Container>
        <Wrap>
          <Header>
            <h1>ABOUT</h1>
            <h1>02/02</h1>
          </Header>

          <Content>
            <Numbers>
                <SlotNum>
                    <p>2.0</p>
                </SlotNum>

                <SlotNum>
                    <p>2.1</p>
                </SlotNum>

                <SlotNum>
                    <p>2.2</p>
                </SlotNum>

                <SlotNum>
                    <p>2.3</p>
                </SlotNum>

               
            </Numbers>
          <Left>
                <SlotLeft>
                    <p>TOTAL QUANTITY</p>
                </SlotLeft>

                <SlotLeft>
                    <p>MINT PRICE</p>
                </SlotLeft>

                <SlotLeft>
                    <p>THIRD PARTY SALE ROYALTY</p>
                </SlotLeft>


                <SlotLeft>
                    <button>VIEW ON OpenSea </button>
                </SlotLeft>
            </Left>
            <Right>
                <SlotRight>
                    <Fade right>
                        <h2>7 UNIQUE PIECES</h2>
                    </Fade>
                    
                </SlotRight>

                <SlotRight>
                    <Fade right>
                    <h2>7 ETHEREUM</h2>
                    </Fade>
                </SlotRight>

                <SlotRight>
                    <Fade right>
                    <h2>10%</h2>
                    </Fade>
                </SlotRight>

                <SlotRight>
                    <Fade right>
                <img src='/images/opensea-1.png' />
                    </Fade>
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
    display: flex;
    flex-direction: column;

`

const Left = styled.div`
    width: 45%;

`

const Right = styled.div`
    width: 45%;
`
const Numbers = styled.div`
    width: 10%;
`
const SlotNum = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid black;
    // border-radius: 0 0 10px 0;
    padding: 40px 30px;

    p{
        font-size: 12px;
    }

`

const SlotLeft = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid black;
    // border-radius: 0 0 10px 0;
    padding: 40px 30px;

    p{
        font-size: 13px;
    }

    button{
        outline: none;
        font-size: 13px;
        padding: 15px;
        text-decoration: underline;
        letter-spacing: 1.5px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
            cursor: pointer;
            transform: scale(1.05);
            background: #00bbf0;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            color: white;

        }
    }

`
const SlotRight = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid black;
    // border-radius: 0 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 35px;
    }

    img{
        width: 20%;
    }



`

const Header = styled.div`
    border-top: 1px solid black;
    display: flex;
    justify-content: space-between;
    
    h1{
        font-size: 60px;
        padding: 15px;
    }

`

const Content = styled.div`
    display: flex;
    margin: 80px 0;

`
const Footer = styled.div`
    width: 100%; 
    text-align: center;
    border-bottom: 1px solid black;
    padding-bottom: 40px;
    margin-bottom: 100px;

    h1{
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        background: black;
        color: white;;
        padding: 5px 0;
        text-transform: lowercase;
    }

    p{
        font-size: 18px;
    }

    button{
        outline: none;
        font-size: 18px;
        padding: 25px;
        margin: 10px;
        text-decoration: underline;
        letter-spacing: 1.5px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
            cursor: pointer;
            transform: scale(1.05);
            background: #00bbf0;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            color: white;

        }
    }
   

`

export default DetailsTwo