export const projectName = "Project";
export const baseUrl = "http://localhost:3000/";
export const oauthBaseUrl = 'https://authcenter.puying.ai';
export const api = "";
export const oauth = {
    callback: `${baseUrl}/oauth/callback`,
    auth_url: `${oauthBaseUrl}/oauth/authorize`,
    fetch_token: `${oauthBaseUrl}/oauth/token`,
    check_token: `${oauthBaseUrl}/oauth/check_token`,
    fetch_user_info: `${oauthBaseUrl}/oauth2api/user/me`,
    client_id: 'puyingai',
    client_secret: 'puyingai',
    response_type: 'code',
    grant_type: 'authorization_code',
    scope: 'all',
}