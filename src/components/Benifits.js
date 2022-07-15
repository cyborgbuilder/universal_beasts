import React from 'react'
import styled from 'styled-components'

function Benifits() {
  return (
    <Container>
        <Wrap>
            <Header>
            <h1>UTILITY & BENEFITS</h1>
            <h1>02/01</h1>
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

                    <SlotNum>
                        <p>2.4</p>
                    </SlotNum>

                    <SlotNum>
                        <p>2.5</p>
                    </SlotNum>
                </Numbers>
                <Right>
                    <SlotRight>
                        <p>Free access to SOCIAL PLATFORM with PORTAL that only NFT’S can unlock</p>
                    </SlotRight>

                    <SlotRight>
                        <p>Free access to LIVE EVENTS</p>
                    </SlotRight>

                    <SlotRight>
                        <p>Free access to BUSINESS COURSES AND COACHING </p>
                    </SlotRight>

                    <SlotRight>
                        <p>Free credits and discounts for various products on our marketplace</p>
                    </SlotRight>

                    <SlotRight>
                        <p>Collaborations with other community members through portal</p>
                    </SlotRight>

                    <SlotRight>
                        <p>A voting right per NFT on community decisions.</p>
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
    background: #f6d933;
    padding: 20px 40px;

`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    
    h1{
        font-size: 60px;
        font-family: 'Yellowtail', cursive;
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
export default Benifits