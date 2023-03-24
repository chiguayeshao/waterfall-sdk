"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Waterfall = function (_a) {
    var items = _a.items, columnCount = _a.columnCount, itemWidth = _a.itemWidth, itemHeight = _a.itemHeight, itemMargin = _a.itemMargin;
    var _b = (0, react_1.useState)(0), startIndex = _b[0], setStartIndex = _b[1]; // 控制显示的项目起始索引
    var containerRef = (0, react_1.useRef)(null); // 容器元素引用
    // 处理滚动事件
    var handleScroll = (0, react_1.useCallback)(function () {
        if (!containerRef.current)
            return;
        var _a = containerRef.current, scrollTop = _a.scrollTop, clientHeight = _a.clientHeight, scrollHeight = _a.scrollHeight;
        // 当滚动到底部时，更新起始索引以显示更多项目
        if (scrollTop + clientHeight >= scrollHeight) {
            setStartIndex(function (prevStartIndex) { return prevStartIndex + columnCount; });
        }
    }, [columnCount]);
    // 根据起始索引和可见项目数量计算要显示的项目
    var visibleItems = items.slice(startIndex, startIndex + columnCount * Math.ceil(items.length / columnCount));
    // 定义项目样式类
    var getItemClasses = function () {
        return "relative w-full h-full flex items-center justify-center text-white";
    };
    // 添加滚动事件监听器
    (0, react_1.useEffect)(function () {
        window.addEventListener("scroll", handleScroll, { passive: true });
        // 清除滚动事件监听器
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);
    // 返回组件JSX
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "h-screen w-screen overflow-y-auto", ref: containerRef, onScroll: handleScroll, style: { scrollbarWidth: "none", msOverflowStyle: "none" } }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "relative w-full", style: {
                height: "".concat((itemHeight + itemMargin) * Math.ceil(items.length / columnCount), "px"),
                width: "".concat(columnCount * (itemWidth + itemMargin), "px"),
            } }, { children: visibleItems.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "absolute flex items-center justify-center", style: {
                    width: "".concat(itemWidth, "px"),
                    height: "".concat(itemHeight, "px"),
                    left: "".concat((index % columnCount) * (itemWidth + itemMargin) +
                        itemMargin / 2, "px"),
                    top: "".concat(Math.floor(index / columnCount) * (itemHeight + itemMargin) +
                        itemMargin / 2, "px"),
                } }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gray-400" }), (0, jsx_runtime_1.jsx)("div", __assign({ className: getItemClasses() }, { children: item }))] }), startIndex + index)); }) })) })));
};
exports.default = Waterfall;
//# sourceMappingURL=Waterfall.js.map