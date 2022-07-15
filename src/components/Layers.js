import React from 'react'
import Blank from './Blank'
import SliderHome from './SliderHome'
import VideoPageOne from './VideoPageOne'
import styled from 'styled-components'
import Detail from './Detail'
import Benifits from './Benifits'
import VideoPageTwo from './VideoPageTwo'
import SliderHomeTwo from './SliderHomeTwo'
import DetailsTwo from './DetailsTwo'
import BenifitsTwo from './BenifitsTwo'
import Mystika from './Mystika'
function Layers() {
  return (
    <Container>
        <SliderHome />
        <Detail />
        <Benifits />
        <VideoPageOne />
        <Blank />
        <Mystika />
        <VideoPageTwo />
        <DetailsTwo />
        <BenifitsTwo />
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    overflow: hidden;
    z-index: 1000;
`
export default Layers