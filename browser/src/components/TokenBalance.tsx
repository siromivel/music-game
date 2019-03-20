import React from "react"

type TokenBalanceProps = { balance: number | "", symbol: string }

export const TokenBalance = (props: TokenBalanceProps) => 
    <div className=".balance">{`Balance: ${props.balance} ${props.symbol}`}</div>
