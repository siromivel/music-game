
process.env.NODE_ENV = "test"

const chai = require("chai")
const chaiAsPromised = require("chai-as-promised")
const should = chai.should()
chai.use(chaiAsPromised)

const PaintMixer = artifacts.require("PaintMixer")

contract("Paint mixer", function([owner, ...otherAddresses]) {
    beforeEach(async function() {
        this.paintMixer = await PaintMixer.new()
    })

    it("returns an array of four random valid hex color values", async function() {
        const result =  await this.paintMixer
                                  .mixPaint(owner, otherAddresses[0], 2)
                                  .then(r => r.map(mapUint24ToHexColorCode))

        result.length.should.equal(4)
        result.forEach((val) => /^#[0-9A-F]{6}$/.test(val).should.be.true)
    })
})

function mapUint24ToHexColorCode(uint24) {
    const hexStr = uint24.words[0].toString(16)
    const len = hexStr.length
    let rgb = []

    for (let i = 0; i < len; i += 2) {
        rgb.push(hexStr.slice(i, i + 2).padStart(2, "0"))
    }

    return "#" + rgb.join("").toUpperCase()
}
