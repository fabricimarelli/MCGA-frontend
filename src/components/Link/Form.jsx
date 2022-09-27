import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New ToDo" value={title} onChange={(e) => handleChange(e)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;