import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloExternalComponent from './components/HelloExternalComponent'
//การสร้าง Component
function HelloComponent(){
  return <h1>สวัสดี Component ครับผม</h1>
}

//การสร้าง Class Component
class HelloClassComponent extends React.Component{
  render(){
    return <h1>สวัสดี Component Class</h1>
  }
}


ReactDOM.render(<App/>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
