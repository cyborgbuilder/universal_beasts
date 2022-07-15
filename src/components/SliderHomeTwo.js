import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SliderHomeTwo() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        accessibility: false,
        arrows: false
      };
  return (
    <Container>
        <Wrap>
            <Left>
                <Slider {...settings}>
                    <div>
                        <img src='/images/angelo.png' />
                    </div>

                    <div>
                        <img src='/images/mystika2.png' />
                    </div>

                    <div>
                        <img src='/images/mystika3.png' />
                    </div>

                    <div>
                        <img src='/images/mystika4.png' />
                    </div>

                 
                </Slider>
            </Left>
            <Right>
                <h1>MYSTIKA NFT COLLECTION</h1>
               <Box>
                <p>MYSTIKA is a collection of mystical creatures that serve as membership cards for an elite business group.</p>
               </Box>
            </Right>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #eae9e9;
    display: flex;
    justify-content: center;
    align-items: center;


`

const Wrap = styled.div`
    width: 90%;
    display: flex;

    
    

`

const Left = styled.div`
    width: 50%;
`
const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    padding: 10px;

    h1{
        font-size: 75px;
    }
    p{
        font-size: 20px;
        color: white;
        line-height: 2rem;
        letter-spacing: 1.01px;
    }
`

const Box  = styled.div`
    background: url('/images/backl.png');
    border-radius: 15px;
    padding: 20px;
    margin: 20px 0;
`
export default SliderHomeTwo