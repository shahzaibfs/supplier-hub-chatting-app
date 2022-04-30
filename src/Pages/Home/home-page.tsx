import { Space } from 'antd'
import styled from 'styled-components'

import { MainHeader } from '../../Components/header-component'
import AboutUs from './About-us-section/about-us'
import BannerSection from './Banner-section/banner-section'

const Spacing = styled.div`
  margin-top: 80px;
`
const Main = styled.main`
  min-height: 100vh;
  height: max-content;
  width: 100%;
`

const HomePage = (props: any) => {
  // const store = useSelector((store: RootState) => store.testingReducer)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(changeName('ali'))
  // }, [dispatch])

  // console.log(store)
  return (
    <>
      <MainHeader />
      <Spacing />
      <Main>
        <Space direction="vertical" size={'large'} style={{ width: '100%' }}>
          <BannerSection />
          <AboutUs />
        </Space>
      </Main>
    </>
  )
}

export default HomePage
