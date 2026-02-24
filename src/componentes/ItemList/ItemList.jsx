import Item from "../Item/Item"
import "./ItemList.css"


export const ItemList = ({productos}) => {
  return (
    <div  className="item-list-container">
        {productos.map(item=><Item key={item.id}{...item}/>)}
    </div>
  )
}
    