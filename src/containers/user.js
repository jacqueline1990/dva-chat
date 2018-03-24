import React from 'react';
import {is, fromJS} from 'immutable'
import { connect } from 'dva'
import { Card } from 'antd'
const { Meta } = Card;
class User extends React.Component{
    constructor(){
        super(...arguments)
        this.state={
            user:null
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    componentWillReceiveProps(nextProps){
        if(!is(fromJS(this.props), fromJS(nextProps))){
        //  this.props =nextProps;
        this.setState({
            user:nextProps.users
        })
        }
      }
      componentDidMount(){
          if(!this.state.user&&this.props.users.user){
             this.setState({
            user:this.props.users
            })
          }
        //   this.setState({
        //     user:this.props.users
        // })
      }

    render(){
        // console.log(this.props,'---')
        console.log(this.state.user)
        return (this.state.user?<div>
            <Card hoverable
                cover ={<img src={require(`../imgs/${this.state.user.avatar}.jpg`)}/>}
             >
               <Meta
                title={this.state.user.title}
                description={this.state.user.desc}/>

            </Card>
        </div>:null)
    }
}
export default connect(state=>state)(User)