# AI宣传广告项目书

这是一个用于展示AI宣传广告业务的H5项目，可以在微信等移动端浏览器中打开。

## 项目结构

- `index.html` - 主页面，包含业务方向、优势和案例展示
- `styles.css` - 样式文件
- `script.js` - 主脚本文件，包含平滑滚动、视频添加等功能
- `contact.html` - 联系表单页面
- `video-demo.html` - 视频添加说明文档

## 功能特点

1. 响应式设计，适配各种移动设备
2. 微信优化，确保在微信浏览器中良好展示
3. 支持添加单个或多个视频案例
4. 包含联系表单页面

## 如何添加视频

在微信浏览器中，打开开发者工具（需要在电脑上操作），然后执行以下代码：

### 添加单个视频

```javascript
addVideo('视频URL地址', 'video/mp4');
```

### 添加多个视频

```javascript
addMultipleVideos([
    {
        title: '视频标题1',
        url: '视频URL1',
        type: 'video/mp4',
        description: '视频描述1'
    },
    {
        title: '视频标题2',
        url: '视频URL2',
        type: 'video/mp4',
        description: '视频描述2'
    }
]);
```

## 部署说明

1. 将所有文件上传到Web服务器
2. 确保所有文件在同一目录下
3. 访问 `index.html` 文件即可开始浏览

## 自定义设置

在投入使用前，请务必更新以下内容：

1. 在 `index.html` 和 `contact.html` 中更新联系信息
2. 添加您的视频案例（参考 `video-demo.html`）
3. 根据需要调整样式和颜色

## 兼容性

- 支持最新版本的Chrome、Safari、Firefox和Edge浏览器
- 支持iOS和Android设备上的微信浏览器
- 建议使用iOS 11+和Android 7+系统 