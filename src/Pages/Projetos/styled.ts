import styled from 'styled-components'

export const Row = styled.div`
    position:relative;
    display:flex;
    gap: 240px;
    top: 50px;
    align-items: center;
`


export const Column = styled.div`
    text-align: center;
    background-color: #1a1829;
    padding: 30px;
    text{
        color: #3d396b;  
        transition: 2s;  
        font-size: 50px;  
        font-family: 'Rajdhani', sans-serif;
    }
    text:hover{
        transform: translateX(50px);
        color:#454545;
    }
    &:hover{
        transition: 2s;  
        
        background-color:#0f0f0f; 
    }

`