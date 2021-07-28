import {React,useState} from "react";
import "./App.css";
import Transaction from "./components/Transection";
import FormComponent from './components/FormComponent';
import {v4 as uuid} from 'uuid';

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
    {id:uuid(), title: "ค่าเดินทาง", amount: 500 },
  ];

  const [items,setItems]=useState(initData);

  const onAddNewItem=(newItem)=>{
      console.log("ข้อมูลที่ส่งมาจาก Form Component = ",newItem);
      setItems((prevItem)=>{
        return [newItem,...prevItem]
      });
  }


  return (
    <div className="container">
      <Title />
      <FormComponent onAddItem={onAddNewItem}/>
      <Description />

      <Transaction items={items} />
    </div>
  );
}

export default App;
