import ProfileList from "../components/ProfileList"
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container=styled.section`
display: flex;
flex-direction: column;
width: 100vw;
height:100vh;
justify-content: center;
align-items: center;
gap:1rem;
`;

const Title=styled.h1`
text-align:center;
color:lightgray;
font-weight: bold;
font-size: 3rem;
`;

const ManageProfiles=styled(Link)`
border:1px solid gray;
padding:0.6rem 0.8rem;
text-decoration: none;
color: gray;
margin-top: 1rem;
font-size: 1rem;
cursor: pointer;

&:hover{
  background-color: gray;
  color: white;
}
`;

const Welcome = (props) => {

  const {setActiveProfile}=props;
  return (
    <Container>
      <Title>Kim izliyor?</Title>
    <ProfileList setActiveProfile={setActiveProfile}/>
    <ManageProfiles to="/manage/profiles">Profil Yönetimi</ManageProfiles>
    </Container>
  )
}

export default Welcome
