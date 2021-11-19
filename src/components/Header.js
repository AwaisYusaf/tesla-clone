import styled from 'styled-components';
import React,{useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-scroll';
function Header() {
    const [burgerNav,setBurgerNav] = useState(false);

    return (
        <MyHeader>
            <Icon src="/images/logo.svg"/>
            <TabMenu>
                <a href="model-s">Model S</a>
                <a href="model-3">Model 3</a>
                <a href="model-x">Model X</a>
                <a href="model-y">Model Y</a>
                <a href="solar-roof"> Solar Roof</a>
                <a href="solar-panel">Solar Panel</a>
            </TabMenu>
            <MenuBtnTab>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <Menu onClick={()=>setBurgerNav(true)}/>
                <BurgerNav isOpen={burgerNav}>
                    <CloseWrapper>
                        <CustomClose onClick={()=>setBurgerNav(false)}/>
                    </CloseWrapper>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-In</a></li>
                    <li><a href="#">CyberTruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Find Us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">United States</a></li>
                </BurgerNav>
            </MenuBtnTab>
        </MyHeader>
    )
}


const Icon = styled.img`
    width:100px;
`;
const MyHeader = styled.div`
    min-height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    padding:0 10px;
    top:0;
    left:0;
    right:0;
    z-index:100;

`
const TabMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        text-transform:uppercase;
        margin:0 8px;
        font-weight:600;
        font-size:18px;
    }
    @media (max-width:1070px){
        display:none;
    }


`
const MenuBtnTab = styled.div`
    display:flex;
    align-items:center;
    a{
        text-transform:uppercase;
        margin:0 8px;
        font-weight:600;
        font-size:18px;
    }

`

const Menu = styled(MenuIcon)`
    cursor:pointer;

`
const BurgerNav = styled.div`
   position:fixed;
   top:0;
   bottom:0;
   right:0;
   background-color:white;
   width:320px;
   list-style:none;
   align-text:start;
   padding:20px;
   transition: transform 0.2s ease-in;
   li{
    padding:20px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
   }
   transform: ${props=>props.isOpen?"translateX(0)":"translateX(100%)"};
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;

`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`


export default Header;