import { Typography } from 'antd'
import React from 'react'
import { AiFillWechat } from 'react-icons/ai'
import styled from 'styled-components'
import { ButtonEl } from '../../../Components/Global-Components/input-components'
import { AboutUsSvg } from './about-us-svgs'

export const DetailsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction:column;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  min-width: 300px;
`

export const Details = styled.div`
  width: 100%;
  height: min-content;
  padding: 16px 0;
`

const ImageWrapper = styled.div`
  padding: 24px;
  width: 100%;
  padding: 180px 0;
  position: relative;
`

const { Title, Paragraph } = Typography

function AboutUsDetails() {
  return (
    <DetailsWrapper>
      <Details>
        <Title className="txt__primary txt__center">
          About Us
        </Title>
        <Paragraph className="txt__secondary txt__center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
          consequuntur fugit quos vel, nulla vero totam sed, corporis at
          architecto perferendis minima minus? Odit distinctio perspiciatis
          omnis maxime labore maiores! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsa consequuntur fugit quos vel, nulla vero totam
          sed, corporis at architecto perferendis minima minus? Odit distinctio
          perspiciatis omnis maxime labore maiores!
        </Paragraph>
        <Paragraph className="txt__secondary txt__center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
          consequuntur fugit quos vel, nulla vero totam sed, corporis at
          architecto perferendis minima minus? Odit distinctio perspiciatis
        </Paragraph>
        <ButtonEl
          icon={<AiFillWechat className="button__icon" size={20} />}
          size="middle"
          style={{ marginTop: 16, marginLeft: 'auto', marginRight: 'auto' }}
        >
          Goto Chat. ?
        </ButtonEl>
        <ImageWrapper>
          <AboutUsSvg className="aboutUs__svg" />
        </ImageWrapper>
      </Details>
    </DetailsWrapper>
  )
}

export default AboutUsDetails
