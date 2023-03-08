import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home/TelaInicial"
import Login from "./login/login"
import Sra from "./sra/Sra"

function route (){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/Login" element ={<Login/>}/>
            <Route path="/Sra" element ={<Sra/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default route