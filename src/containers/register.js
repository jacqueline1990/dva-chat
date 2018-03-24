import React from 'react';
import { connect } from 'dva';
import Logo from '../components/logo/logo'
import Header from '../components/header/header'
import { Redirect } from 'dva/router'
import { is, fromJS } from 'immutable';
import { Row,Col,Radio, Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
class Register extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          this.props.dispatch({type:'users/register',payload:values})
        }
        });
      }
     
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
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
                            <FormItem>
                            {getFieldDecorator('repwd', {
                                rules: [{ required: true, message: 'Please input your password again!' }],
                            })(
                                <Input prefix={<Icon type="lock " style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password agagin" />
                            )}
                            </FormItem>
                            <FormItem {...formItemLayout} label="选择类型:">
                                {getFieldDecorator('type')(
                                    <RadioGroup>
                                    <RadioButton value="boss"> boss</RadioButton>
                                    <RadioButton value="genius">genius </RadioButton>
                                    </RadioGroup>
                                )}
                            </FormItem>
                            {this.props.msg?<p className="errMsg">{this.props.msg}</p>:null}
                            <FormItem>
                               <Button type="primary" htmlType="submit">Register</Button>
                            </FormItem>
                        </Form>
                    {/* </Col> */}
            {/* </Row> */}
        </React.Fragment>)
    }
}
const ReisterForm = Form.create()(Register)
export default connect((state)=>{
      return state.users
})(ReisterForm)