import React from 'react'
import styled from 'styled-components'

function Map() {
  return (
    <Container>
        <Wrap>
            <Left>
            {/* <UpperRight></UpperRight>
                <Box>
                <h1>THE LARGEST NFT GIVEAWAY IN HISTORY</h1>
                </Box> */}

                <img src='/images/logo1.png' />
            </Left>
            <Right>
                {/* <UpperImage>
                <img src='/images/1.png' />
                </UpperImage> */}
                {/* <DownImage>
                <img src='/images/angelo.png' />
                </DownImage> */}

                <img src='/images/logo2.png' />
               
            </Right>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url('/images/backl.png');
    overflow: hidden;;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: -1000;

`

const Wrap = styled.div`
    width: 90%;
    display: flex;

`

const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    h1{
        color: white;
        font-family: 'Gentium Book Plus', serif;
        font-size: 80px;
        color: #fff;

    }

    img{
        width: 80%;
    }

`

const Box = styled.div`
    z-index: 1000;
    width: 800px;
    position: absolute;
    top: 50px;
`

const Right = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 90%;
    }

`

const UpperImage = styled.div`
    width: 650px;
    height: 650px;
    z-index: 100;
    // background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/images/1.png');
    // background-size: cover;
    // background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
`

const DownImage = styled.div`
    width: 550px;
    height: 550px;
    z-index: 1;
    // background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/images/angelo.png');
    // background-size: cover;
    // background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    right: 0;
    animation: Mover 5s linear 2s infinite alternate;
`

const UpperRight = styled.div`
    width: 450px;
    height: 450px;
    // background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/images/5.png');
    // background-size: cover;
    // background-repeat: no-repeat;
    position: absolute;
    top: 50px;
    left: 0;
`
export default Map