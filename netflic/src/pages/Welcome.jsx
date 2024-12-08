import ProfileList from "../components/ProfileList"
import styled from "styled-components";

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
`;

const ManageProfiles=styled.button`
border:1px solid gray;
padding:1rem 2rem;
color: gray;
margin-top: 1rem;
`;

const Welcome = () => {
  return (
    <Container>
      <Title>Who&apos; s Watching?</Title>
    <ProfileList/>
    <ManageProfiles to="/manage/profiles">Manage Profiles</ManageProfiles>
    </Container>
  )
}

export default Welcome
