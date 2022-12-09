import React from 'react'
import { Header } from '../../Components/Header'
import styled from "styled-components";
import Image from 'next/image';
import { Container } from '../../Styled';
import { Column, Row } from './styled';
import { Satisfy } from '@next/font/google';

const satisfy = Satisfy({
  weight: '400',
})

export const Home = () => {
    return(
        <>
            <Header />
            
            <Container>
                <main className={satisfy.className}>
                <Row> 
                    <Column>
                        <text>Argemiro Junior</text>
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
                </main>
            </Container>
        </>
    )
}