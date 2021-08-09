import './index.less'
import { isPostPage } from '../../consts/tools'

const isEnbleCatalog = true
const defaultTheme = 'a'
const defaultMode = 'auto'

function buildToolbar() {
    $('body').append(`<div class="esa-toolbar">
        <div class="bars"><i class="fa fa-ellipsis-h"></i></div>
        <span class="up" title="返回顶部"><i class="fa fa-chevron-up"></i></span>
        <span class="mode" title="切换模式"><i class="fa fa-adjust"></i></span>
        <span class="skin" title="主题设置"><i class="fa fa-cog"></i></span>
        <div class="skin-popup">
            <div class="item">
                <div class="title">主题色彩</div>
                <div class="themes">
                    <button data-theme="a" style="background: #2D8CF0;"></button>
                    <button data-theme="b" style="background: #FA7298;"></button>
                    <button data-theme="c" style="background: #42B983;"></button>
                    <button data-theme="d" style="background: #607D8B;"></button>
                    <button data-theme="e" style="background: #5E72E4;"></button>
                    <button data-theme="f" style="background: #FF9700;"></button>
                    <button data-theme="g" style="background: #FF5722;"></button>
                    <button data-theme="h" style="background: #009688;"></button>
                    <button data-theme="i" style="background: #673BB7;"></button>
                    <button data-theme="j" style="background: #906f61;"></button>
                </div>
            </div>
        </div>
        </div>
    </div>`)

    const showContents = isPostPage() && isEnbleCatalog

    if (showContents) {
        $('.esa-toolbar').append(
            `<span class="contents" title="阅读目录"><i class="fa fa-list-ul"></i></span>`,
        )
    }

    const modeKey = `silence-mode-${window.currentBlogApp}`
    const themeKey = `silence-theme-${window.currentBlogApp}`

    const hour = new Date().getHours()

    const themeLoading = sessionStorage.getItem(themeKey) || defaultTheme
    const modeLoading =
        sessionStorage.getItem(modeKey) ||
        (defaultMode == 'auto'
            ? hour >= 6 && hour < 18
                ? 'light'
                : 'dark'
            : defaultMode)

    $('html').attr('mode', modeLoading)
    $('html').attr('theme', themeLoading)

    const $toolbar = $('.esa-toolbar')
    const $skinPopup = $('.skin-popup')

    let show = false
    $toolbar.find('.bars').click(function() {
        if (!show) {
            $toolbar.find('.bars').addClass('bars-show')
            $toolbar.find('.up').addClass('up-show')
            $toolbar.find('.mode').addClass('mode-show')
            $toolbar.find('.skin').addClass('skin-show')
            if (showContents) {
                $toolbar.find('.contents').addClass('contents-show')
            }
        } else {
            $toolbar.find('.bars').removeClass('bars-show')
            $toolbar.find('.up').removeClass('up-show')
            $toolbar.find('.mode').removeClass('mode-show')
            $toolbar.find('.skin').removeClass('skin-show')
            if (showContents) {
                $toolbar.find('.contents').removeClass('contents-show')
            }
        }
        show = !show
    })

    $toolbar.find('.up').click(() => {
        $('html, body').animate({ scrollTop: 0 }, 450)
    })

    $toolbar.find('.mode').click(() => {
        const mode = $('html').attr('mode') == 'light' ? 'dark' : 'light'
        sessionStorage.setItem(modeKey, mode)
        $('html').attr('mode', mode)
    })

    $toolbar.find('.skin').click(() => {
        $skinPopup.slideToggle()
    })

    $skinPopup.find('.themes button').click(function() {
        const theme = $(this).data('theme')
        sessionStorage.setItem(themeKey, theme)
        $('html').attr('theme', theme)
    })

    let showcontents = false
    $toolbar.find('.contents').click(() => {
        $('.esa-contents').toggleClass(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                return 'noactive'
            } else {
                $(this).removeClass('noactive')
                return 'active'
            }
        })

        if (!showcontents) {
            $('#home').css({ width: 'calc(100% - 252px)' })
            showcontents = true
        } else {
            $('#home').css({ width: '100%' })
            showcontents = false
        }
    })

    if (isPostPage()) {
        $toolbar.find('.bars').trigger('click')
    }
}

export default buildToolbar
