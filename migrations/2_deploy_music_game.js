const PaintMixer = artifacts.require("PaintMixer")
const InstrumentToken = artifacts.require("InstrumentToken")

module.exports = async function(deployer) {
    await deployer.deploy(PaintMixer)
    .then((mixer) => deployer.deploy(InstrumentToken, "Fiddle", "FID", mixer.address))
}
