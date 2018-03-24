import React from 'react';
import { connect } from 'dva'
import {Avatar,Col,Row} from 'antd'
class Avataro extends React.Component{
    render(){
        const AvatarList = ['a','b','c','d','e','f','g','h','i','j','k','l']
        return (
                <Row style={{margin:'0 30px'}}  gutter={20} type="flex" justify="center">
                 {AvatarList.map(v=>{
                     return (<Col align="center" style={{height:'60px',lineHeight:'60px',border:'1px solid lightgray',marginTop:'-1px',marginLeft:'-1px'}} key={v} span={6}>
                        <Avatar
                        onClick={()=>{
                            // console.log(e.target,'---------')
                            // e.target.style.border='1px solid red'
                            this.props.choseAvatar(v)

                        }}
                        size="large" src={require(`../../imgs/${v}.jpg`)}/>
                      </Col>)
                 })}
                </Row>
        )
    }

}
export default Avataro;