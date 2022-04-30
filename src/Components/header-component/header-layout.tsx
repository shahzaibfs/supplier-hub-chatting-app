import { Layout } from 'antd'
import { headerProps } from './header-interface'

const { Header } = Layout

const HeaderLayout: React.FC<headerProps> = ({ children }) => {
  return (
    <Header className='header__layout'>
      {children}
    </Header>
  )
}

export default HeaderLayout
