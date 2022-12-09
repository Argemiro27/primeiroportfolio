import React from "react";
import styled from "styled-components";
import { Amatic_SC } from '@next/font/google';

const Amatic = Amatic_SC({
  weight: '700',
})

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
        font-size: 20px;
        padding: 15px;
        transition: 2s;
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
        <main className={Amatic.className}>
        <UlStyled>
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Contato</li>
        </UlStyled>
        </main>
    )
}