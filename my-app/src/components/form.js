import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 'get',
            url: '',
            placeUrl: '',
            placeMethod: ''

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

    handleSubmit = async e => {

        e.preventDefault();



        this.setState({ placeUrl: this.state.url });
        this.setState({ placeMethod: this.state.method });

        let raw = await fetch(this.state.placeUrl);
        let data = await raw.json();

        console.log('data', data);
        this.props.handdel(data)
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



                    </form>
                </section>

                <div className='Show'>
                    <span> {this.state.placeMethod} </span>
                    <span> {this.state.placeUrl} </span>
                </div>

            </div>

        )
    }

};

export default Main;