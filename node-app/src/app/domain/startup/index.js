// # Step 2 - Setting up Config - Add application starter code

const { validateEnvProvidedConfig } = require("../config");
const { AppHttpServer } = require("../http-server");


class AppStarter{
    static async startServices(){
        console.log('Preparing enviornment variables...')
        
        validateEnvProvidedConfig();

        console.log('Starting services for application');

        await AppHttpServer.start()
        
        console.log('All services started for application successfully!!')
    }
}


module.exports={
    AppStarter
}