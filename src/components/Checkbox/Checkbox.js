import React, { useEffect, useRef } from 'react';

export const Checkbox = ({ item, handleCheckbox }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (item.completed === true) {
      inputRef.current.checked = true
    }
  }, []);

  return (
    <input
      type='checkbox'
      ref={inputRef}
      name={`checkbox-${item.id}`}
      value={item.id}
      onChange={handleCheckbox}
    />
  )
}