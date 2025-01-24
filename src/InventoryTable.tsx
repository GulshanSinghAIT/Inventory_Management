import React, { useState } from "react";

function InventoryTable({ items, onEditItem, onDeleteItem }) {
  const [filter, setFilter] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [editingItem, setEditingItem] = useState(null);

  const handleSort = () => {
    setSortAsc(!sortAsc);
  };

  const filteredItems = items
    .filter((item) =>
      filter ? item.category.toLowerCase().includes(filter.toLowerCase()) : true
    )
    .sort((a, b) => (sortAsc ? a.quantity - b.quantity : b.quantity - a.quantity));

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditItem(editingItem.id, editingItem);
    setEditingItem(null);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Filter by category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded p-2 flex-1"
        />
        <button
          onClick={handleSort}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Sort by Quantity {sortAsc ? "↑" : "↓"}
        </button>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Category</th>
              <th className="border p-3 text-left">Quantity</th>
              <th className="border p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr
                key={item.id}
                className={`${
                  item.quantity < 10 ? "bg-red-200" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="border p-3">{item.name}</td>
                <td className="border p-3">{item.category}</td>
                <td className="border p-3">{item.quantity}</td>
                <td className="border p-3 flex gap-2">
                  <button
                    onClick={() => setEditingItem(item)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={editingItem.name}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, name: e.target.value })
                  }
                  className="border border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  value={editingItem.category}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, category: e.target.value })
                  }
                  className="border border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Quantity</label>
                <input
                  type="number"
                  value={editingItem.quantity}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      quantity: parseInt(e.target.value, 10),
                    })
                  }
                  className="border border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default InventoryTable;
