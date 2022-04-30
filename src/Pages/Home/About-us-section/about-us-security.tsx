import { Image, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { Details, DetailsWrapper } from './about-us-details'

const { Title, Paragraph } = Typography

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
  margin-bottom:16px;
`

const AboutUsSecutiy = () => {
  return (
    <DetailsWrapper>
      <Details>
        <ImageWrapper className='aboutUs__imageWrapper'>
          <Image  width={300} height={300} fallback={''} />
        </ImageWrapper>
        <Title className="txt__white txt__center">Security By Default</Title>
        <Paragraph className="txt__white txt__center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
          consequuntur fugit quos vel, nulla vero totam sed, corporis at
          architecto perferendis minima minus? Odit distinctio perspiciatis
          omnis maxime labore maiores! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsa consequuntur fugit quos vel, nulla vero totam
          sed, corporis at architecto perferendis minima minus? Odit distinctio
          perspiciatis omnis maxime labore maiores!
        </Paragraph>
        <Paragraph className="txt__white txt__center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
          consequuntur fugit quos vel, nulla vero totam sed, corporis at
          architecto perferendis minima minus? Odit distinctio perspiciatis
        </Paragraph>
      </Details>
    </DetailsWrapper>
  )
}

export default AboutUsSecutiy
