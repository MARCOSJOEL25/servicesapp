import React from "react";

export function Header({setSignVar}){
    return(
        <div className="Header">
            <div className="Header__logo">
                S
            </div>
            <div className="Header__Login_register">
                <buttom onClick={()=> {setSignVar('Login')}}>Sign in</buttom>
                <buttom onClick={()=> {setSignVar('Register')}}>Sign up</buttom>
            </div>
        </div>
    )
}