import React from 'react';
import ReactJson from 'react-json-view';



const Result=(props)=>{

    return(
        <div>
            <section>
            <ReactJson src={props.headers} />
            </section>
        </div>
    )

}

export default Result;
