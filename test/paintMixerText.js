
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
                                  .then(r => r.map(mapUint24ToHexColorString))

        result.length.should.equal(4)
        result.forEach(val => /^#[0-9A-F]{6}$/.test(val).should.be.true)
    })
})

function mapUint24ToHexColorString(uint24) {
    return "#" + uint24.words[0].toString(16).toUpperCase()
}
