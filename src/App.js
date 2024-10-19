import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddItems from './components/AddItems';
import ShoppingList from './components/ShoppingList';
import ShoppingListDetails from './components/ShoppingListDetails';
import AddShoppingList from './components/AddShoppingList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShoppingList />} />
          <Route path="/add-item" element={<AddItems />} />
          <Route path="/add-shopping-list" element={<AddShoppingList />} />
          <Route path="/shopping-list/:id" element={<ShoppingListDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
