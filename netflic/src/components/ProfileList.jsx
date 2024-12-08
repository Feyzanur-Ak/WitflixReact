import {profileData} from "./ProfileData.js";
import Profile from "./Profile.jsx";
import styled from "styled-components";


const Container = styled.div`
display:flex ;
gap:1rem;
`;

const ProfileList = () => {
   
  return (
    <Container>
      {profileData.map((item)=>(

        <Profile key={item.id}  profile={item}/>

      ))}
    </Container>
  )
}

export default ProfileList
