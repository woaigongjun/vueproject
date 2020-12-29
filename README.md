
## 开发

```bash

# 安装yarn
npm i yarn -g

# 安装依赖
yarn

# 启动服务
yarn dev:local
```

浏览器访问 http://localhost:30000

## 发布

```bash
# 构建测试环境
yarn build:stage

# 构建生产环境
yarn build
```

## 其它

```bash
# 预览发布环境效果
yarn preview

# 预览发布环境效果 + 静态资源分析
yarn preview -- --report

# 代码格式检查
yarn lint


```

## 兼容性测试
- Chrome 78 ✅
- FF 70 ✅
- edge 🥺
    - Fixed布局平滑滚动错位
    - 关闭按钮圆角尺寸异常
- IE 11 🥺
    - Element的性能问题
    
