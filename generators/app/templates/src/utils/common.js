import { useRef, useEffect, useCallback } from 'react';

/**
 * 获取随机数(包含最小值,最大值)
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
export const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}


/**
 * @description 判断权限方法
 * @param {Array} authList 权限列表
 * @return {Boolean} 是否有权限
 */
export const isLegal = (authList) => {
    let flag = false;
    let list = JSON.parse(localStorage.getItem('authorities') || "null") || [];
    if (authList.includes("ALL")) {
        return true;
    }
    authList.map(item => {
        if (list.includes(item)) {
            flag = true;
        }
    })
    return flag;
}

/**
 * 防抖hook
 */

export const useDebound = (func, m, dep = []) => {
    const { current } = useRef({
        fun: func,
        timer: 0,
    })
    useEffect(() => {
        current.fun = func;
    }, [func])

    return useCallback((...args) => {
        if (current.timer) {
            window.clearTimeout(current.timer);
        }
        current.timer = window.setTimeout(() => current.fun(args), m);
    }, dep)
}