import CLIMsg  from './cli-msg';
import fs from 'fs';

class EMDFiles {

    // @@@ Create a new file and new folder.
    //  - if folder exist, create only file.
    //  - if file exist, return error.
    createFileAndFolder(fileName: string, filePath: string, fileContent: string): void {
        const file = `${filePath}/${fileName}`
        const folder = filePath

        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder)
            fs.writeFileSync(file, fileContent)
            CLIMsg.successMsg(`File ${fileName} created in ${filePath}`)
        }
        else if (fs.existsSync(folder) && !fs.existsSync(file)) {
            fs.writeFileSync(file, fileContent)
            CLIMsg.successMsg(`File ${fileName} created in ${filePath}`)
        }
        else {
            CLIMsg.errorMsg(`File ${fileName} already exist in ${filePath}`)
        }
    }

    // @@@ check if base.controller.ts file exist.
    // - if not exist, return false.
    // - if exist, return true.
    checkFileExist(fileName: string, filePath: string): boolean {
        const file = `${filePath}/${fileName}`
        const folder = filePath

        if (!fs.existsSync(folder)) {
            return false
        }
        else if (fs.existsSync(folder) && !fs.existsSync(file)) {
            return false
        }
        else {
            return true
        }
    }
}

export default new EMDFiles()