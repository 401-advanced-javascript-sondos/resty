import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';
// Enzyme.configure({ adapter: new Adapter() })

import Result from '../components/result';
import Footer from '../components/footer/footer';
import Form from '../components/form/form';
import Main from '../components/main/main';
import App from '../App'


let resultout = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77"
}

test('test the output for result page ', () => {


    render(<Result resultFrom={resultout} loading={false} countForm={55} />);
    const output = screen.getByTestId('test');
    const output2 = screen.getByTestId('results');
    expect(output).toHaveTextContent(55);
    expect(output2).toHaveTextContent("mass")
})


describe('footer', () => {
    it('should the footer be exists', () => {
        render(<Footer />)
        let app = screen.getByTestId('test')
        expect(app).toHaveTextContent('&copy 2020 Code Fellows');
    })
})


// describe('form', () => {
//     it('should the form be exists', () => {
//         let form = shallow(<Form />)
//         let app = screen.getByTestId('input');
//         expect(form.find('button').exists()).toBeTruthy();
//         expect(form.find('input').exists()).toBeTruthy();
//         expect(form.find('button').exists()).toBeTruthy();

//     })
// })

// test('help rout',()=>{
//     render(<App/>);
//     // render(<Main/>)
//     fireEvent.click(screen.getByTestId('main'));
//     fireEvent.click(screen.getByTestId('help'));
//     expect(out).toHaveTextContent()

// })




