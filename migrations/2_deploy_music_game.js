const InstrumentToken = artifacts.require("InstrumentToken")

module.exports = async function(deployer) {
    await deployer.deploy(InstrumentToken, "Fiddle", "FID")
}
