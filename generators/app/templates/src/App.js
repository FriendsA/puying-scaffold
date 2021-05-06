import Layout from './layout/index';
import './assets/styles/index.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import { Suspense } from 'react';
import { LoginRoute, CallbackRoute } from './routers/routerConfig';

const lazyLoading = <div className="lazy-loading"><Spin /></div>
const App = () => <div>
    <Suspense fallback={lazyLoading}>
        <Router>
            <Switch>
                <Route exact={true} key={LoginRoute.key} path={LoginRoute.path} component={LoginRoute.component} />
                <Route exact={true} key={CallbackRoute.key} path={CallbackRoute.path} component={CallbackRoute.component} />
                <Layout />
            </Switch>
        </Router>
    </Suspense>
</div>

export default App;