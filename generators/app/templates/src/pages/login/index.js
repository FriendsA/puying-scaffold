import { oauth } from '../../config';
import { Button } from 'antd';
const url = `${oauth.auth_url}?response_type=${oauth.response_type}&scope=${oauth.scope}&client_id=${oauth.client_id}&redirect_uri=${encodeURIComponent(oauth.callback)}`;

const Login = () => {

    function goOauth() {
        window.location.href = url;
    }

    return (
        <div className="login-page">
            <div>
                <h2>请授权登陆</h2>
                <Button type="primary" onClick={goOauth}>授权</Button>
            </div>
        </div>
    )
}

export default Login;