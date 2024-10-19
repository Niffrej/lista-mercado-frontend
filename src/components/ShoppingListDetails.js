import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const ShoppingListDetails = () => {
  const { id } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      const response = await api.get(`/shopping-lists/${id}`);
      setList(response.data);
    };
    fetchList();
  }, [id]);

  if (!list) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{list.name}</h1>
      <ul>
        {list.items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.quantity} - {item.priority} - {item.category} - {item.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingListDetails;
