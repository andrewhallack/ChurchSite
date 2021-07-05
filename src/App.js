import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/index'
import About from './pages/about';
import News from './pages/news';
import ContactUs from './pages/contactus';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './pages/PageElements/Footer/footer';
import LongText from './pages/LongText/LongText';
import ScrollToTop from './pages/PageElements/ScrollToTop';
import Calendar from './pages/Calendar';
import Announcements from './pages/announcements';
import PageNotfound from './pages/PageNotfound';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }

  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news' component={News} />
        <Route path='/about' component={About} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/announcements' component={Announcements} />
        <Route path='/calendar' component={Calendar} />
        <Route exact path="/stories/:id/:name" render={props => <LongText {...props} />} />
        <Route exact path="/404" component={PageNotfound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
