const dotenv = require('dotenv');
const {logger} = require('../logger')

dotenv.config()


// # Step 2 - Setting up Config - Add basic config

// process.env.ENV
const config = {
ENV : process.env.ENV,
EXPRESS_PORT : parseInt(process.env.EXPRESS_PORT,10),
SECRET: process.env.SECRET,
API_URL: process.env.API_URL
}

function validateEnvProvidedConfig(){
    const requiredConfigVariables = [
        "ENV",
        "EXPRESS_PORT",
        "SECRET",
        "API_URL"
    ]

    const missingConfigVariables = [];

    for( const requiredConfigVariable of requiredConfigVariables) {
        if(!process.env[requiredConfigVariable]){
            missingConfigVariables.push(requiredConfigVariable)
        }
    }

    if(missingConfigVariables.length !== 0){
        logger.error('Missing environment variables in config :');
    
       for(const missingConfigVariable of missingConfigVariables){
        logger.error(`Missing variable: ${missingConfigVariable}`)
       }
       process.exit(1);
    }
}

module.exports = {
    config,
    validateEnvProvidedConfig
}