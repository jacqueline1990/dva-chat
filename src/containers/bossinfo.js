import React from 'react';
import { connect } from 'dva'
import {Avatar,Col,Row,Form,Input,Button} from 'antd'
import Header from '../components/header/header'
import Avataro from '../components/avatar/avatar'
import { Redirect } from 'dva/router'
const FormItem = Form.Item;
class Bossinfo extends React.Component{
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
                        label="招聘职位"
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
                        label="公司名字"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        >
                        {getFieldDecorator('company', {
                            rules: [{ required: true, message: 'Please input your company!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        label="薪资"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        >
                        {getFieldDecorator('money', {
                            rules: [{ required: true, message: 'Please input your money!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        label="职位要求"
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
const BossinfoForm = Form.create()(Bossinfo)
export default connect((state)=>{
      return state.users
})(BossinfoForm)