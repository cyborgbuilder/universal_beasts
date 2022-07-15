import React from 'react'
import styled from 'styled-components'
import Ticker from 'react-ticker'
import Fade from 'react-reveal/Fade';
function Detail() {
  return (
    <Container>
        <Wrap>
          <Header>
            <h1>ABOUT</h1>
            <h1>01/01</h1>
          </Header>

          <Content>
            <Numbers>
                <SlotNum>
                    <p>1.0</p>
                </SlotNum>

                <SlotNum>
                    <p>1.1</p>
                </SlotNum>

                <SlotNum>
                    <p>1.2</p>
                </SlotNum>

                <SlotNum>
                    <p>1.3</p>
                </SlotNum>

                <SlotNum>
                    <p>1.4</p>
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
                    <p>ALLOCATION FOR DEVELOPERS AND TEAM</p>
                </SlotLeft>

                <SlotLeft>
                    <button>VIEW ON OpenSea </button>
                </SlotLeft>
            </Left>
            <Right>
                <SlotRight>
                    <Fade Right>
                    <h2>10,000 UNIQUE PIECES</h2>
                    </Fade>
                </SlotRight>

                <SlotRight>
                    <Fade right>
                    <h2>FREE</h2>
                    </Fade>
                </SlotRight>

                <SlotRight>
                    <Fade right>
                    <h2>10%</h2>
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

          <Footer>
            {/* <h1>HOW TO SECURE YOUR FREE Nft. </h1>
                <button>CLICK ON THIS Bot </button>
                <h1>AND FOLLOW EVERY INSTRUCTION Given.</h1> */}

                <p>HOW TO SECURE YOUR FREE Nft. <button>CLICK ON THIS Bot </button> AND FOLLOW EVERY INSTRUCTION Given.</p>
            </Footer>
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
    @media only screen and (max-width: 1200px){
        padding: 28px 20px;;
    }

    p{
        font-size: 17px;

        @media only screen and (max-width: 1200px){
            font-size: 12px;
        }
    }

    button{
        outline: none;
        font-size: 13px;
        color: #f6d933;
        padding: 15px;
        text-decoration: underline;
        letter-spacing: 1.5px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
            cursor: pointer;
            transform: scale(1.05);
            background: #36e736;
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

        @media only screen and (max-width: 1200px){
            font-size: 23px;
        }
    }

    img{
        width: 20%;

        @media only screen and (max-width: 1200px){
            width: 60%;
        }
    }



`

const Header = styled.div`
    border-top: 1px solid black;
    display: flex;
    justify-content: space-between;
    
    h1{
        font-size: 60px;
        padding: 15px;
        font-family: 'Yellowtail', cursive;
        color: #f6d933;
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
        font-size: 24px;

        @media only screen and (max-width: 1200px){
            font-size: 18px;
        }

        
    }

    button{
        outline: none;
        font-size: 18px;
        color: #f6d933;
        padding: 25px;
        margin: 10px;
        text-decoration: underline;
        letter-spacing: 1.5px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
            cursor: pointer;
            transform: scale(1.05);
            background: #36e736;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            color: white;

        }
    }
   

`

export default Detail