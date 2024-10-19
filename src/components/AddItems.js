import React, { useState } from 'react';
import api from '../api';

const AddItems = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [priority, setPriority] = useState('Média');
  const [category, setCategory] = useState('Geral');
  const [note, setNote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/items', { name, quantity, priority, category, note });
      alert('Item adicionado com sucesso!');
      // Limpar os campos após adicionar
      setName('');
      setQuantity(1);
      setPriority('Média');
      setCategory('Geral');
      setNote('');
    } catch (error) {
      console.error('Erro ao adicionar item', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Item:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Quantidade:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <div>
        <label>Prioridade:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Alta">Alta</option>
          <option value="Média">Média</option>
          <option value="Baixa">Baixa</option>
        </select>
      </div>
      <div>
        <label>Categoria:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Notas:</label>
        <textarea value={note} onChange={(e) => setNote(e.target.value)}></textarea>
      </div>
      <button type="submit">Adicionar Item</button>
    </form>
  );
};

export default AddItems;
