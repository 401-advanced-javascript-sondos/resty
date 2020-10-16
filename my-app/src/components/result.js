import React from 'react';
// import ReactJson from 'react-json-view';
import JSONPretty from 'react-json-pretty';
import { If, Then, Else } from './if/if.js';

import './result.scss';

require('react-json-pretty/themes/monikai.css');



const Result = (props) => {
    // console.log('result',props)
    // console.log('count',props.countForm)
    return (
        <div>
            <If condition={props.loading}>


                <Then>
                    <div id="overlay">
                        <div>
                            <p>l</p>
                            <p>o</p>
                            <p>a</p>
                            <p>d</p>
                            <p>i</p>
                            <p>n</p>
                            <p>g</p>
                        </div>


                    </div>

                </Then>


                <Else>
                    <section className="ResultApp">
                        Count: <JSONPretty data={props.countForm} padding={4} data-testid='test'></JSONPretty>
                        Result:<JSONPretty data={props.resultFrom} padding={4} data-testid='results'></JSONPretty>
                    </section>
                </Else>

            </If>

        </div>
    )

}

export default Result;
