/* eslint-disable react/prop-types */
import Item from "./Item";

function List({ items, setItems }) {
    return (
        <div className=" bg-slate-200 p-8 rounded-3xl">
            {items.map((item, index) => (
                <Item key={item.id} id={item.id} order={item.order} index={index} items={items} setItems={setItems}/>
            ))}
        </div>
    )
}

export default List;