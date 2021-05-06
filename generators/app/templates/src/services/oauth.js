import { postForm } from '../utils/fetchSendRequestService';
import { oauth } from '../config';

export const accessToken = (body) => {
    return postForm({ url: oauth.fetch_token, body, headers: { Authorization: 'Basic cHV5aW5nYWk6cHV5aW5nYWk=' } });
};

export const fetchUserInfo = (body) => {
    return postForm({ url: oauth.check_token, body, headers: { Authorization: 'Basic cHV5aW5nYWk6cHV5aW5nYWk=' } });
};

export default {
    accessToken,
    fetchUserInfo,
}