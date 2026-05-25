import { Fragment } from "react";
import Logo from "../assets/mz-06.png"
import Navbar from "./Nav";

export default function Header(){
    return(
    <header className="header">
        <img src={Logo} alt="mozambican map" className="logo"/>
        <h2>
            Moz Demographic indicators
        </h2>
        <Navbar/>

    </header>
    )
}