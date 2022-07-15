import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SliderHome() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 0,
        autoplay: true,
        accessibility: true,
        arrows: false
      };
  return (
    <Container>
        <Wrap>
            <Left>
                <Slider  {...settings}>
                    <div>
                        <img src='/images/1.png' />
                    </div>

                    <div>
                        <img src='/images/2.png' />
                    </div>

                    <div>
                        <img src='/images/3.png' />
                    </div>

                    <div>
                        <img src='/images/4.png' />
                    </div>

                    <div>
                        <img src='/images/5.png' />
                    </div>
                </Slider>
            </Left>
            <Right>
                <h1>THE LARGEST NFT GIVEAWAY IN HISTORY</h1>
               <Box>
                <p> UNIVERSAL BEASTS is an army of Oasians sent to the earth by the Oasisgod to bring liberation, prosperity and freedom to humanity. </p>
               </Box>
            </Right>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #eae9e9;
    display: flex;
    justify-content: center;
    align-items: center;


`

const Wrap = styled.div`
    width: 90%;
    display: flex;

    

    @media only screen and (max-width: 1200px){
        width: 95%;
        flex-direction: column;
    }

`

const Left = styled.div`
    width: 50%;

    

    @media only screen and (max-width: 1200px){
        width: 100%;

        img{
            width: 100%;
        }

    }
`
const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    padding: 10px;

    @media only screen and (max-width: 1200px){
        width: 100%;
    }
    h1{
        font-size: 75px;

        padding: 50px;
        border-radius: 2px 35px 35px 20px;
        background: #292929;
        
        letter-spacing: 1.5px;
        color: #f6d933;

        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        @media only screen and (max-width: 1200px){
            font-size: 45px;
            text-align: center;
        }
    }
    p{
        font-size: 20px;
        color: white;
        line-height: 2rem;
        letter-spacing: 1.01px;

        @media only screen and (max-width: 1200px){
            font-size: 16px;
        }
    }
`

const Box  = styled.div`
    background: #958529;
    border-radius: 15px;
    padding: 20px;
    margin: 40px 0;
`
export default SliderHome