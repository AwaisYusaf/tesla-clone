import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal';
function Section({title,description,image,leftBtnText,rightBtnText}) {
    return (
        <Container bgImage = {image}>
            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>    
                </ItemText>
            </Fade>
            
                <Buttons>
                    <Fade bottom>
            
                        <ButtonGroup>
                            <LeftButton>{leftBtnText?leftBtnText:"Custom Order"}</LeftButton>

                            {rightBtnText?<RightButton>{rightBtnText}</RightButton>:null}
                        
                        </ButtonGroup>
                    </Fade>
                    <ImageButton src="/images/down-arrow.svg"/>
                </Buttons>
        </Container>
    )
}

const ButtonGroup = styled.div`
    display:flex;
    justify-content:center;
    box-sizing:border-box;
    text-transform:uppercase;
    font-size:15px;
    @media (max-width:768px){
        flex-direction:column;
    }
`

const Container = styled.div`
    width : 100vw;
    height:100vh;
    background-image: url("/images/model-s.jpg");
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image : ${props=> `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    text-align:center;
    margin-top:220px;
    p{
        font-size:17px;
    }
    h1{
        font-size:35px;
    }
`;


const LeftButton = styled.div`
    width:256px;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: black;
    color:white;
    opacity:0.85;
    margin:8px;
    border-radius: 100px;
    cursor:pointer;
`;

const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:0.65;
`

const ImageButton = styled.img`
    height:50px;
    animation:myfirstanimation infinite 1.5s;
    margin-bottom:5px;
`

const Buttons = styled.div`
    height:20vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

export default Section;