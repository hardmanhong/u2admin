import React from 'react'
import {
  U2Breadcrumb,
  U2Content,
  U2Header,
  U2Menu,
  U2Silder
} from './components'
import { IProps } from './types'
import { HomeOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { useBoolean } from '@/hooks'
import './style.less'

const U2Layout: React.FC<IProps> = () => {
  const [collapsed, setCollapsed] = useBoolean(false)
  return (
    <div className='u2-layout'>
      <Layout>
        <U2Silder collapsed={collapsed} setCollapsed={setCollapsed}>
          <U2Menu
            data={[
              {
                name: 'home',
                icon: <HomeOutlined />,
                path: '/home'
              },
              {
                name: 'test-list',
                icon: <HomeOutlined />,
                path: '/test'
              },
              {
                name: 'test-detail',
                icon: <HomeOutlined />,
                path: '/test/2'
              },
              {
                name: 'test-record',
                icon: <HomeOutlined />,
                path: '/test/record'
              }
            ]}
          />
        </U2Silder>
        <Layout>
          <U2Header />
          <U2Breadcrumb />
          <U2Content></U2Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default U2Layout
