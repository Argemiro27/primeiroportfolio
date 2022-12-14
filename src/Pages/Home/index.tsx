import React from 'react'
import { Header } from '../../Components/Header'
import styled from "styled-components";
import Image from 'next/image';
import { Container } from '../../Styled';
import { Column, Row } from './styled';

export const Home = () => {
    return(
        <>
            <Header />
            <Container> 
                <Row> 
                    <Column>
                        <div className="name">
                            <text>Argemiro Junior</text><br/>
                            <text>Front-end Developer</text>
                        </div>
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
            <Container>
                <Row>
                    <Column>
                        <h4>Formação técnica em Informática pelo CEFET-MG Campus Varginha</h4>                       
                    </Column>
                </Row>
            </Container>
        </>
    )
}