/**
 * 封装存储数据方法
 * @param {*} key 
 * @param {*} value 
 */
export const setItem = (key, value) => {
    if (typeof value == "object") {
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
};

/**
 * 封装获取数据方法
 * @param {*} key 
 * @returns 
 */
export const getItem = (key) => {
    let data = localStorage.getItem(key);
    try {
        return JSON.parse(data);
    } catch (e) {
        return data;
    }
};

/**
 * 封装删除数据方法
 * @param {*} key 
 */
export const removeItem = (key) => {
    localStorage.removeItem(key);
};

/**
 * 封装清空数据方法
 */
export const clear = () => {
    localStorage.clear();
}