import React from 'react';
import './history.scss';

function History(props){

    // console.log('You are in history',props.calls);
    const calls = props.calls || {};
    // console.log('call',calls);

 function handdelClick(callback){
    // console.log('recall methos',callback);

    props.handdel(callback)

    }   

return(
    <aside className="App-history">
        <h3>History Search</h3>
        <ul>
            {
            Object.keys(calls).map(key=>
            <li key={key}>
                <button  className='urlButton' onClick={() => handdelClick(props.calls[key])} > {props.calls[key].method} </button>
            <span className='methodUrl'>
                 {props.calls[key].url}

             </span>    
          
            </li>
            )
            }
        </ul>
    </aside>
)

}

export default History;

