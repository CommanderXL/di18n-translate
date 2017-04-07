import T from './translate'
import {
  addClass
} from './util'

const CLASS_ATTRIBUTE = 'i18n-class'
const IMG_ATTRIBUTE = 'i18n-img'
const CONTENT_ATTRIBUTE = 'i18n-content'
const PLACEHOLDER_ATTRIBUTE = 'i18n-placeholder'
const LOCALE_PATTERN = /\$\{locale}/g

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

      this.handlerClass()
      this.handlerImg()
      this.handlerContent()
      this.handlerInput()
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
    this.doms.classDoms.forEach((dom, index) => {
      addClass(dom, dom.getAttribute(CLASS_ATTRIBUTE))
    })
  }

  handlerImg() {
    this.doms.imgDoms.forEach((dom, index) => {
      let src = dom.getAttribute(IMG_ATTRIBUTE).replace(LOCALE_PATTERN, this.locale)
      dom.src = src
    })
  }

  handlerContent() {
    this.doms.contentDoms.forEach((dom, index) => {
      let content = dom.getAttribute(CONTENT_ATTRIBUTE)
      dom.innerHTML = this.messages[this.locale][content]
    })
  }

  handlerInput() {
    this.doms.inputDoms.forEach((dom, index) => {
      let placeHolderKey = dom.getAttribute(PLACEHOLDER_ATTRIBUTE)
      dom.setAttribute('placeholder', this.currMessage[placeHolderKey])
    })
  }
}