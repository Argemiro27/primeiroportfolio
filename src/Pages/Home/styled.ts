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
    white-space: nowrap;
    border:5px dashed #181629;
    border-radius: 15px;
    background-color:#201D36; 
    padding: 50px;
    text{
        color: #3d396b;
        transition: 3s;
        font-size: 70px;
        font: 'Satisfy', cursive;
    }
    text:hidden{
        transform: translateX(100px);
    }

`