import { setItem, getItem } from '@/utils/storage';
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant';
/**
 * 获取时间戳
 */
export function getTimeStamp() {
    return getItem(TIME_STAMP)
}
/**
 * 设置时间戳
 */
export function setTimeStamp() {
    setItem(TIME_STAMP, Date.now())
}
/**
 * 是否超时
 */
export function isCheckTimeout() {
    // 获取当前时间戳
    var currentTime = Date.now()
    // 获取缓存时间戳（登录时候）
    var timeStamp = getTimeStamp()
    // 用当前时间 - 缓存的时间 > 所设定的间隔时候  则位登录超时，需要重新登录  否则等没有超时
    return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}