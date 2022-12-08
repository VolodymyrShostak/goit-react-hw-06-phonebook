import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Input } from './Filter.styled.js';
import { createFilter } from 'redux/filterSlise.js';

const Filter = () => {
  const value = useSelector(({filter}) => filter)
  const dispatch = useDispatch();

    return (
      <>
        <Title>Find contacts by name</Title>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={({ target: { value } }) => {
            dispatch(createFilter(value));
          }}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
}
export default Filter;
