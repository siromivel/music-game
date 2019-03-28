import { BigNumber } from "ethers/utils";

export default function mapUint24ToHexColor(uint24: BigNumber): string {
    const hex = uint24.toHexString()
    const len = hex.length
    const rgb = []

    for (let i = 0; i < len; i += 2) {
        rgb.push(hex.slice(i, i + 2).padStart(2, "0"))
    }

    return "#" + rgb.join("").toUpperCase()
}
