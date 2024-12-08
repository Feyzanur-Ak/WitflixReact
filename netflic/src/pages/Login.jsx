
import styled from "styled-components";
import {useState} from "react";


const Container=styled.div`
display: flex;
flex-direction: column;
gap:2rem;
align-items: center;
align-content: center;
`;
 const ContactBox=styled.div`
display: flex;
flex-direction: column;
gap:2rem;
align-items: center;
margin-top:20%;
background-color:white;
border-radius: 0.5rem;
width: 500px;
height:500px;
`;

const Input=styled.div`
margin-top: 8rem;
display: flex;
flex-direction: column;
gap:2rem;
align-items: center;
`;

const Email=styled.input`
width:300px;
height: 50px;

`;

const Password=styled.input`
width:300px;
height: 50px;
`;

const Button=styled.button`
width: 150px;
height: 50px;
border-radius: 1rem;
color:blue;

`;


const Login = () => {

  const [isValid, setIsValid] = useState(false);
  return (
    <Container>
      <ContactBox>
        <Input>
          <Email type="text" placeholder="Kullanıcı Adı" />
          <Password type="password" placeholder="Sifre" />
</Input>
<Button disabled={!isValid}>Kayıt Ol</Button>
</ContactBox>
    </Container>
  )
}

export default Login
