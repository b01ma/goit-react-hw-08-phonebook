import React from 'react';

const NewContactForm = () => {
  return (
    <div>
      <form>
        <input type="text" name="Name" placeholder="Name" />
        <input type="number" name="Number" placeholder="Number" />
        <button type="submit">New Contact</button>
      </form>
    </div>
  );
};

export default NewContactForm;
