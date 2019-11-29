# giftogif2

两张 gif 合成一张自定义轨迹的 gif

## 说明

此插件的作用是将两张 gif 合成一张 gif，选择背景 gif 图和需要重新定义运动轨迹的 gif，调用方法后，即可生成一张新的 gif 图。

## 使用示例

```html
引入文件：
<script src="./dist/libgif.js"></script>
<script src="./dist/gif.js"></script>
<script src="./dist/giftogif2-v1.0.min.js"></script>

 <body>
    <div>选择文件<input type="file" OnChange="handleUpload(event)" /></div>
    <div>选择背景<input type="file" OnChange="handleUpload(event,'bg')" /></div>
    <div><button OnClick="startDraw()">开始绘制</button></div>
  </body>
  <script>
    let files = [];
    function handleUpload(e, type) {
      files.push({
        file: e.path[0].files[0],
        type
      });
    }

    function startDraw() {
      new GIFTOGIF2({
        files: files,
        stepX: 10,
        direction: "x",
        width: 60,
        height: 30
      });
    }
  </script>

```

## 参数说明

 参数  | 说明  | 类型 | 可选值 | 默认值
 ---- | ----- | ---- | ---- | ---- | 
 files | 传入的gif文件(必传)和类型(type:bg为背景) | `array` | - 
 width | 自定义轨迹gif的宽 | `number` | - | 100 
 height | 自定义轨迹gif的高 | `number` | - | 100 
 direction | gif自定义轨迹的方向 | `string` | all(x和y两个方向移动)、x、y | all 
 stepX | X轴自定义轨迹的步长 | `number` | - | 10 
 stepY | Y轴自定义轨迹的步长 | `number` | - | 10 
 totalStep | 总步长 | `number` | - | 200 | 

 ## demo 参考
  [Demo](https://alice-qian.github.io/giftogif2/)