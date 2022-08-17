
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container} from 'semantic-ui-react'
import Home from "./js/views/Home";
import People from "./js/views/People";
import Planets from "./js/views/Planets";
import Vehicles from "./js/views/Vehicles";
import Navbar from "./js/components/Navbar";
import injectContext from "./js/store/appContext";




function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Container>

            <Switch>
              <Route exact path='/'><Home /></Route>
              <Route exact path='/people'><People component={People} /></Route>
              <Route exact path='/planets' ><Planets component={Planets}/></Route>
              <Route exact path='/vehicles' ><Vehicles component={Vehicles}/></Route>              
            </Switch>            
              
        </Container>
      </Router>
    </>
  );
}

export default injectContext(App);
