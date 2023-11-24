import './App.css';
import { useState } from 'react';
import itemsData from './data/items';
import List from './components/List';

function App() {
  const [items, setItems] = useState(itemsData);
  
  return (
    <>
      <List items={items} setItems={setItems}/>
    </>
  );
}

export default App;
