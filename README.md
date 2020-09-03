mobx-react-lite

1、安装 
yarn add mbox --save
yarn add mbox-react --save
yarn add mobx-react-lite
yarn add mobx-react-tree

2、使用时，关键字符@ abserver ... 需要经过 @babel 、jsconfig.json/tsconfig.json 处理，否则报错


jsconfig.json/tsconfig.json
```
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```

@babel包

1、babel-plugin-transform-decorators-legacy
2、@babel/plugin-proposal-decorators
3、@babel/plugin-proposal-class-properties

package.json 修改 babel

```
"babel": {
  "plugins":[
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy":true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose":true
      }
    ]
  ],
  "presets":[
    "react-app"
  ]
},
```

3、