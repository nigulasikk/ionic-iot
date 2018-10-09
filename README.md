ionic记录

项目quick start

    npm install
    npm start

创建新页面,新组件,新tabs

    ionic g

ionic集成echart

    npm install typings --save-dev
    npm install @types/echarts echarts --save

Debug 调试

    ionic serve -c

构建安卓app

    ionic cordova build android

Todo:

- Weather(初步完成)
- comfort(初步完成)
- Equipment(初步完成)
- Action(初步完成)
- Notification(完成部分)
- 折线图
- 地图（如果准备用谷歌地图的话，需要你们照着下面文档链接注册一下，然后提供一下安卓和苹果的API KEY）https://developers.google.com/maps/documentation/embed/get-api-key
- 等UI设计图确定了，照着设计标注把所有页面UI调整一遍
- 把UI代码封装成组件，方便后续工程化（如果后续要把demo工程化的话）
