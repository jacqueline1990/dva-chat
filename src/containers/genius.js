import React from 'react'
import { connect } from 'dva'
import {is, fromJS} from 'immutable'
import { List, Avatar } from 'antd'
import { Link } from 'dva/router'
const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;
class Genius extends React.Component{
constructor(){
    super(...arguments);
    this.state={
        user:null
    }
}
    componentDidMount(){
    }
    shouldComponentUpdate(nextProps,nextState){
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    componentWillReceiveProps(nextProps){
        if(!is(fromJS(this.props), fromJS(nextProps))){
        this.setState({
            user:nextProps.users
        })
         const type = nextProps.users.type==='genius'?'boss':'genius';
        this.props.dispatch({type:'userchat/getUserlist',userType:type})
        }
      }
      componentWillMount(){
        if(!this.state.user&&this.props.users.user){
            this.setState({
           user:this.props.users
           })
         }
      }
    render(){
        // const user = this.props.users;
        // const type = user.type==='genius'?'boss':'genius';
        // this.props.dispatch({type:'userchat/getUserlist',userType:type})
        const userlist = this.props.userchat.userlist;
        console.log(userlist,'~~~~~~~~~~~~~')
        return(<React.Fragment>
            <List itemLayout="horizontal"
                   dataSource={userlist}
                   renderItem={item=>(
                       <Link to={`/chat?chatid=${item._id}`}>
                       <ListItem>
                           <ListItemMeta 
                                 avatar={<Avatar src={require(`../imgs/${item.avatar}.jpg`)}/>}
                                 title={item.user}
                                 description={item.desc}
                           >
                          xx
                          </ListItemMeta>   
                      </ListItem>   
                      </Link>
                   )}
                  >

            </List>   

        </React.Fragment>)
    }
}
export default connect(state=>state)(Genius)