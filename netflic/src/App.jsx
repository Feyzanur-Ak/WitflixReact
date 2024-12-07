import Header from "./Header"
import {BrowserRouter, Route,  Switch} from "react-router-dom"
import Navbar from "./Navbar"
function App() {


  return (
  <BrowserRouter>
 <Header/>
 <Navbar/>
 <Switch>
<Route path="/" exacth>
</Route>
<Route path="/movies" >
</Route>
<Route path="/series" >
</Route>
<Route path="/watched" >
</Route>
 </Switch>
 </BrowserRouter>
  )
}

export default App
