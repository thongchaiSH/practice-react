import Item from "./Item";
import "./Transection.css";


const Transaction = (props) => {
    const {items}=props;
  
  return (
    <ul className="item-list">
      {items.map((item,index) => {
        return <Item {...item} key={item.id} />;
        //return <Item title={item.title} amount={item.amount} />;
      })}
    </ul>
  );
};

export default Transaction;
