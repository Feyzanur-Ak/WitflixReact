
import {BrowserRouter, Redirect, Route,  Switch} from "react-router-dom"
import Welcome from "./pages/Welcome"
import Login from "./pages/Login"
import Hero from "./pages/Hero"
import Header from "./components/Header"
function App() {


  return (
  <BrowserRouter>
 <Header/>
 <Switch>
 <Route exact path="/" > 
    <Redirect to="/login"/>
    </Route>
<Route path="/login" > 
    <Login/>
    </Route>
<Route path="/welcome" > 

<Welcome/> </Route>

<Route path="/hero" > 
<Hero/>
</Route>
 </Switch>
 </BrowserRouter>
  )
}

export default App
