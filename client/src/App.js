// import logo from './logo.svg';
import './App.css';
import HomeSponsoror from './Screens/HomeSponsoror';
import SignupSponsorer from './Screens/SignupSponsorer';
// import LoginSponserer from './Screens/LoginSponserer';
import SignupReceiver from './Screens/SignupReceiver';
import Login from './Screens/Login';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Choice from './Screens/Choice';
import HomeSponsee from './Screens/HomeSponsee';
function App() {
  return (
    <div>
<Router>
<Routes>
  {/* <Route exact path="/loginsponsorer" element={<LoginSponserer/>}></Route> */}
   <Route exact path="/login" element={<Login></Login>}></Route>
  <Route exact path="/signupreceiver" element={<SignupReceiver></SignupReceiver>}></Route>
  <Route exact path="/signupsponsorer" element={<SignupSponsorer/>}></Route>
  <Route exact path="/" element={<Choice></Choice>}></Route> 
  {/* <Route exact path="/h" element={<H></H>}></Route>  */}
  <Route exact path="/homeSponsoror" element={<HomeSponsoror></HomeSponsoror>}></Route> 
  <Route exact path="/homeSponsee" element={<HomeSponsee></HomeSponsee>}></Route> 

</Routes>

</Router>



    </div>
  );
}

export default App;
