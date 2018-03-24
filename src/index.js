import dva from 'dva';
import 'lib-flexible'
import './index.css';
import  {createLogger} from 'redux-logger';
import browserHistory from 'history/createBrowserHistory';
// 1. Initialize
const app = dva ({
    history: browserHistory()
})
const logger = createLogger()
// 2. Plugins
app.use({onAction:logger});

// 3. Model
app.model(require('./models/user').default);
app.model(require('./models/userchat').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
