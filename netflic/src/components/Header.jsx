import {Link} from "react-router-dom"
import styled from "styled-components";


const Container =styled.header`
  position: absolute; //buraya sabitledik
  top:0;
  right: 0;
  display: flex;
  gap:2rem;
  padding: .5rem;
  justify-content: flex-end;
  color:lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

  const NavMenu=styled.nav`
  display: flex;
  gap:2rem;
  justify-content: flex-end;
  color:lightgray;

  & a {
    text-decoration: none;
    color:lightgray;
  }
  `;

  const UserPanel=styled.div`
  margin:0 1rem;
  `;

  const User=styled.img`
  height:60px;
  border-radius: 0.2rem;
  `;
const Header = (props) => {


  const {activeProfile}=props
  return (
    
    <Container >
 <NavMenu className="navbar">
  <Link to="/login">Login</Link>
  <Link to="/welcome">Welcome</Link>
  <Link to="/hero">Hero</Link>
 </NavMenu>
 <UserPanel>
<User src={activeProfile.avatar}/>

 </UserPanel>
    </Container>
  )
}

export default Header
