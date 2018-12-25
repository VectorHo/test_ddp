# FAQ

## 开发相关

Q. 在项目中导入组件的时候, 组件报了一个找不到 css 的错误该怎么办?
A. 因为项目使用了按需导入 css, 若是使用的库(例如 Vant)没有按照 css 对应组件实现的话可能会出现该问题,解决方法是在`comp.config.js`中, exclusions 项里添加需要排除按需导入 css 的组件, 例如:
`import { Lazyload } from 'van'` 那么就可以配置 `exclusions:['Lazyload']`, DateTimePicker 比较特殊,用的是 Picker 的样式, 所以引入 DateTimePicker 的同时请(可在 plugin 中)引入 Picker
