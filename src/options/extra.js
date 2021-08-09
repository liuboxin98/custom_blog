/**
 * 插件以外的配置
 */
import { mergeOptions } from './helper'
import { userConfig } from './base'
/**
 * 皮肤基本配置
 * @param {*} devOptions
 */
export function getThemeOptions(devOptions) {
    const defaultOptions = {
        name: 'reacg',
        color: '#FFB3CC',
        title: '',
        avatar: 'https://pic.cnblogs.com/avatar/1327671/20210317215447.png',
        favicon: '',
        contentSize: 'mid', // disabled
        headerBackground:
            'https://images.cnblogs.com/cnblogs_com/lbx6935/2006963/o_210730095708379-1920x650.jpg',
        log: true,
    }
    return mergeOptions(defaultOptions, userConfig.theme, devOptions)
}

/**
 * 自定义链接
 * @param {*} devOptions
 */
export function getLinksOptions(devOptions) {
    const defaultOptions = [
        {
            name: '',
            link: '',
        },
    ]
    return userConfig.links || devOptions || defaultOptions
}

/**
 * GitHub 配置
 * @param {*} devOptions
 */
export function getGithubOptions(devOptions) {
    const defaultOptions = {
        enable: true,
        color: '#ffb3cc',
        url: '',
    }
    return mergeOptions(defaultOptions, userConfig.github, devOptions)
}

/**
 * Gitee 配置
 * @param {*} devOptions
 */
export function getGiteeOptions(devOptions) {
    const defaultOptions = {
        enable: true,
        color: '#C71D23',
        url: '',
    }
    return mergeOptions(defaultOptions, userConfig.gitee, devOptions)
}

/**
 * 首页图片列表配置
 * @param {*} devOptions
 */
export function getIndexListImgOptions(devOptions) {
    const defaultOptions = {
        enable: false,
        imgs: [],
    }
    return mergeOptions(defaultOptions, userConfig.indexListImg, devOptions)
}
