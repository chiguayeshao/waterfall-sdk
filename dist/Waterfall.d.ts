import React from "react";
export interface WaterfallProps {
    items: React.ReactNode[];
    columnCount: number;
    itemWidth: number;
    itemHeight: number;
    itemMargin: number;
}
declare const Waterfall: React.FC<WaterfallProps>;
export default Waterfall;
