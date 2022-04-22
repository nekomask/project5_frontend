import React from "react";
import { ReactDOM } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function Show(props) {
    let {id} = useParams();
    console.log(useParams())
    let index = props.item.findIndex(e => e.id === parseInt(id));
    let item= this.props.item[index];
    return (
        <div>This is the Show page for {item.productName}</div>
    )
}

export default Show;