// # Step 2 - Setting up Config - Add application starter code

const { validateEnvProvidedConfig } = require("../config");
const { AppHttpServer } = require("../http-server");
const {logger} = require('../logger')

class AppStarter{
    static async startServices(){
        logger.info('Preparing enviornment variables...')
        
        validateEnvProvidedConfig();

        logger.info('Starting services for application');

        await AppHttpServer.start()
        
        logger.info('All services started for application successfully!!')
    }
}


module.exports={
    AppStarter
}