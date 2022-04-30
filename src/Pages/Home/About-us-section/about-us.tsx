import { Col, Row } from 'antd'
import React from 'react'

import { SectionLayout } from '../../../Components/Global-Components/layout-components'
import AboutUsDetails from './about-us-details'

import './about-us-module.css'
import AboutUsSecutiy from './about-us-security'

function AboutUs() {
  return (
    <SectionLayout className="aboutUs__common__section">
      <Row gutter={16} style={{}}>
        <Col xs={24} lg={12} className={`aboutUs__common__card `}>
          <AboutUsDetails />
        </Col>
        <Col className={`aboutUs__common__card `} xs={24} lg={12}>
          <AboutUsSecutiy />
        </Col>
      </Row>
    </SectionLayout>
  )
}

export default AboutUs
