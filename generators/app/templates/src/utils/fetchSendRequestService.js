
import * as qs from 'query-string';
import { notification } from 'antd';


export const post = (requestJSON) => {
    let head = {
        Authorization: `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    if (requestJSON.headers) head = Object.assign(head, requestJSON.headers);
    return fetch(requestJSON.url, {
        method: 'POST',
        mode: "cors",
        headers: head,
        body: qs.stringify(requestJSON.body),
    }).then(response => {
        if (response.status === 401) {
            localStorage.clear();
            window.location.href = '/login';
        }
        if (response.ok) {
            return response.json();
        } else {
            notification.error({
                message: '请求失败',
                description: `状态码: ${response.status}，错误信息: ${response.statusText}`,
            });
            return;
        }
    }).then(json => {
        if (!json) {
            return;
        } else if (json.code === 200) {
            return json;
        } else if (json.code === 999) {
            localStorage.clear();
            window.location.href = '/login';
        } else if (json.error === 'invalid_token') {
            localStorage.clear();
            window.location.href = '/login';
        } else {
            notification.error({
                message: '请求失败',
                description: json.description,
            });
        }
    })
}

export const postForm = (requestJSON) => {
    let formData = new FormData();
    for (let i in requestJSON.body) {
        formData.append(i, requestJSON.body[i]);
    }
    return fetch(requestJSON.url, {
        method: 'POST',
        mode: "cors",
        headers: requestJSON.headers,
        body: formData,
    }).then(res => res.json()).catch(err => {
        console.log(err);
    })
}