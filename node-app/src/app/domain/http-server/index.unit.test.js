const { AppHttpServer } = require(".")

const express = () => {
    return {
        use : jest.fn(),
        listen : (port,callback) => callback()
    }
}

express.json = jest.fn()
jest.mock('express',()=> express)

beforeEach(()=>{
    jest.clearAllMocks();
})
describe("http-server",()=>{
    describe("AppHttpServer.start",()=>{
        test("When Start is called , http-server promise resolved to be undefined",async()=>{
            
              expect(AppHttpServer.start()).resolves.toEqual(undefined)
              
        })
    })
})