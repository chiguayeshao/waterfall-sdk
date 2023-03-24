// App.tsx
import React from "react";
import Waterfall from "./Waterfall";

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
