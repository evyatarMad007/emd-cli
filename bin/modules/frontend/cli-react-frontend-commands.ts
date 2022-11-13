
import EMDReactFrontendGenerator from './cli-react-frontend-generator';

class EMDReactFrontendCommands {

    // create components, [commons, layouts, pages, templates, animations, statics, utils]
    createComponent(componentType, sourceFileName, sourceFileType) {
        switch (componentType) {
            case 'common':
                EMDReactFrontendGenerator.createCommon(sourceFileName, sourceFileType)
                break;
            case 'layout':
                EMDReactFrontendGenerator.createLayout(sourceFileName, sourceFileType)
                break;
            case 'page':
                EMDReactFrontendGenerator.createPage(sourceFileName, sourceFileType)
                break;
            case 'template':
                EMDReactFrontendGenerator.createTemplate(sourceFileName, sourceFileType)
                break;
            case 'animation':
                EMDReactFrontendGenerator.createAnimation(sourceFileName, sourceFileType)
                break;
            case 'static':
                EMDReactFrontendGenerator.createStatic(sourceFileName, sourceFileType)
                break;
            case 'util':
                EMDReactFrontendGenerator.createUtil(sourceFileName, sourceFileType)
                break;
        }
        
    }

}

export default new EMDReactFrontendCommands()