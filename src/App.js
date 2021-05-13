import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/index'
import About from './pages/about';
import News from './pages/news';
import SundaySchool from './pages/sundayschool';
import ContactUs from './pages/contactus';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './pages/PageElements/Footer/footer';
import LongText from './pages/LongText/LongText';
import ScrollToTop from './pages/PageElements/ScrollToTop';

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
        <Route path='/sunday-school' component={SundaySchool} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path="/stories/:longText" component={LongText}/>
          
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
