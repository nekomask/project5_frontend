import './App.css';
import ItemContainer from './itemContainer/itemContainer';
import { Link, useParams } from "react-router-dom";

export function DisplayComponent() {
  let {id} = useParams();
  let index = props.item
  return (
    <div className="show">


    </div>
  );
}

export default DisplayComponent;