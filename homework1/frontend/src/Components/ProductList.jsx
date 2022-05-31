import React from 'react'
import {  useDispatch , useSelector } from "react-redux";
import { Card } from 'antd';
const { Meta } = Card;

export default  function ProductList() {
  const data = useSelector((state) => [state.product]);
  // console.log(data);
  
  return (
    <div style={{height : "100%" ,display : "flex" , border : "3px solid black" ,flexDirection: "row" , flexFlow: "row wrap"}}>
      {
        data[0].map(x=> (
            <Card
            hoverable
            style={{
              width: 240,
              margin : "20px auto"
            }}
            cover={<img alt="example" src={x.img} />}
          >
            <Meta title={x.name} description={x.quantity} />
          </Card>
          ))
        
      }
    </div>
   
  )
}
