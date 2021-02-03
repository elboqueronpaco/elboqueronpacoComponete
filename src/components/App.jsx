import React from 'react'
import { Global } from '../elements/Global'
import { MainFormStyle } from '../elements/forms/MainForm'
import { TitleForm } from '../elements/forms/TitleForm'

export default function App() {
    return (
        
        <>
        <Global />

           <MainFormStyle>
                <TitleForm>Titulo del Fomulario</TitleForm>
           </MainFormStyle> 
        </>
    )
}
