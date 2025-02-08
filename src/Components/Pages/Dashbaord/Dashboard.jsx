
import React from "react"

import CardComponent from "../../ReusableComponents/CardComponent"
import { cardData } from "../../../data/card_data"

const Dashboard = () => {
    const cardStyles = {
        card: {
            color: "text-bg-dark"
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <CardComponent multiple={false} title={cardData.title} altText={cardData.altText} styles={cardStyles} />
                </div>
                <div className="col-sm-12 col-md-4">
                    <CardComponent multiple={false} title={cardData.title} altText={cardData.altText} styles={{ ...cardStyles.card, ['card']: { color: "text-bg-danger" }}} />
                </div>
                <div className="col-sm-12 col-md-4">
                    <CardComponent multiple={false} title={cardData.title} altText={cardData.altText} styles={{ ...cardStyles.card, ['card']: { color: "text-bg-success" }}} />
                </div>
            </div>
        </>
    )
  }
  
  export default Dashboard
  