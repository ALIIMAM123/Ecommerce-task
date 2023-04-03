import { Email, Instagram, LinkedIn, Phone, Room, Twitter } from "@material-ui/icons";
import { Facebook } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})}
/* ${mobile({padding:"20px"})}; */
/* ${mobile({marginBottom:"20px"})}; */
`;

const Left = styled.div`
flex:1;
display:flex;
flex-direction: column;
`;

const Logo = styled.h1`
 margin:0px 25px; 
`;

const Desc = styled.p`
margin:0px 25px;
`;

const SocialContainer = styled.div`
 display:flex;
 padding-left:20px;
 margin-top:4px;
`;

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props => props.color};
display:flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor:pointer;
`;



const Center = styled.div`
flex:1;
${mobile({display:"none"})}
`;

const Title = styled.h3`
 margin-bottom:10px;
`;

const List  = styled.ul`
  margin:0;  //list item has default margin and padding so make it zero
  padding:0;
  list-style:none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width:50%;
  margin-bottom:10px;
`;

const Right = styled.div`
flex:1;
padding:20px;
margin-top:15px;
${mobile({backgroundColor:"#fddfdf"})}
`;
const ContactItem = styled.div`
   margin-bottom: 20px;
   display:flex;
   align-items:center;

`;

const Payment = styled.img`
  width:80%;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
      <Logo>About Us</Logo>
      <Desc>Keep Track of 15+ E-Commerce Metrics incl. Stock, Prices, Buy Box, Ratings, Share of Shelf. SaaS Solution for E-Commerce Teams of Brands and Manufacturers.
       
    </Desc>
    <SocialContainer>
        <SocialIcon color = "3B5999">
            <Facebook/>
        </SocialIcon>
        <SocialIcon color = "E4405F">
            <Instagram/>
        </SocialIcon>
        <SocialIcon color = "55ACEE">
            <Twitter/>
        </SocialIcon>
        <SocialIcon color = "3B5999">
            <LinkedIn/>
        </SocialIcon>
    </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tranking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Order Tranking</ListItem>
        </List>
      </Center>
      <Right>
         <Title>Contact</Title>
         <ContactItem>
           <Room style = {{marginRight:"10px"}}/>  Plot no - 13C, Sarita Vihar ,New Delhi- 451256
         </ContactItem>
         <ContactItem>
           <Phone style = {{marginRight:"10px"}}/> +91 8709198639
         </ContactItem>
         <ContactItem>
           <Email style = {{marginRight:"10px"}}/> contact@ali.dev
         </ContactItem>
         <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
}

export default Footer;
