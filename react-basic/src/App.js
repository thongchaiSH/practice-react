import {React,useState,useEffect,useReducer} from "react";
import "./App.css";
import Transaction from "./components/Transection";
import FormComponent from './components/FormComponent';
import {v4 as uuid} from 'uuid';
import DataContext from './data/DataContext'
import ReportComponent from './components/ReportComponent'

const Title = () => {
  return <h1 style={{color:'red',textAlign:'center'}}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>;
};

const Description = () => {
  return <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>;
};

function App() {
  
  const initData = [
    {id:uuid(), title: "ค่ารักษาพยาบาล", amount: 3000 },
    {id:uuid(), title: "เงินเดือน", amount: 40000 },
    {id:uuid(), title: "ค่าเดินทาง", amount: -500 },
  ];

  const [items,setItems]=useState(initData);
  const [reportIncome,setReportIncome]=useState(0);
  const [reportExpense,setReportExpense]=useState(0);

  const onAddNewItem=(newItem)=>{
      console.log("ข้อมูลที่ส่งมาจาก Form Component = ",newItem);
      setItems((prevItem)=>{
        return [newItem,...prevItem]
      });
  }

  useEffect(() => {
    const amounts=items.map(item=>item.amount);

    const incomes= amounts.filter(amount=>amount>0).reduce((total,amount)=>total+=amount,0);
    const expenses= amounts.filter(amount=>amount<0).reduce((total,amount)=>total+=amount,0);
    setReportIncome(incomes);
    setReportExpense(expenses);
    console.log(incomes);
    console.log(expenses);
  }, [items])

  // reducer state
  const [count,setCount]=useState(0);
  const reducer=(state,action)=>{
    switch (action.type) {
      case "ADD" : return state+action.payload;
      case "SUB" : return state-action.payload;
      case "CLEAR" : return 0;
      case "SHOW" : return setShowReport(true);
      case "HIDE" : return setShowReport(false);
    }    
  }
  // const [result,dispatch]=useReducer(reducer,count);
  // reducer state 2
  const [showReport,setShowReport]=useState(false);
  const [result,dispatch]=useReducer(reducer,showReport);
  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense
      }
    }>
      <div className="container">
      <Title />
      
      {showReport && <ReportComponent/>}

      <FormComponent onAddItem={onAddNewItem}/>
      <Description />
      <Transaction items={items} />
      <div align="center">
        <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
        <button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
      </div>
      <div align="center">
        <h1>{result}</h1>
        <button onClick={()=>dispatch({type:"ADD",payload:10})}>เพิ่ม</button>
        <button onClick={()=>dispatch({type:"SUB",payload:5})}>ลด</button>
        <button onClick={()=>dispatch({type:"CLEAR"})}>ล้างข้อมูล</button>
      </div>
    </div>
    
    </DataContext.Provider>

    
  );
}

export default App;
