import React from 'react';
import { Redirect , NavLink, Route, Link } from 'react-router-dom';
import './history.scss';

function History(props) {

    // console.log('You are in history',props.calls);
    const calls = props.calls || {};
    // console.log('call',calls);

    function handdelClick(callback) {
        console.log(callback)
        props.handdel(callback);
     }

    return (
        <aside className="App-history">
            <h3>History Search</h3>
            <ul>
                {
                    Object.keys(calls).map(key =>
                        <li key={key}>
                            <button className='urlButton'   onClick={() =>  handdelClick(props.calls[key])} >
                                  
                                <Link to='/'> {props.calls[key].method} </Link>
                                 </button>
                            <span className='methodUrl'>
                                {props.calls[key].url}

                            </span>

                        </li>
                    )
                }
            </ul>
        </aside >
    )

}

export default History;

