import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Banner from './Pages/Shared/Banner/Banner';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Login from './Pages/Login/Login/Login';

function App() {
  return (

    // <div>
    //   <h2>Hello</h2>
    // </div>
    <Router>
      <Navbar></Navbar>
      <Header></Header>
      <Banner></Banner>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

      <Footer></Footer>
    </Router>

  );
}

export default App;
