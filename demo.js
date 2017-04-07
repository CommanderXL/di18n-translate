const DI18n = require('di18n-translate')
const di18n = new DI18n({
  locale: 'en',
  isReplace: false,
  messages: {
    en: {
      你好: 'Hello'
    },
    zh: {
      你好: '你好'
    }
  }
})

console.log(di18n.$t('你好'))