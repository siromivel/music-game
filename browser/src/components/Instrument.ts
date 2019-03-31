import { BigNumber } from "ethers/utils";
import { mapUint24ToHexColor } from "../../../lib/mapUint24ToHexColor"

export type InstrumentData = [number, number, number, number, BigNumber] 

export class Instrument {
    primary: string
    secondary: string
    tertiary: string
    quaternary: string
    nextProductionBlock: number

    constructor(primary: number, secondary: number, tertiary: number, quaternary: number, nextProductionBlock: BigNumber) {
        this.primary = mapUint24ToHexColor(primary)
        this.secondary = mapUint24ToHexColor(secondary)
        this.tertiary = mapUint24ToHexColor(tertiary)
        this.quaternary = mapUint24ToHexColor(quaternary)
        this.nextProductionBlock = nextProductionBlock.toNumber()
    }
}
