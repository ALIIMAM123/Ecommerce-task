import styled from "styled-components";


const Container = styled.div`
     height:30px;
     background-color:  red;
     color:white;
     display:flex;
    align-items: center;
     justify-content: center;
     font-size: 500;
`;

function Announcement() {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over Rs 2000
    </Container>
  );
}

export default Announcement;
