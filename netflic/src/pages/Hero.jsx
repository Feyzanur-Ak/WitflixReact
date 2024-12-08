
import styled from "styled-components";

const Title=styled.h1`
color:white
`;

const Header=styled.div`
width: 10%;
background-color: #1c1c1c`;  
const Hero = () => {
  return (
      <Header className="hero">
        <Title>Merhaba</Title>
        </Header>
  )
}

export default Hero
