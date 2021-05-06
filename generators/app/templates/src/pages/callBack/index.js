
import authService from '../../services/oauth';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import { parseUrl } from 'query-string';
import { oauth } from '../../config';

function CallBack() {

    const history = useHistory();
    const path = parseUrl(window.location.href);
    const { code } = path.query;
    authService.accessToken({ 
        code: code,
        client_id:oauth.client_id,
        client_security:oauth.client_secret,
        scope:oauth.scope,
        grant_type:oauth.grant_type,
        redirect_uri:oauth.callback,
     }).then((data) => {
        if (data.access_token) {
            // 获取用户名
            authService.fetchUserInfo({ token: data.access_token }).then(user_info => {
                localStorage.setItem('authorities', JSON.stringify(user_info.authorities));
                localStorage.setItem('username', user_info.user_name);
                localStorage.setItem('refresh_token', data.refresh_token);
                localStorage.setItem('expires_in', data.expires_in);
                localStorage.setItem('token_type', data.token_type);
                localStorage.setItem('access_token', data.access_token);
                history.replace("/");
            });
        } else {
            notification.error({
                message: `请求错误`,
                description: data.error,
            });
        }
    });
    return <div className="callback-page">正在获取授权...</div>;
}

export default CallBack;