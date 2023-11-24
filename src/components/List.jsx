/* eslint-disable react/prop-types */
import Item from "./Item";

function List({ items, setItems }) {
    return (
        <div className=" bg-slate-200 p-8 border-[1px] border-slate-700">
            {items.map((item, index) => (
                <Item key={item.id} id={item.id} order={item.order} index={index} items={items} setItems={setItems}/>
            ))}
        </div>
    )
}

export default List;