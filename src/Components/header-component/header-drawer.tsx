import { Drawer, Typography } from 'antd'
import React from 'react'
import { HeaderDrawerProps } from './header-interface'
import { AiFillCloseSquare } from 'react-icons/ai'

const { Title } = Typography

const menuLinks = [
  { name: 'About Us', link: '#About-us' },
  { name: 'How to use', link: '#How-to-use' },
  { name: ' Features', link: '#Features' },
  { name: 'Help Center', link: '/help-center' },
  { name: 'Login', link: '/login' },
]

const HeaderDrawer: React.FC<HeaderDrawerProps> = ({ visible, onClose }) => {
  return (
    <Drawer
      placement={'right'}
      width={'100%'}
      onClose={onClose}
      visible={visible}
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        
        margin: '0 20px',
      }}
      closeIcon={<AiFillCloseSquare fontSize={25} className="header__drawer__close__btn" />}
    >
      {menuLinks.map((menuItem, idx) => (
        <Title
          data-key={idx}
          key={idx}
          level={5}
          style={{ color: 'inherit', margin: '15px 0' }}
          className="header__drawer__link"
        >
          {menuItem.name}
        </Title>
      ))}
    </Drawer>
  )
}

export default HeaderDrawer
