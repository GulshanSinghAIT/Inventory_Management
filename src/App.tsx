import React, { useState } from "react";
import InventoryTable from "./InventoryTable";
import AddItemForm from "./AddItemForm";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Apples", category: "Fruits", quantity: 20 },
    { id: 2, name: "Bananas", category: "Fruits", quantity: 5 },
    { id: 3, name: "Carrots", category: "Vegetables", quantity: 15 },
  ]);

  const addItem = (item) => {
    setItems([...items, { id: Date.now(), ...item }]);
  };

  const editItem = (id, updatedItem) => {
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 ">
          Inventory Management
        </h1>
        <AddItemForm onAddItem={addItem} />
        <InventoryTable
          items={items}
          onEditItem={editItem}
          onDeleteItem={deleteItem}
        />
      </div>
    </div>
  );
}

export default App;
