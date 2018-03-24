import React from 'react';
import { connect } from 'dva'
import {Avatar,Col,Row,Form,Input,Button} from 'antd'
import Header from '../components/header/header'
import Avataro from '../components/avatar/avatar'
import { Redirect } from 'dva/router'
const FormItem = Form.Item;
class Geniusinfo extends React.Component{
    constructor(){
        super(...arguments);
        this.choseAvatar=this.choseAvatar.bind(this);
        this.state={
            avatar:'',
            avatarerr:''
        }
    }
    choseAvatar(avatar){
    this.setState({
        avatar
    })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            //   this.state.avatar?values.avatar=this.state.avatar:null;
           if(this.state.avatar){
               values.avatar=this.state.avatar;
               this.props.dispatch({type:'users/updateData',payload:values})
           }else{
               this.setState({
                avatarerr:'请选择头像'
               })

           }
            // console.log('Received values of form: ', values);
        }
        });
      }
    render(){
    
        const { getFieldDecorator } = this.props.form;
        const AvatarList = ['a','b','c','d','e','f','g','h','i','j','k','l']
        return (
            <React.Fragment>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/> :null}
                {this.state.avatarerr?this.state.avatarerr:''}
                <Header title="bossinfo" color="#2E8B57"/>
                <Avataro choseAvatar={this.choseAvatar}/>
                <Row type="flex" justify="center">
                <Col span={20}>
                <Form onSubmit={this.handleSubmit}>
                   <FormItem
                        label="求职岗位"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        >
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input your title!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                
                   
                    <FormItem
                        label="个人简介"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        >
                        {getFieldDecorator('desc', {
                            rules: [{ required: true, message: 'Please input your desc!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem>
                          <Button type="primary" htmlType="submit">保存信息</Button>
                     </FormItem>
                </Form>
                </Col>
                </Row>

           </React.Fragment>
        )
    }

}
const GeniusinfoForm = Form.create()(Geniusinfo)
export default connect((state)=>{
      return state.users
})(GeniusinfoForm)