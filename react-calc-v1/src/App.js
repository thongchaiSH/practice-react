import logo from "./logo.svg";
import "./App.css";
import KeypadComponent from "./components/KeypadComponent";
import ResultComponent from "./components/ResultComponent";
import {useState,useEffect} from 'react';
var mexp = require('math-expression-evaluator');

function App() {

  const [result, setResult] = useState('');


  const checkPreviousKey=(key)=>{
    if(result.length==0) return true;
    const operator=["+","-","x","÷","."]
    const lastChar=result.slice(-1);
    if(operator.indexOf(lastChar)>=0 && operator.indexOf(key)>=0){
      return false;
    }
    return true;
  }

  const onClick =(key)=>{
    // console.log("Parent Key ",key);
    if(!checkPreviousKey(key))return;

    switch(key){
      case "AC" :setResult('');break;
      case "=" :{
        try{
          const textForCalc=result.replaceAll("x","*").replaceAll("÷","/");
          const calc=mexp.eval(textForCalc);
          setResult(calc+"")
        }catch(e){
          setResult(e.message);
        }
      }break;
      default:setResult(result+key);
    }
  }
  return (
    <div className="container">
      <div className="cal-box">
        <ResultComponent result={result} />
        <KeypadComponent onClick={onClick}/>
      </div>
    </div>
  );
}

export default App;
