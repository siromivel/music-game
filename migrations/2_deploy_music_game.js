const MusicGame = artifacts.require("MusicGame")
const MusicSchool = artifacts.require("MusicSchool")
const InstrumentToken = artifacts.require("InstrumentToken")

module.exports = async function(deployer) {
    await deployer.deploy(MusicSchool, "FiddleMastery", "FDM")
    await deployer.deploy(InstrumentToken, MusicSchool.address, "Fiddle", "FID")
    return deployer.deploy(MusicGame, MusicSchool.address, InstrumentToken.address)
}
