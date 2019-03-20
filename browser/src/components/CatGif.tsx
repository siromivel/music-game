import React from "react"
import { SymbolToGifMap } from "../constants/SymbolToGifMap"

export const CatGif = (props: { symbol: string }) =>
    <img
        className={`${SymbolToGifMap[props.symbol as keyof typeof SymbolToGifMap]}-cat-gif block-center`}
        src={`../assets/${SymbolToGifMap[props.symbol as keyof typeof SymbolToGifMap] || "pixel"}cat.gif`}
    />
