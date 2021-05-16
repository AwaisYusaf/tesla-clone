import styled from 'styled-components';
import React from 'react'

function Header() {
    return (
        <MyHeader>
            <Icon>

            </Icon>
        </MyHeader>
    )
}

const Icon = styled.div`

`;
const MyHeader = styled.div`
    width:100vw;
    height:30px;
    color:white;
    background-color:blue;
    display:flex;

`



export default Header;