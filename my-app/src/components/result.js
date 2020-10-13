import React from 'react';
// import ReactJson from 'react-json-view';
import JSONPretty from 'react-json-pretty';
import { If, Then, Else } from './if/if.js';

import './result.scss';

require('react-json-pretty/themes/monikai.css');



const Result = (props) => {

    return (
        <div>
            <If condition={props.loading}>
                <Then>
                    <div id="overlay">
               
                            <p>l</p>
                            <p>o</p>
                            <p>a</p>
                            <p>d</p>
                            <p>i</p>
                            <p>n</p>
                            <p>g</p>
                        


                    </div>

                </Then>
                <Else>
                    <section>
                        Count: <JSONPretty src={props.resultFrom} padding={4} ></JSONPretty>
                    Result: <JSONPretty src={props.resultFrom} padding={4} ></JSONPretty>
                    </section>
                </Else>



            </If>

        </div>
    )

}

export default Result;
