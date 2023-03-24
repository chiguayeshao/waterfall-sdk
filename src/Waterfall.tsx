import React, { useState, useRef, useCallback, useEffect } from "react";

// 定义组件属性类型
interface Props {
  items: React.ReactNode[]; // 要显示的项目
  columnCount: number; // 列数
  itemWidth: number; // 项目宽度
  itemHeight: number; // 项目高度
  itemMargin: number; // 项目边距
}

const Waterfall: React.FC<Props> = ({
  items,
  columnCount,
  itemWidth,
  itemHeight,
  itemMargin,
}) => {
  const [startIndex, setStartIndex] = useState(0); // 控制显示的项目起始索引

  const containerRef = useRef<HTMLDivElement>(null); // 容器元素引用

  // 处理滚动事件
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;

    // 当滚动到底部时，更新起始索引以显示更多项目
    if (scrollTop + clientHeight >= scrollHeight) {
      setStartIndex((prevStartIndex) => prevStartIndex + columnCount);
    }
  }, [columnCount]);

  // 根据起始索引和可见项目数量计算要显示的项目
  const visibleItems = items.slice(
    startIndex,
    startIndex + columnCount * Math.ceil(items.length / columnCount)
  );

  // 定义项目样式类
  const getItemClasses = () =>
    "relative w-full h-full flex items-center justify-center text-white";

  // 添加滚动事件监听器
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 清除滚动事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // 返回组件JSX
  return (
    <div
      className="h-screen w-screen overflow-y-auto"
      ref={containerRef}
      onScroll={handleScroll}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div
        className="relative w-full"
        style={{
          height: `${
            (itemHeight + itemMargin) * Math.ceil(items.length / columnCount)
          }px`,
          width: `${columnCount * (itemWidth + itemMargin)}px`,
        }}
      >
        {visibleItems.map((item, index) => (
          <div
            key={startIndex + index}
            className="absolute flex items-center justify-center"
            style={{
              width: `${itemWidth}px`,
              height: `${itemHeight}px`,
              left: `${
                (index % columnCount) * (itemWidth + itemMargin) +
                itemMargin / 2
              }px`,
              top: `${
                Math.floor(index / columnCount) * (itemHeight + itemMargin) +
                itemMargin / 2
              }px`,
            }}
          >
            <div className="absolute inset-0 bg-gray-400"></div>
            <div className={getItemClasses()}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Waterfall;
