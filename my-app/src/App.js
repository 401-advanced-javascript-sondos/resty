import React from 'react';

import './style/base.scss';
import './style/header.scss';
import './style/footer.scss';
import './style/main.scss';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';


class App extends React.Component{
  render(){

 return (  <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>)
  }
};

export default App;