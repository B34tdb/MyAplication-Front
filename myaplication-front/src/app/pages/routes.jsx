import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home/TelaInicial"
import Login from "./login/login"

function route (){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/Login" element ={<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default route