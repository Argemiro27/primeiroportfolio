import React from 'react'
import { Header } from '../../Components/Header'
import styled from "styled-components";
import Image from 'next/image';
import { Container } from '../../Styled';
import { Column, Row } from './styled';

export const Projetos = () => {
    return(
        <>
            <Header />
            <Container> 
                <Row> 
                    <Column>
                        <text>Argemiro Junior</text><br/>
                        <text>Front-end Developer</text>
                    </Column>
                    <Column>
                        <Image
                        src="/images/bg1.png"
                        alt="Foto-Redonda"
                        width={300}
                        height={300}
                        />    
                    </Column>
                </Row>
            </Container>
        </>
    )
}