"use strict"

process.env.NODE_ENV = "test"

const chai = require("chai")
const chaiAsPromised = require("chai-as-promised")
const should = chai.should()
chai.use(chaiAsPromised)

const InstrumentToken = artifacts.require("InstrumentToken")
const PaintMixer = artifacts.require("PaintMixer")

contract("InstrumentToken", function([owner, ...otherAddresses]) {
    beforeEach(async function() {
        this.paintMixer = await PaintMixer.new()
        this.instrumentToken = await InstrumentToken.new("Fiddle", "FID", this.paintMixer.address)

        const genesisInstrument = await this.instrumentToken.getInstrument(0)
        const targetBlock = genesisInstrument[4].words[0]
        skipToBlock(targetBlock)
    })

    describe("musicLesson", function () {
        it("correctly grants tokens to the student and teacher", async function() {
            let studentBalance = await this.instrumentToken.balanceOf(otherAddresses[0])
            let teacherBalance = await this.instrumentToken.balanceOf(owner)
            studentBalance.words[0].should.equal(0)
            teacherBalance.words[0].should.equal(1)

            await this.instrumentToken.musicLesson(otherAddresses[0])

            studentBalance = await this.instrumentToken.balanceOf(otherAddresses[0])
            teacherBalance = await this.instrumentToken.balanceOf(owner)
            studentBalance.words[0].should.equal(1)
            teacherBalance.words[0].should.equal(2)
        })

        it("only a wallet holding a token can give lessons", async function() {
            let studentBalance = await this.instrumentToken.balanceOf(otherAddresses[0])
            let teacherBalance = await this.instrumentToken.balanceOf(otherAddresses[1])
            studentBalance.words[0].should.equal(0)
            teacherBalance.words[0].should.equal(0)

            await this.instrumentToken.musicLesson(otherAddresses[0], { from: otherAddresses[1] })
                .should.be.rejectedWith(/REQUIRES_INSTRUMENT/)
        })

        it("can only give lessons to a wallet with no tokens", async function() {
            await this.instrumentToken.musicLesson(otherAddresses[0])
            await this.instrumentToken.musicLesson(otherAddresses[0])
                .should.be.rejectedWith(/STUDENT_MUST_NOT_HAVE_INSTRUMENT/)
        })
    })

    describe("getTokensOfSender", function() {
        it("correctly returns a list of tokens owned by an address", async function() {
            await this.instrumentToken.musicLesson(otherAddresses[0])

            const noTokens = await this.instrumentToken.getTokensOfSender({ from: otherAddresses[1] })
            const studentTokens = await this.instrumentToken.getTokensOfSender({ from: otherAddresses[0] })
            const teacherTokens = await this.instrumentToken.getTokensOfSender()

            mapSolidityUintArrToArr(noTokens).should.eql([])
            mapSolidityUintArrToArr(studentTokens).should.eql([1])
            mapSolidityUintArrToArr(teacherTokens).should.eql([0, 2])
        })
    })
})

function mapSolidityUintArrToArr(arr) {
    return arr.map(val => val.words[0])
}

function send(method, params = []) {
    const id = 0
    const jsonrpc = "2.0"
    web3.currentProvider.send({ id, jsonrpc, method, params }, () => {})
}

async function skipToBlock(blockNumber) {
    const currentBlock = await web3.eth.getBlockNumber()
    const blocksToMine = blockNumber - currentBlock

    let mined = 0;
    while (mined < blocksToMine) {
        await send("evm_mine")
        mined++
    }
}
