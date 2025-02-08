
import React from "react"

import CardComponent from "../../ReusableComponents/CardComponent"
import { multiple_cards } from "../../../data/card_data"

const Orders = () => {
  
    const cardStyles = {
        button: {
            primary: "btn-success"
        }
    }
    
    return (
        <>
            <CardComponent multiple={true} data={multiple_cards} styles={cardStyles} />
        </>
    )
  }
  
  export default Orders
  