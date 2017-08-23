const DI18n = require('./dist/di18n')
const di18n = new DI18n({
  locale: 'en',
  isReplace: false,
  messages: {
    en: {
      你好: 'Hello',
      设置密码: '设置登录密码',
      记住密码: '设置密码可保障资金安全，密码为后续登录凭证，请务必牢记',
      确定11: "确定"
    },
    zh: {
      你好: '你好'
    }
  }
})

let html = '<div class="title">$t("你好")</div><p class="desc">$t("记住密码")</p><div class="pwd-btn btn-hook">$t("确定")</div>'

console.log(di18n.$html(html))