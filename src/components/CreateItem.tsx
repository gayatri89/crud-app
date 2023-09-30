import React, { useState } from 'react'

interface CreateItemProps {
    onCreate: (item: string) => void;
}

const CreateItem: React.FC<CreateItemProps> = ({ onCreate }) => {
    const [newItem, setNewItem] = useState('');

    const handleCreateItem = () => {
        if (newItem.trim() !== '') {
          onCreate(newItem);
          setNewItem('');
        }
      };
    

  return (
      <div>
          <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
          
          <button onClick={handleCreateItem}>Create</button>

    </div>
  )
}

export default CreateItem