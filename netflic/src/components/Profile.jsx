
import styled from "styled-components";

const Card=styled.div`
padding:2rem;
`;

const Avatar=styled.img`
width:100%;
border-radius:1rem;
`;

const Title=styled.h2`
text-align:center;
color:lightgray;
`;

const Profile = (props) => {
    
    // eslint-disable-next-line react/prop-types
    const {profile}=props
    // eslint-disable-next-line react/prop-types
    const {avatar,title}=profile;
  return (
    <Card>
     
            <Avatar src={avatar}/>
        <Title>{title}</Title>

    </Card>
  )
}

export default Profile
