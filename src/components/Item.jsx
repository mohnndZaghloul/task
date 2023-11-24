/* eslint-disable react/prop-types */
function Item({id, order, index, items, setItems}) {

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('text/plain', index);
    };
    
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    
    const handleDrop = (e, newIndex) => {
        e.preventDefault();
        const oldIndex = e.dataTransfer.getData('text/plain');
        const newItems = [...items];
    
        const [draggedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, draggedItem);
    
        newItems.forEach((item, index) => {
            item.order = index + 1;
        });
        setItems(newItems);
    };
    
    return (
        <div
            className="border-[1px] border-red-600 bg-white p-2 my-2 mx-8 font-mono cursor-move hover:bg-red-500 transition"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            >
            <p>{`{ ID ${id} - Order ${order} }`}</p>
        </div>
    )
}

export default Item;