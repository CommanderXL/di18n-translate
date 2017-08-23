import T from './translate'
import { addClass } from './util'

const CLASS_ATTRIBUTE = 'i18n-class'
const IMG_ATTRIBUTE = 'i18n-img'
const CONTENT_ATTRIBUTE = 'i18n-content'
const PLACEHOLDER_ATTRIBUTE = 'i18n-placeholder'
const LOCALE_PATTERN = /\$\{locale}/g
const noop = () => {}

export class DI18n extends T {
  constructor(options = {}) {
    super(options)

    this.locale = options.locale || 'en'
    this.messages = options.messages || {}
    this.isReplace = options.isReplace || false
    this.currMessage = this.messages[this.locale]
    this.doms = {}

    // 是否进行DOM内容的替换
    if (this.isReplace) {
      this.getDoms()

      this.fresh()
    }
  }

  getDoms() {
    this.doms = {
      classDoms: document.querySelectorAll(`[${CLASS_ATTRIBUTE}]`),
      imgDoms: document.querySelectorAll(`[${IMG_ATTRIBUTE}]`),
      contentDoms: document.querySelectorAll(`[${CONTENT_ATTRIBUTE}]`),
      inputDoms: document.querySelectorAll(`[${PLACEHOLDER_ATTRIBUTE}]`)
    }
  }

  handlerClass() {
    if (this.doms.classDoms && this.doms.classDoms.length) {
      for (let i = 0; i < this.doms.classDoms.length; i++) {
        let dom = this.doms.classDoms[i]
        addClass(dom, dom.getAttribute(CLASS_ATTRIBUTE))
      }
    }
  }

  handlerImg() {
    if (this.doms.imgDoms && this.doms.imgDoms.length) {
      for (let i = 0; i < this.doms.imgDoms.length; i++) {
        let dom = this.doms.imgDoms[i]
        let src = dom.getAttribute(IMG_ATTRIBUTE).replace(LOCALE_PATTERN, this.locale)
        dom.src = src
      }
    }
  }

  handlerContent() {
    if (this.doms.contentDoms && this.doms.contentDoms.length) {
      for (let i = 0; i < this.doms.contentDoms.length; i++) {
        let dom = this.doms.contentDoms[i]
        let content = dom.getAttribute(CONTENT_ATTRIBUTE)
        console.log(content)
        dom.innerHTML = this.messages[this.locale][content]
      }
    }
  }

  handlerInput() {
    if (this.doms.inputDoms && this.doms.inputDoms.length) {
      for (let i = 0; i < this.doms.inputDoms.length; i++) {
        let dom = this.doms.inputDoms[i]
        let placeHolderKey = dom.getAttribute(PLACEHOLDER_ATTRIBUTE)
        dom.setAttribute('placeholder', this.currMessage[placeHolderKey])
      }
    }
  }

  fresh() {
    this.handlerClass()
    this.handlerImg()
    this.handlerContent()
    this.handlerInput()
  }

  setLocale(locale, cb = noop) {
    this.locale = locale
    this.fresh()
    cb()
  }

  loadJs(src, cb) {
    // async 属性默认为true
    const script = document.createElement('script')
    script.src = src

    script.onload = script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        cb && cb()
      }
    }

    document.getElementsByTagName[head][0].appendChild(script)
  }

  setMessages(obj) {
    this.messages = obj
  }
}