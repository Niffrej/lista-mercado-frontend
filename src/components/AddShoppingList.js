import React, { useState } from 'react';
import api from '../api';

const AddShoppingList = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/shopping-lists', { name });
      alert('Lista de compras criada com sucesso!');
      setName('');
    } catch (error) {
      console.error('Erro ao criar lista', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome da Lista de Compras:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <button type="submit">Criar Lista</button>
    </form>
  );
};

export default AddShoppingList;
