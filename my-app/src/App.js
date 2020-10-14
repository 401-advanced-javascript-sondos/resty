import React from 'react';
import md5 from 'md5';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style/base.scss';


import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main.js';
// import Result from './components/result';
// import History from './components/history/hostiry.js';


class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 0,
  //     result: [],
  //     req: {},
  //     history: JSON.parse(localStorage.getItem('history')),
  //     loading: false,
  //   }
  // }


  // handdelUpdate = (data) => {
  //   // console.log('data', data)
  //   this.setState({ count: data.count, result: data.results })
  //   // console.log('result',this.state.result)
  // }



  // handdelFetch = (request) => {
  //   this.toggle();

  //   // console.log('update1', this.state.loading)
  //   this.setState({ req: request });

  //   let url = request.url;
  //   let method = request.method;
  //   let body = request.body
  //   console.log('req', request)
  //   let obj = { method, url, body };

  //   let hash = md5(JSON.stringify(this.state.req));
  //   console.log('hash', hash);
  //   let history = { ...this.state.history, [hash]: obj };
  //   this.setState({ history: history });
  //   let setHistory = JSON.stringify(this.state.history);
  //   localStorage.setItem('history', setHistory);


  //   fetch(url, {
  //     method: method,
  //     mode: 'cors',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(body)
  //   }).then(data => data.json())
  //     .then(results => {
  //       this.toggle();
  //       this.handdelUpdate(results);

  //     })


  // }


  // toggle = () => {
  //   this.setState({ loading: !this.state.loading });
  //   // console.log('update', this.state.loading)

  // }

  render() {

    return (
    // <React.Fragment >
    //   <Header/>
    //   <Main fetchdata={this.handdelFetch} />
    //   <History calls={this.state.history} handdel={this.handdelFetch} />
    //   <Result resultFrom={this.state.result} loading={this.state.loading} countForm={this.state.count}/>
    //   <Footer />
    // </React.Fragment >

    <BrowserRouter>
     <Header/>
     <Main/>
     <Footer/>
    </BrowserRouter>
    )
  }
};

export default App;