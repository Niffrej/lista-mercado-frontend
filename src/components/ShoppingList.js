import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const ShoppingList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      const response = await api.get('/shopping-lists');
      setLists(response.data);
    };
    fetchLists();
  }, []);

  return (
    <div>
      <h1>Listas de Compras</h1>
      <Link to="/add-shopping-list">Adicionar Nova Lista</Link>
      <ul>
        {lists.map((list) => (
          <li key={list._id}>
            <Link to={`/shopping-list/${list._id}`}>{list.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
