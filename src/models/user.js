import { checklist,register,login,authroute,update } from '../services/user'
import { redirectto } from '../utils/request'
// import { Redirect } from 'dva/router'

export default {

    namespace: 'users',
  
    state: {
        user:'',
        type:'',
        redirectTo:'',
        msg:''
    },
  
    subscriptions: {
     setup({ dispatch, history }) {  // eslint-disable-line
        // dispatch({type:'getuser'})
        console.log('---1')
        let authpath=['/register','/login'];
        
        history.listen(({pathname})=>{
          // 在其他页面需要验证是否有登陆
          if(authpath.indexOf(pathname)===-1 ){
            dispatch({type:'handleLoadData'})
          }
 
        })
    },
    },
  
    effects: {
      *getuser({ payload }, { call, put }) {  // eslint-disable-line
        const data=yield call(checklist);
      },
      *register({payload},{ call,put }){
         const data = yield call(register,payload)
      data.code===0?
            yield put({type:'userSuccess',payload:data.data})
            :
            yield put({type:'errMsg',payload:data.msg})
      },
      *login({payload},{call,put}){
        const data = yield call(login,payload);
        data.code===0?
        yield put({type:'userSuccess',payload:data.data})
        :
        yield put({type:'errMsg',payload:data.msg})

      },
      *handleLoadData(action,{call,put}){
        
        const data = yield call(authroute);
        data.code===0?
        yield put({type:'loaddata',payload:data.data})
        :
        window.location.href='/login';
      },
      *updateData({payload},{call,put}){
        const data = yield call(update,payload);
        // console.log(data,'-----')
        data.code===0?
        yield put({type:'update',payload:data.data})
        :
        yield put({type:'errMsg',payload:data.msg})
 

      }
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      userSuccess(state,{payload}){
          return {...state,...payload,redirectTo:redirectto(payload)}
      },
      //错误信息
      errMsg(state,{payload:msg}){
          return {...state,msg}
      },
      loaddata(state,{payload}){
        return {...state,...payload}
      },
      update(state,{payload}){
        return {...state,...payload,redirectTo:redirectto(payload)}
      }
    },
  
  };
  