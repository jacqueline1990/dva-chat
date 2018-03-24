import React from 'react';
import { connect } from 'dva';
import Logo from '../components/logo/logo'
import Header from '../components/header/header'
import { Redirect } from 'dva/router'
import { Row,Col,Radio, Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
class Login extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
          this.props.dispatch({type:'users/login',payload:values})
        }
        });
      }
     
    render(){
        const { getFieldDecorator } = this.props.form;
      
        return (
        <React.Fragment>
            <Header title="注册" color="#FF8C69"/>
              <Logo/>
              {/* <Row type="flex" justify="center"> */}
                    {/* <Col span="18"> */}
                    {this.props.redirectTo?<Redirect to ={this.props.redirectTo}/>:null}
                        <Form onSubmit={this.handleSubmit} style={{margin:'0 30px'}}>
                        <FormItem>
                            {getFieldDecorator('user', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('pwd', {
                                rules: [{ required: true, message: 'Please input your password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />
                            )}
                            </FormItem>
         
                            {this.props.msg?<p className="errMsg">{this.props.msg}</p>:null}
                            <FormItem>
                               <Button type="primary" htmlType="submit">Login</Button>
                            </FormItem>
                        </Form>
                    {/* </Col> */}
            {/* </Row> */}
        </React.Fragment>)
    }
}
const LoginForm = Form.create()(Login)
export default connect((state)=>{
      return state.users
})(LoginForm)