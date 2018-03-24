import { getUsrList } from '../services/user'
export default {

    namespace: 'userchat',
  
    state: {
        userlist:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *getUserlist({ userType:type }, { call, put }) {  // eslint-disable-line
       const data = yield call(getUsrList,type);
       console.log('===进入getUserlist')
        yield put({ type: 'chatlist',payload:data.data });
      },
    },
  
    reducers: {
    chatlist(state, action) {
        console.log(action.payload,'进入chatlist.')
        return {...state, userlist:action.payload };
      },
    },
  
  };
  