import React from "react"

function Product(props) {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "AUD" })} - {props.product.description}</p>
        </div>
    )
}


export default Product




/*
import React from "react"

function Joke(props) {
    return (
        <div>
            <h3> Question: {props.question} </h3>
            <h3> Punchline: {props.punchline} </h3>
        </div>
    )
}

export default Joke */


