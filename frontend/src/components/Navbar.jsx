import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive"
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const Container = styled.div`
  height: 60px;
 ${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding:"10px px"})}
  
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({justifyContent:"center"})}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display:flex;
  align-items: center;
  margin-left:25px;
  padding:5px;
`
const Input = styled.input`
  border:none;
  ${mobile({width:"50px"})}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
  
`;



const Logo = styled.h1`
  font-weight:bold;
  font-size:25px;
`

const Right = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2})}
`;
const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left: 25px;
  ${mobile({fontSize:"12px" ,marginLeft:"10px"})}
`;
const Navbar = () => {
  const quantity = useSelector(state => state?.cart?.cartquantity)
  console.log(quantity,"quantity")
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="text"/>
          <Search style = {{color:"grey" , fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo style = {{color:"brown"}}>Ali</Logo>
          </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <Link to = "/login">
          <MenuItem >SIGN IN</MenuItem>
          </Link>
          <Link to = "/cart">
          <MenuItem>
          <Badge badgeContent={quantity} color="secondary">
           <ShoppingCartOutlined />
         </Badge>
          </MenuItem>
          </Link>
         
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
