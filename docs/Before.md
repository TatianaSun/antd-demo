### 基于React和ant-design的小案例antd-demo
## 后台管理系统模拟部分

```bash
#使用脚手架工具初始化项目
create-react-app antd-demo

# 把ant-design 安装到项目中
cd antd-demo
yarn add antd
```
---

- 修改css样式

```css
# 引入css
@import '~antd/dist/antd.css';

```
---

- 布局头部,侧边栏和中间内容部分

> 参考文档ant-design

- 配置侧边栏导航菜单并修改样式
- 配置路由及侧边栏导航链接

```cmd
# 配置路由
yarn add react-router-dom
# 或者
npm install react-router-dom
```
- 配置导航链接,添加link

