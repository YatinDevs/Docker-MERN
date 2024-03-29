const { validateEnvProvidedConfig } = require(".")
jest.mock('../logger');

describe("Config",()=>{
    describe("validateEnvProvidedConfig",()=>{
        test("Calls process.exit with a value of 1 if there are missing env variables",()=>{
            
                
                //demo
                // const result = true;
                // expect(result).toBe(true)

                const process = global.process;
                global.process = {
                    // 
                    exit : jest.fn(),
                    env : {}

                }


                validateEnvProvidedConfig();

                expect(global.process.exit).toHaveBeenCalledWith(1)

                global.process = process ;
        })
        test("Returns undefined when no missing env variables found",()=>{

                
                //demo
                // const result = true;
                // expect(result).toBe(true)

                const process = global.process;
                global.process = {
                    // 
                    exit : jest.fn(),
                    env : {
                        ENV : 'dev',
                        EXPRESS_PORT : '3000',
                        SECRET : 'secret',
                        API_URL : 'http://localhost:3000'
                    }

                }

                const res = validateEnvProvidedConfig();

                expect(global.process.exit).not.toHaveBeenCalled()
                expect(res).toBe(undefined);

                global.process = process ;
        })
    })
})