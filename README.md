## di18n翻译函数

## How to

```javascript
  const DI18n = require('di18n-translate')
  const di18n = new DI18n({
    locale: 'en',       // 语言环境
    isReplace: false,   // 是否进行替换(适用于没有使用任何构建工具开发流程)
    messages: {         // 语言映射表
      en: {
        你好: 'Hello'
      },
      zh: {
        你好: '你好'
      }
    }
  })

  // 无参数
  di18n.$t('你好')
  // 有参数
  di18n.$t('你好', {person: 'xl'})
```