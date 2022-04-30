import { Col, Row, Space, Typography, Grid } from 'antd'

import { SectionLayout } from '../../../Components/Global-Components/layout-components'
import { BannerSvg } from './banner-svg'

import './banner-module.css'

const { Title, Paragraph, Link } = Typography
const { useBreakpoint } = Grid

const BannerSection = () => {
  const { lg } = useBreakpoint()
  
  return (
    <SectionLayout
      className={`${getMobileStyles(lg)?.section} ${
        getDesktopStyles(lg)?.section
      } banner__common__section`}
    >
      <Row
        gutter={8}
        className={`${getMobileStyles(lg)?.parent} ${
          getDesktopStyles(lg)?.parent
        } banner__common__parent`}
        justify="center"
        align="middle"
      >
        <Col
          xs={!lg ? 20 : 10}
          className={`${getMobileStyles(lg)?.descSection}`}
        >
          <Title
            level={1}
            className="txt__primary"
            style={{ maxWidth: '20ch' }}
          >
            Simple. Secure. Reliable Messaging.
          </Title>

          <Paragraph
            className="txt__secondary"
            style={{ maxWidth: '39ch' }}
            strong
          >
            With WhatsApp, you'll get fast, simple, secure messaging and calling
            for free*, available on phones all over the world.
          </Paragraph>

          <Paragraph
            style={{ maxWidth: '39ch' }}
            className="txt__secondary"
          >
            * Data charges may apply. Contact your provider for details.
          </Paragraph>

          <Space direction="vertical">
            <Link className="chatting__app__text__secondary" mark>
              lorem Ipsum lorem
            </Link>
            <Link className="chatting__app__text__secondary" mark>
              lorem Ipsum
            </Link>
            <Link className="chatting__app__text__secondary" mark>
              lorem Ipsum
            </Link>
          </Space>
        </Col>
        <Col
          className={`${
            getMobileStyles(lg)?.svgParent
          } banner__common__svg__parent`}
          xs={14}
        >
          <BannerSvg classname={`${getMobileStyles(lg)?.svg}`} />
        </Col>
      </Row>
    </SectionLayout>
  )
}

export default BannerSection

interface IgetStyles {
  svg?: string
  parent?: string
  section?: string
  descSection?: string
  svgParent?: string
}

const getMobileStyles = (lg: boolean | undefined): IgetStyles | null => {
  if (lg === true) return null

  return {
    svg: 'banner__mobile__svg',
    parent: 'banner__mobile__parent',
    section: 'banner__mobile__section',
    descSection: 'banner__mobile__desc__section',
    svgParent: 'banner__mobile__svg__parent',
  }
}

const getDesktopStyles = (lg: boolean | undefined): IgetStyles | null => {
  if (!lg === true) return null

  return {
    parent: 'banner__desktop__parent',
    section: 'banner__desktop__section',
  }
}
