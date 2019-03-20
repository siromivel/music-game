"use strict"

process.env.NODE_ENV = "test"

const chai = require("chai")
const chaiAsPromised = require("chai-as-promised")
const should = chai.should()
chai.use(chaiAsPromised)

const InstrumentToken = artifacts.require("InstrumentToken")

contract("InstrumentToken", function([owner, ...otherAddresses]) {
    beforeEach(async function() {
        this.instrumentToken = await InstrumentToken.new("Fiddle", "FID")
    })

    describe("musicLesson", function () {
        it("correctly grants tokens to the student and teacher", async function() {
            let studentBalance = await this.instrumentToken.balanceOf(otherAddresses[0])
            let teacherBalance = await this.instrumentToken.balanceOf(owner)
            studentBalance.words[0].should.to.equal(0)
            teacherBalance.words[0].should.to.equal(1)

            await this.instrumentToken.musicLesson(otherAddresses[0])
            
            studentBalance = await this.instrumentToken.balanceOf(otherAddresses[0])
            teacherBalance = await this.instrumentToken.balanceOf(owner)
            studentBalance.words[0].should.to.equal(1)
            teacherBalance.words[0].should.to.equal(2)
        })

        it("only a wallet holding a token can give lessons", async function() {
            let studentBalance = await this.instrumentToken.balanceOf(otherAddresses[0])
            let teacherBalance = await this.instrumentToken.balanceOf(otherAddresses[1])
            studentBalance.words[0].should.to.equal(0)
            teacherBalance.words[0].should.to.equal(0)

            await this.instrumentToken.musicLesson(otherAddresses[0], { from: otherAddresses[1] })
                .should.be.rejectedWith(/Only a master can give lessons/)
        })

        it("can only give lessons to a wallet with no tokens", async function() {
            await this.instrumentToken.musicLesson(otherAddresses[0])
            await this.instrumentToken.musicLesson(otherAddresses[0])
                .should.be.rejectedWith(/You cannot teach a master/)
        })
    })

    describe("getTokensOfOwner", function() {
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
