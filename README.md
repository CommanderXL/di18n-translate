## di18n翻译函数

## How to

```javascript
  const DI18n = require('di18n-translate')
  const di18n = new DI18n({
    locale: 'en',       // 语言环境
    isReplace: false,   // 是否开启运行时功能(适用于没有使用任何构建工具开发流程)
    messages: {         // 语言映射表
      en: {
        你好: 'Hello, {xl}'
      },
      zh: {
        你好: '你好, {xl}'
      }
    }
  })
```

  di18n有2个翻译方法: `$t`, `$html`


```javascript
  // 带参数
  di18n.$t('你好', {person: 'xl'})    
  // 输出 Hello, xl
```

字符串拼接的`dom`中使用`${locale}`表示语言环境，`$t()`标识需要翻译的字段，用法如下:
```javascript
let tpl = '<div class="wrapper ${locale}">' +
    '<img src="/images/${locale}/test.png">' +
    '<p>$t("你好")</p>' + 
    '</div>'

let str = di18n.$html(tpl)

// 字符串替换后输出字符串str: 
  <div class="wrapper en">
    <img src="/images/en/test.png">
    <p>Hello</p>
  </div>

// 最后再将这个dom字符串传入到页面当中去
document.querySelector('.box-wrapper').innerHTML = str
```


手动设置语言版本，并更新页面内容
```javascript
  di18n.setLocale('en', function () {
    // 回调函数
  })
```
