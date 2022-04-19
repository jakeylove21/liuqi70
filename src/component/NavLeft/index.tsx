import  React,{useEffect} from 'react';
import { NavLink } from 'umi'
import { Menu } from 'antd';
import menuConfig,{menuItem} from "./menuConfig"
import "./style.less"

const {Item,SubMenu} =Menu




interface INavLeftProps {
}

const NavLeft: React.FunctionComponent<INavLeftProps> = (props) => {
    useEffect(()=>{
        console.log( menuConfig)
    },[])
    //函数组件的 componentDidOMount
    let renderMenu= (data:Array<menuItem>)=>{
        return data.map((item:any,index)=>{
            if(item.children){
                //y有子 菜单
                return <SubMenu title={item.title} key={item.key}>
                       { renderMenu(item.children)}
                </SubMenu>
            }else{
                return <Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
                </Item>
            }
        })
    }
  return <div className="NavLeft">
      <div className="Icon">
          <h1>TS 单车</h1>
      </div>
     <Menu theme={'dark'}>
         {renderMenu(menuConfig)}
     </Menu>
  </div>;
};

export default NavLeft;
