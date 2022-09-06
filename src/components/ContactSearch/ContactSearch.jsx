import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const ContactSearch = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="searchContact"
          placeholder="Search name"
          value={filter}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default ContactSearch;
