import colors from 'colors';

class CLIMsg {

    errorMsg = CLIMsg.errorMsg
    successMsg = CLIMsg.successMsg
    infoMsg = CLIMsg.infoMsg
    warningMsg = CLIMsg.warningMsg

    static errorMsg(message) {
        return console.log(colors.bold.red(message))
    }

    static successMsg(message) {
        return console.log(colors.bold.green(message)) 
    }

    static infoMsg(message) {
        return console.log(colors.cyan(message)) 
    }

    static warningMsg(message) {
        return console.log(colors.yellow(message)) 
    }
}

export default new CLIMsg()
