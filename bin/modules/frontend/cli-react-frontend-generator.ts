import EMDFiles from '../utils/create-files';
import { firstWordUpperCase } from '../utils/utils';

class EMDReactFrontendGenerator {

    // # create styled component file
    createStyledComponent(Filename, fileType) {
            EMDFiles.createFileAndFolder(
                `${firstWordUpperCase(Filename)}.styled.ts`,
                `./src/components/common/${firstWordUpperCase(Filename)}`,
                `
import styled, { css } from "styled-components";

interface IProps {
    $example: boolean;
}
    
export const ${firstWordUpperCase(Filename)}Style = styled.${fileType}\`\`;

// @ Example of using props
//  \${(props: IProps) =>  {
//     \if( props.$example ) {
//         \return css\`
//             \width: 100%;
//         \`;
//     \}
// }}
`
    )
    }

    // # create common component file
    createCommon(Filename, fileType) {

        EMDFiles.createFileAndFolder(
            `${firstWordUpperCase(Filename)}.common.ts`,
            `./src/components/common/${firstWordUpperCase(Filename)}`,
            `
import React, { useState, useEffect } from 'react'
import { ${firstWordUpperCase(Filename)}Style } from './${firstWordUpperCase(Filename)}.styled'

interface IProps {
    children: any;
}

export const ${firstWordUpperCase(Filename)}: React.FC<IProps> = ({children}) => {

//    const [mock, setMock] = useState<boolean>(false);

//    useEffect(() => {

//      return () => {}
//    }, [dependency])
   
   return (
        <${firstWordUpperCase(Filename)}Style>{children}</${firstWordUpperCase(Filename)}Style>
   )
}

            `
)
        this.createStyledComponent(Filename, fileType)
}

    // # create layouts component file
    createLayout(Filename, fileType) {

        EMDFiles.createFileAndFolder(
            `${firstWordUpperCase(Filename)}.layout.ts`,
            `./src/components/layouts/${firstWordUpperCase(Filename)}`,
            `
import React, { useState, useEffect } from 'react'
import { ${firstWordUpperCase(Filename)}Style } from './${firstWordUpperCase(Filename)}.styled'

interface IProps {
    children: any;
}

export const ${firstWordUpperCase(Filename)}: React.FC<IProps> = ({children}) => {

//    const [mock, setMock] = useState<boolean>(false);

//    useEffect(() => {

//      return () => {}
//    }, [dependency])
   
   return (
        <${firstWordUpperCase(Filename)}Style>{children}</${firstWordUpperCase(Filename)}Style>
   )
}

            `
)
        this.createStyledComponent(Filename, fileType)
}

    // # create page component file
    createPage(Filename, fileType) {

        EMDFiles.createFileAndFolder(
            `${firstWordUpperCase(Filename)}.page.ts`,
            `./src/components/pages/${firstWordUpperCase(Filename)}`,
            `
import React, { useState, useEffect } from 'react'
import { ${firstWordUpperCase(Filename)}Style } from './${firstWordUpperCase(Filename)}.styled'

interface IProps {
    children: any;
}

export const ${firstWordUpperCase(Filename)}: React.FC<IProps> = ({children}) => {

//    const [mock, setMock] = useState<boolean>(false);

//    useEffect(() => {

//      return () => {}
//    }, [dependency])
   
   return (
        <${firstWordUpperCase(Filename)}Style>{children}</${firstWordUpperCase(Filename)}Style>
   )
}

            `
)
        this.createStyledComponent(Filename, fileType)
}

    // # create template component file
    createTemplate(Filename, fileType) {

        EMDFiles.createFileAndFolder(
            `${firstWordUpperCase(Filename)}.template.ts`,
            `./src/components/template/${firstWordUpperCase(Filename)}`,
            `
import React, { useState, useEffect } from 'react'
import { ${firstWordUpperCase(Filename)}Style } from './${firstWordUpperCase(Filename)}.styled'

interface IProps {
    children: any;
}

export const ${firstWordUpperCase(Filename)}: React.FC<IProps> = ({children}) => {

//    const [mock, setMock] = useState<boolean>(false);

//    useEffect(() => {

//      return () => {}
//    }, [dependency])
   
   return (
        <${firstWordUpperCase(Filename)}Style>{children}</${firstWordUpperCase(Filename)}Style>
   )
}

            `
)
        this.createStyledComponent(Filename, fileType)
}

    // # create static component file
    createStatic(Filename, fileType) {

        EMDFiles.createFileAndFolder(
            `${firstWordUpperCase(Filename)}.static.ts`,
            `./src/components/static/${firstWordUpperCase(Filename)}`,
            `
import React, { useState, useEffect } from 'react'
import { ${firstWordUpperCase(Filename)}Style } from './${firstWordUpperCase(Filename)}.styled'

interface IProps {
    children: any;
}

export const ${firstWordUpperCase(Filename)}: React.FC<IProps> = ({children}) => {

//    const [mock, setMock] = useState<boolean>(false);

//    useEffect(() => {

//      return () => {}
//    }, [dependency])
   
   return (
        <${firstWordUpperCase(Filename)}Style>{children}</${firstWordUpperCase(Filename)}Style>
   )
}

            `
)
        this.createStyledComponent(Filename, fileType)
}

    // # create animation component file
    createAnimation(Filename, fileType) {

        EMDFiles.createFileAndFolder(
            `${firstWordUpperCase(Filename)}.animation.ts`,
            `./src/components/animation/${firstWordUpperCase(Filename)}`,
            `
import React, { useState, useEffect } from 'react'
import { ${firstWordUpperCase(Filename)}Style } from './${firstWordUpperCase(Filename)}.styled'

interface IProps {
    children: any;
}

export const ${firstWordUpperCase(Filename)}: React.FC<IProps> = ({children}) => {

//    const [mock, setMock] = useState<boolean>(false);

//    useEffect(() => {

//      return () => {}
//    }, [dependency])
   
   return (
        <${firstWordUpperCase(Filename)}Style>{children}</${firstWordUpperCase(Filename)}Style>
   )
}

            `
)
        this.createStyledComponent(Filename, fileType)
}

    // # create util component file
    createUtil(Filename, fileType) {

        EMDFiles.createFileAndFolder(
            `${firstWordUpperCase(Filename)}.util.ts`,
            `./src/components/util/${firstWordUpperCase(Filename)}`,
            `
import React, { useState, useEffect } from 'react'
import { ${firstWordUpperCase(Filename)}Style } from './${firstWordUpperCase(Filename)}.styled'

interface IProps {
    children: any;
}

export const ${firstWordUpperCase(Filename)}: React.FC<IProps> = ({children}) => {

//    const [mock, setMock] = useState<boolean>(false);

//    useEffect(() => {

//      return () => {}
//    }, [dependency])
   
   return (
        <${firstWordUpperCase(Filename)}Style>{children}</${firstWordUpperCase(Filename)}Style>
   )
}

            `
)
        this.createStyledComponent(Filename, fileType)
}

}
    

export default new EMDReactFrontendGenerator()