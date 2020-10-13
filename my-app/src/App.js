import React from 'react';
import md5 from 'md5';


import './style/base.scss';


import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/form/form';
import Result from './components/result';
import History from './components/history/hostiry.js';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      result: [],
      req: {},
      history: JSON.parse(localStorage.getItem('history')),
      loading: false
    }
  }


  handdelUpdate = (data) => {
    console.log('data', data)
    this.setState({ count: data.count, result: data.results })
  }



  handdelFetch = (request) => {
    this.toggle();

    this.setState({ req: request });

    let url = request.url;
    let method = request.method;
    let body = request.reqbody
    console.log('req', request)
    let obj = { url, method, body };

    let hash = md5(JSON.stringify(this.state.req));
    console.log('hash', hash);
    let history = { ...this.state.history, [hash]: obj };
    this.setState({ history: history });
    let setHistory = JSON.stringify(this.state.history);
    localStorage.setItem('history', setHistory);


    fetch(url, {
      method: method,
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(data => data.json())
      .then(results => {
        this.handdelUpdate(results)
      })

    this.toggle();
  }

  toggle = () => {
    this.setState({ loading: !this.state.loading });
  }

  render() {

    return (<React.Fragment >
      <Header />
      <Main fetchdata={this.handdelFetch} />
      <History calls={this.state.history} handdel={this.handdelFetch} />
      <Result resultFrom={this.state.count} loading={this.state.loading} />
      <Footer />
    </React.Fragment >)
  }
};

export default App;