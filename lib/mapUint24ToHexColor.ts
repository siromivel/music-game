export function mapUint24ToHexColor(uint24: number): string {
    const hex = uint24.toString(16)
    const rgb = []

    for (let i = 0; i < hex.length; i += 2) {
        rgb.push(hex.slice(i, i + 2).padStart(2, "0"))
    }

    return "#" + rgb.join("").toUpperCase()
}
