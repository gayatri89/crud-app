import React, { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import CreateItem from './components/CreateItem';

function App() {
  const [items, setItems] = useState<string[]>([]);

  //Updating States
  const addItems = (item: string) => {
    setItems([...items, item])
  }

  return (
    <div className="App">
      <h1>CURD Application</h1>
      <CreateItem onCreate={addItems} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
