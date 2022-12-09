import React from "react";
import Image from "next/image";
import { Menu } from "../Menu";
import { Container } from "../../Styled";
import styled from "styled-components";

const HeaderStyled = styled.div`
    background: #181629;
    padding: 20px;
    color: #616161;
`

const HeaderFlex = styled.header`
    display: flex;
    justify-content: space-between;
`

export const Header = () => {
    return(
        <HeaderStyled>
            <Container>
            <HeaderFlex>
                <Image
                src="/images/logo.png"
                alt="Logo Portfolio"
                width={130}
                height={70}
                />    
                <Menu />        
            </HeaderFlex>
            </Container>
        </HeaderStyled>
    )
}