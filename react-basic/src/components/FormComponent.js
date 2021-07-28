import './FormComponent.css'
import {useState} from 'react'
import {v4 as uuid} from 'uuid';

const FormComponent =(props)=>{

    //state
    const [title, setTitle] = useState('');
    const [amount,setAmount]=useState(0);

    const inputTitle=(event)=>{
        setTitle(event.target.value);
        // console.log(`Title : ${title}`);
    }
    const inputAmount=(event)=>{
        setAmount(event.target.value);
        // console.log(`Amount : ${amount}`);
    }
    const saveItem=(event)=>{
        event.preventDefault();
        console.log("บันทึกข้อมูลเรียบร้อย");
        const itemData={
            id:uuid(),
            title:title,
            amount: Number(amount)
        };
        // console.log(itemData);

        props.onAddItem(itemData); 
        setTitle('');
        setAmount(0);
        
    }

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}/>
                </div>

                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>

                <div>
                    <button type="submit" className="btn">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent;