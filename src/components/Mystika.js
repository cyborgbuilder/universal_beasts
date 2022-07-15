import React from 'react'
import styled from 'styled-components'

function Mystika() {
  return (
    <Container>
        <h1>MYSTIKA NFT COLLECTION</h1>
        <p>MYSTIKA is a collection of mystical creatures that serve as membership cards for an elite business group.</p>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 20vh;
    background: #eae9e9;
    text-align: center;
    padding: 50px 0;


    h1{
        font-size: 75px;
    }

    p{
        font-size: 20px;
        margin: 20px 0;
    }

`
export default Mystika