// # Step 2 - Setting up Config - Add application starter code

const { validateEnvProvidedConfig } = require("../config")


class AppStarter{
    static startServices(){
        console.log('Preparing enviornment variables...')
        
        validateEnvProvidedConfig();
        
        console.log('All services started for application successfully!!')
    }
}


module.exports={
    AppStarter
}