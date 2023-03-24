# Waterfall SDK

一个使用 React、TypeScript 和 Tailwind CSS 实现的瀑布流组件 SDK。

## 安装

要在您的项目中安装 Waterfall SDK，请运行以下命令：

```bash
npm install --save waterfall-sdk
```

## 使用

在您的 React 项目中，按照以下步骤使用 Waterfall SDK：

1. 导入 Waterfall 组件：

   ```javascript
   import Waterfall from "waterfall-sdk";
   ```

2. 使用 Waterfall 组件：

   ```javascript
   const App: React.FC = () => {
     const items = Array.from({ length: TOTAL_ITEMS }, (_, id) => (
       <div
         key={id}
         className="relative w-full h-full flex items-center justify-center text-white"
         style={{ backgroundColor: "#ccc" }}
       >
         {id + 1}
       </div>
     ));

     return (
       <Waterfall
         items={items}
         columnCount={COLUMN_COUNT}
         itemWidth={ITEM_WIDTH}
         itemHeight={ITEM_HEIGHT}
         itemMargin={ITEM_MARGIN}
       />
     );
   };
   ```

   请根据您的需求设置 `TOTAL_ITEMS`、`COLUMN_COUNT`、`ITEM_WIDTH`、`ITEM_HEIGHT` 和 `ITEM_MARGIN` 变量。

## API

### Waterfall

#### Props

| 属性        | 类型              | 描述                   |
| ----------- | ----------------- | ---------------------- |
| items       | React.ReactNode[] | 要显示的项目数组       |
| columnCount | number            | 瀑布流的列数           |
| itemWidth   | number            | 每个项目的宽度（像素） |
| itemHeight  | number            | 每个项目的高度（像素） |
| itemMargin  | number            | 项目之间的边距（像素） |

## 示例

下面是一个完整的使用示例：

```javascript
// App.tsx
import React from "react";
import Waterfall from "waterfall-sdk";

const COLUMN_COUNT = 1;
const ITEM_WIDTH = 300;
const ITEM_HEIGHT = 200;
const ITEM_MARGIN = 16;
const TOTAL_ITEMS = 100;

const App: React.FC = () => {
  const items = Array.from({ length: TOTAL_ITEMS }, (_, id) => (
    <div
      key={id}
      className="relative w-full h-full flex items-center justify-center text-white"
      style={{ backgroundColor: "#ccc" }}
    >
      {id + 1}
    </div>
  ));

  return (
    <Waterfall
      items={items}
      columnCount={COLUMN_COUNT}
      itemWidth={ITEM_WIDTH}
      itemHeight={ITEM_HEIGHT}
      itemMargin={ITEM_MARGIN}
    />
  );
};
export default App;
```
