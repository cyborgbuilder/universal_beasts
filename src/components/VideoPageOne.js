import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

function VideoPageOne() {
  return (
    <Container>
      <Wrap>

      <Header>
            <h1>Video</h1>
            <h1>03/01</h1>
          </Header>


      <Video>
      <ReactPlayer  url='https://youtu.be/Cx7q3yi74K0'  loop='true' width='' height='100%' controls='true'/>
      </Video>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 120vh;
    display: flex;
    background: #eae9e9;
    justify-content: center;

`

const Wrap = styled.div`
  width: 90%;
  border-radius: 15px;
  margin: 100px 0;

  `

  
  const Header = styled.div`
    border-top: 1px solid black;
    display: flex;
    justify-content: space-between;
    
    h1{
        font-size: 60px;
        font-family: 'Yellowtail', cursive;
        padding: 15px;
    }

`
const Video = styled.div`
    width: 100%;
    height: 80vh;
    margin: 100px 0;

`

export default VideoPageOne