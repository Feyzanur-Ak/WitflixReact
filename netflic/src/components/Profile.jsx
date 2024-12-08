
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card=styled.div`
padding:2rem;
`;

const Avatar=styled.img`
width:100%;
border-radius:1rem;
cursor: pointer;
`;

const Title=styled.h2`
text-align:center;
color:lightgray;
`;

const Profile = (props) => {

    const handleAvatarClick = () => {
        <Link to="/hero"></Link>
      };
    
    // eslint-disable-next-line react/prop-types
    const {profile}=props
    // eslint-disable-next-line react/prop-types
    const {avatar,title}=profile;
  return (
    <Card>
     
            <Avatar src={avatar} onClick={handleAvatarClick}/>
        <Title>{title}</Title>

    </Card>
  )
}

export default Profile
