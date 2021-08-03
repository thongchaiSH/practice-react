import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css';


const ReportComponent =()=>{
    // const name=useContext(DataContext);
    const {income,expense} =useContext(DataContext);
    return (
        <div>
            {/* <DataContext.Consumer>
                {context=><p> รายรับ : {context.income} รายจ่าย : {context.expense}</p> }
            </DataContext.Consumer> */}
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>{income-expense} ฿</h1>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="report plus">{income} ฿</p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="report minus">{Math.abs(expense)} ฿</p>
                </div> 
            </div>
            
            
        </div>
    )
}

export default ReportComponent;