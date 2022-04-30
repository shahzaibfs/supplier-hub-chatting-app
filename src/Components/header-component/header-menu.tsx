import { Space, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const { Title } = Typography

const Menu = styled.main`
 
  display : flex ;
  height : 100%;
  
`

const menuLinks = [
  { name: "About Us", to: "#about-us" },
  { name: "Features", to: "#" },
  { name: "How To Use", to: "#" },
  { name: "Help Center", to: "#" },
  { name: "Use Chat?", to: "#" }

]

const HeaderMenu: React.FC = () => {
  return (
    <Menu>
      <Space direction='horizontal' size={'large'} style={{ width: "100%" }} >

        {menuLinks.map(((menuLink, ix) => (

          <Link className='header__menu__link' to="#about-us">
            <Title className='txt-secondary' level={5 } style={{ margin: 0 }}>
              {menuLink.name}
            </Title>
          </Link>

        )))}

      </Space>
    </Menu>
  )
}

export default HeaderMenu
