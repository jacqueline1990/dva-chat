import React from 'react';
import { connect } from 'dva'
import { Input} from 'antd'
import Header from '../components/header/header'
import {getParameters} from '../utils/request'
import io from 'socket.io-client'
const socket = io('ws://localhost:9093')
const Search = Input.Search;
class Chat extends React.Component{
    render(){
        return (<div>
            <Header title="chat" color="red"/>

         <Search
         style={{position:'fixed',bottom:0}}
          placeholder="input search text"
          enterButton="send"
           size="large"
           onSearch={(value)=>{
               if(value.trim()!==''){
                const to =this.props.users._id;
                const from = getParameters(this.props.location.search).chatid;
             //    console.log(from,'===from');
               socket.emit('sendmsg',{from,to,msg:value})
               }
             


           }}
           />
            
        </div>)
    }
}
export default connect (state=>state)(Chat)