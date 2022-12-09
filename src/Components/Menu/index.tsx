import React from "react";
import styled from "styled-components";
import { Amatic_SC } from '@next/font/google';



const UlStyled = styled.ul`
    display:flex;
    margin:0;
    padding:10px;
    width: 430px;
    align-items: center;
    background-color: #201D36;
    border-radius: 5px;
    gap: 25px;
    li{
        list-style:none;
        margin-left: 30px;
        cursor: pointer;
        background-color: #292645;
        border-radius: 4px;
        font-size: 23px;
        padding: 13px;
        transition: 2s;
        font-family: 'Amatic SC', cursive;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        &:hover{
            transition: 3s;
            background-color: #1a1829;
            padding: 12px;
            color: #3d396b;
            letter-spacing: 0.1em;
        }
    }
`

export const Menu = () =>{
    return(
        
        <UlStyled>
            <a href="http://localhost:3000"><li>Sobre mim</li></a>
            <a href="http://localhost:3000/projetos"><li>Projetos</li></a>
            <a href="http://localhost:3000/contato"><li>Contato</li></a>
        </UlStyled>
    )
}