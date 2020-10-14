import React from 'react';
import './main.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 'get',
            url: '',
            // placeUrl: '',
            // placeMethod: '',
            body: undefined

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
        this.setState({ body: e.target.value })
    }



    handleSubmit = async e => {

        e.preventDefault();
        // this.setState({ placeUrl: this.state.url });
        // this.setState({ placeMethod: this.state.method });
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
                            <input onInput={this.setUrl}  value={this.props.fill.url}/>
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
                        <textarea onChange={this.handdelBody} value={this.props.fill.body}  ></textarea>
                        </fieldset>


                    </form>
                </section>

                {/* <div className='Show'>
                    <span> {this.state.method} </span>
                    <span> {this.state.url} </span>
                </div> */}

            </div>

        )
    }

};

export default Form;