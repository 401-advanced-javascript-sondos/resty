import React from 'react';

import './style/base.scss';
import './style/header.scss';
import './style/footer.scss';
import './style/main.scss';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/form';
import Result from './components/result';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count:0,
      result:[]
    }
  }

  handdelUpdate = (data) => {
    console.log('data',data)
    this.setState({ count: data.count, result:data.results })
  }

  render() {

    return (<React.Fragment>
      <Header />
      <Main handdel={this.handdelUpdate} />
      <Result headers={this.state} />
      <Footer />
    </React.Fragment>)
  }
};

export default App;