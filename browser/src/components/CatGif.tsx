import React from "react"
import { SymbolToGifMap } from "../constants/SymbolToGifMap"

function gifSrc(balance: number | "", symbol: string): string {
    return balance ? SymbolToGifMap[symbol as keyof typeof SymbolToGifMap] || "pixel" : "pixel"
}

export const CatGif = (props: { balance: number | "", symbol: string }) =>
    <img
        className={`${SymbolToGifMap[props.symbol as keyof typeof SymbolToGifMap]}-cat-gif block-center`}
        src={`../assets/${gifSrc(props.balance, props.symbol)}cat.gif`}
    />
