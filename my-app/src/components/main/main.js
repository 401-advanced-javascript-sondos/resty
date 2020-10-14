import React from 'react';
import { Route, Switch } from 'react-router-dom';
import md5 from 'md5';


// import Header from './components/header/header';
// import Footer from './components/footer/footer';
import Form from '../form/form';
import Help from '../help/help.js';
import Result from '../result';
import History from '../history/hostiry.js';


class Main extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            result: [],
            req: {},
            history: JSON.parse(localStorage.getItem('history')),
            loading: false,
        }
    }

    handdelUpdate = (data) => {
        // console.log('data', data)
        this.setState({ count: data.count, result: data.results })
        // console.log('result',this.state.result)
    }



    handdelFetch = (request) => {
        this.toggle();

        // console.log('update1', this.state.loading)
        this.setState({ req: request });

        let url = request.url;
        let method = request.method;
        let body = request.body
        console.log('req', request)
        let obj = { method, url, body };

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
                this.toggle();
                this.handdelUpdate(results);

            })


    }


    toggle = () => {
        this.setState({ loading: !this.state.loading });
        // console.log('update', this.state.loading)

    }



    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/'>

                        <Form fetchdata={this.handdelFetch} fill={this.state.req} />
                        {/* <History calls={this.state.history} handdel={this.handdelFetch} /> */}
                        <Result resultFrom={this.state.result} loading={this.state.loading} countForm={this.state.count} />

                    </Route>

                    <Route exact path='/history'>
                    <History calls={this.state.history} handdel={this.handdelFetch}  />

                    </Route>

                    <Route exact path='/help'>
                        <Help />

                    </Route>

                </Switch>
            </main>
        )
    }
}

export default Main;