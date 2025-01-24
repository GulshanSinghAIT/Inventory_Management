import React, { useState } from "react";

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !quantity) {
      alert("Please fill in all fields.");
      return;
    }
    onAddItem({ name, category, quantity: parseInt(quantity, 10) });
    setName("");
    setCategory("");
    setQuantity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 bg-white px-6 py-2 rounded-lg shadow-md border border-gray-200"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Add  Item
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Item Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-500 outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <input
            type="text"
            id="category"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-500 outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-500 outline-none"
            required
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}

export default AddItemForm;
