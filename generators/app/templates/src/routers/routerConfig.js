import { lazy } from 'react';
import {
    DesktopOutlined,
    TeamOutlined,
} from '@ant-design/icons';

const routers = [
    {
        path: '/',
        key: '1',
        icon: <DesktopOutlined />,
        title: '首页',
        children: [],
        authorities: ['ALL'],
        exact: true,
        component: lazy(() => import('../pages/home')),
    },
    {
        path: '/about',
        key: '2',
        icon: <TeamOutlined />,
        title: '关于',
        children: [],
        authorities: ['ALL'],
        exact: true,
        component: lazy(() => import('../pages/about')),
    },
]

export const LoginRoute = {
    path: '/login',
    key: 'login',
    exact: true,
    component: lazy(() => import('../pages/login')),
}

export const CallbackRoute = {
    path: '/oauth/callback',
    key: 'callback',
    exact: true,
    component: lazy(() => import('../pages/callBack')),
}

export const P404Route = {
    path: '/p404',
    key: 'p404',
    exact: true,
    component: lazy(() => import('../pages/P404')),
}


export default routers;