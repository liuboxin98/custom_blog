import './style/index.scss'
import { createTheme } from 'awescnb'
import build from './build'
import {
    highlight,
    linenumbers,
    postMessage,
    commentsAvatars,
    emoji,
    themeColor,
    imagebox,
    postSignature,
    titleFavicon,
    catalog,
    background,
    signature,
    clickEffect,
    player,
    mode,
    copyCode,
    codeLanguage,
    toolMenu,
    notice,
    live2d,
} from 'plugins/index'

const theme = createTheme()

build()

theme
    .use(highlight, { enable: true })
    .use(notice)
    .use(linenumbers)
    .use(postMessage)
    .use(commentsAvatars)
    .use(emoji)
    .use(imagebox)
    .use(postSignature)
    .use(titleFavicon)
    .use(codeLanguage)
    .use(clickEffect, { enable: false })
    .use(themeColor, { color: '#1B86F9' })
    .use(player, { enable: false })
    .use(live2d, {
        enable: false,
    })
    .use(mode, {
        enable: true,
        darkDefault: true,
        autoDark: false,
        autoLight: false,
    })
    .use(
        signature,
        {
            enable: true,
            contents: ['不想说第二遍了喂！！！', '这人一到夏天就躁动'],
        },
        { selector: '.profile-signature' },
    )
    .use(
        background,
        {},
        {
            opacitySelector:
                '#left-side,#sideBar,#mainContent, #footer,.custom-searchbar',
        },
    )
    .use(
        catalog,
        {
            enable: true,
        },
        {
            selector: '.account',
            fn: 'after',
            scrollContainer: '#mainContent',
        },
    )
    .use(copyCode)
    .use(
        toolMenu,
        {},
        {
            toolbarItems: [
                {
                    icon: 'fa-comment-dots',
                },
                {
                    icon: 'fa-star',
                },
                {
                    icon: 'fa-heart',
                },
                {
                    icon: 'fa-thumbs-up',
                },
                {
                    enable: true,
                    icon: 'fa-adjust',
                },
                {
                    icon: 'fa-rocket',
                },
            ],
        },
    )
