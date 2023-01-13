import { Link } from 'react-router-dom'
import { IMenuItem, IProps } from './types'
import { Menu } from 'antd'
import './style.less'

const menuItemRender = (menus: IMenuItem[]) => {
  return menus.map((menu, i) => {
    if (menu.routes && menu.routes.length) {
      return (
        <Menu.SubMenu
          key={menu.path || menu.name || i}
          title={
            <span>
              {menu.icon && menu.icon}
              <span>{menu.name}</span>
            </span>
          }
        >
          {menuItemRender(menu.routes)}
        </Menu.SubMenu>
      )
    } else {
      return menu.path ? (
        <Menu.Item key={menu.path || menu.name || i}>
          <Link to={menu.path}>
            {menu.icon && menu.icon}
            <span>{menu.name}</span>
          </Link>
        </Menu.Item>
      ) : null
    }
  })
}
const U2Menu: React.FC<IProps> = ({ data, ...props }) => {
  return (
    <Menu
      className='u2-menu'
      theme='light'
      mode='inline'
      inlineIndent={32}
      {...props}
    >
      {menuItemRender(data)}
    </Menu>
  )
}

export default U2Menu
