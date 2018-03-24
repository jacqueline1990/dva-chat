import React from 'react'
import {connect } from 'dva'
// import {Button} from 'antd-mobile'
import {Route,Switch} from 'dva/router'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Genius from '../containers/genius'
import User from '../containers/user'
function Boss(){
    return (<div>boss</div>)
}

function Msg(){}
class DashBoard extends React.Component{

   
    render(){
        const user = this.props.users;
       const pathname = this.props.location.pathname;
        const navList = [
			{
				path:'/boss',
				text:'牛人',
				icon:'boss',
				title:'牛人列表',
				component:Boss,
				hide:user.type=='genius'
			},
			{
				path:'/genius',
				text:'boss',
				icon:'job',
				title:'BOSS列表',
				component:Genius,
				hide:user.type=='boss'
			},
			{
				path:'/msg',
				text:'消息',
				icon:'msg',
				title:'消息列表',
				component:Msg
			},
			{
				path:'/me',
				text:'我',
				icon:'user',
				title:'个人中心',
				component:User
			}
        ]
        const  info = navList.find(v=>v.path===pathname);
        return (
            <React.Fragment>
                <Header title={info.title} color="#BA55D3"/>
                 <Switch>
                 { navList.map(v=>{
                     return(
                        <Route key={v.path} path={v.path} component={v.component} />
                     )
                 })}
                 </Switch>
               <Footer navlist={navList}/>
            </React.Fragment>
        )
    }
}
export default connect((state)=>{
      return state
})(DashBoard)
