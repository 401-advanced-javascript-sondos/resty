import React from 'react';
import './main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 'get',
            url: '',
            placeUrl: '',
            placeMethod: '',
            reqBody: ''

        };

    };

    setUrl = e => {
        e.preventDefault();
        this.setState({ url: e.target.value })

    };

    setMethod = e => {
        e.preventDefault();
        this.setState({ method: e.target.value })
    }

    handdelBody = e => {
        e.preventDefault();
        this.setState({ reqBody: e.target.value })
    }



    handleSubmit = async e => {

        e.preventDefault();
        this.setState({ placeUrl: this.state.url });
        this.setState({ placeMethod: this.state.method });
        let request=this.state;
        this.props.fetchdata(request);


    }







    render() {
        return (
            <div>
                <section className="form">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <fieldset >
                            <legend>URL</legend>
                            <input onInput={this.setUrl} />
                            <button type='submit' value="Submit" className="button">GO!</button>
                        </fieldset>


                        <fieldset >
                            <legend>Method</legend>
                            <button onClick={this.setMethod} value='get'>GET </button>
                            <button onClick={this.setMethod} value='post'>POST</button>
                            <button onClick={this.setMethod} value='put'>PUT</button>
                            <button onClick={this.setMethod} value='delete'>DELETE</button>
                        </fieldset>
                        
                        <fieldset >
                            <legend>Body</legend>
                        <textarea onChange={this.handdelBody}  ></textarea>
                        </fieldset>


                    </form>
                </section>

                {/* <div className='Show'>
                    <span> {this.state.placeMethod} </span>
                    <span> {this.state.placeUrl} </span>
                </div> */}

            </div>

        )
    }

};

export default Main;