
import EMDNodeServerGenerator from './cli-node-server-generator';

class EMDNodeServerCommands {

    // create controller, service, interface, model files
    createService(sourceFileName) {
        EMDNodeServerGenerator.createController(sourceFileName)
        EMDNodeServerGenerator.createService(sourceFileName)
        EMDNodeServerGenerator.createInterface(sourceFileName)
        EMDNodeServerGenerator.createModel(sourceFileName)
    }

}

export default new EMDNodeServerCommands()