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
            expect(studentBalance.words[0]).to.equal(0)
            expect(teacherBalance.words[0]).to.equal(1)

            await this.instrumentToken.musicLesson(otherAddresses[0])
            
            studentBalance = await this.instrumentToken.balanceOf(otherAddresses[0])
            teacherBalance = await this.instrumentToken.balanceOf(owner)
            expect(studentBalance.words[0]).to.equal(1)
            expect(teacherBalance.words[0]).to.equal(2)
        })

        it("only a wallet holding a token can give lessons", async function() {
            let studentBalance = await this.instrumentToken.balanceOf(otherAddresses[0])
            let teacherBalance = await this.instrumentToken.balanceOf(otherAddresses[1])
            expect(studentBalance.words[0]).to.equal(0)
            expect(teacherBalance.words[0]).to.equal(0)

            await this.instrumentToken.musicLesson(otherAddresses[0], { from: otherAddresses[1] })
                .should.be.rejectedWith(/Only a master can give lessons/)
        })

        it("can only give lessons to a wallet with no tokens", async function() {
            await this.instrumentToken.musicLesson(otherAddresses[0])

            await this.instrumentToken.musicLesson(otherAddresses[0])
                .should.be.rejectedWith(/You cannot teach a master/)
        })
    })
})
