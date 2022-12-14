#!/usr/bin/env node
// import CLIBackend from './modules/terminal-area/cli-backend';
// import CLIFrontend from './modules/terminal-area/cli-frontend';
import CLIHelp from './modules/terminal-area/cli-help';
import CLIMsg from './modules/utils/cli-msg';
const args = process.argv.slice(2);
const workSpaceName = args[0];


// listen to the sourceFileName and run the command
function CLIMapper() {
    switch (workSpaceName) {
        case 'backend':
            // CLIBackend(args);
            break;
        case 'frontend':
            // CLIFrontend(args);
            break;
        case '--help':
            CLIHelp.help();
            break;
        default:
            CLIMsg.errorMsg(`Syntax Error: workspace: - ${workSpaceName} is not valid!`);
            CLIMsg.warningMsg(`Example: emd-cli backend or emd-cli frontend`);
            CLIMsg.infoMsg(`for more information write: emd-cli --help`);
            break;
    }
}
CLIMapper()