import Item from "./Item";
import "./Transection.css";
import DataContext from "../data/DataContext";
import { useContext } from "react";

const Transaction = (props) => {
  const { items } = props;
  const {income,expense}=useContext(DataContext);
  return (
    <div>
      <ul className="item-list">
        {items.map((item, index) => {
          return <Item {...item} key={item.id} />;
          //return <Item title={item.title} amount={item.amount} />;
        })}
      </ul>
      {/* <p>รายรับ : {income}</p>
      <p>รายจ่าย : {expense}</p> */}
    </div>
  );
};

export default Transaction;
