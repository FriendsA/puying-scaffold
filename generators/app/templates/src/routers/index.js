import routers, { P404Route } from './routerConfig';
import { Switch, Route, Redirect } from 'react-router-dom';

const RouterIndex = () => {
    return (
        <Switch>
            {
                routers.map(({ key, path, component }) => {
                    return <Route
                        exact={true}
                        key={key}
                        path={path}
                        render={({ location }) => {
                            let Component = component;
                            if (!localStorage.getItem("access_token") && !location.pathname.includes("/login")) {
                                console.log(location.pathname);
                                return <Redirect to="/login" />
                            }
                            return <Component />
                        }} />;
                })
            }
            <Route path="*" key={P404Route.key} component={P404Route.component}></Route>
        </Switch>
    )
}
export default RouterIndex;