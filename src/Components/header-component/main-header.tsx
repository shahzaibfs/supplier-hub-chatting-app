import React, { useState } from 'react'
import { Col, Row, Grid, Typography } from 'antd'
import styled from 'styled-components'

import { EventType } from 'antd/lib/drawer'

import { BsMenuButtonWide } from 'react-icons/bs'

import HeaderLayout from './header-layout'
import HeaderMenu from './header-menu'
import HeaderDrawer from './header-drawer'

import LogoImage from '../../Assets/images/Logo.png'

import './header-module.css'

const { Title, Text } = Typography
const { useBreakpoint } = Grid

const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  background: #fff;
  border-radius: 50%;
`
const LogoTypo = styled.div`
line-height : normal ;
`

const MainHeader: React.FC = () => {
  const [isMenuVisible, setisMenuVisible] = useState<boolean>(false)
  const { lg } = useBreakpoint()

  const handleClose = (e: EventType): void => {
    setisMenuVisible(false)
  }
  const handleOpen = (e: React.MouseEvent<SVGElement, MouseEvent>): void => {
    setisMenuVisible(true)
  }

  return (
    <HeaderLayout>
      <Row
        align="middle"
        justify={'space-between'}
        style={{ height: '100%', maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}
      >
        <Col style={{ display: 'flex', alignItems: 'center' }}>
          <Logo src={LogoImage} alt="logo" />
          <LogoTypo>
            <Title
              level={4}
              className='logo__typo__parent'
            >
              SupplierHub
            </Title>
            <Text strong type='warning' className='logo__typo__child'>
              Chatting App
            </Text>
          </LogoTypo>
        </Col>
        <Col style={{ lineHeight: 0 }}>
          {!lg && (
            <BsMenuButtonWide
              fontSize={25}
              style={{ cursor: 'pointer' }}
              onClick={handleOpen}
              className="main__header__open__menu__btn"
            />
          )}
          {lg && <HeaderMenu />}
        </Col>
      </Row>
      <HeaderDrawer visible={isMenuVisible} onClose={handleClose} />
    </HeaderLayout>
  )
}

export default MainHeader
