import React, { useState, useEffect } from 'react';
import 'react-edit-text/dist/index.css';

export const AccountDropDown = ({keyID, id, data, changeCallback, className}) => {
  
  if (id === null) {
    id = -1;
  }
  
  const [my_key, setMy_Key] = useState(keyID);
  const [my_id, setMy_ID] = useState(id);
  const [my_data, ] = useState(data);

  const handleChange = (e) => {
    var index = e.nativeEvent.target.selectedIndex;
    
    changeCallback({id: my_id, new_value: e.target.value, new_text: e.nativeEvent.target[index].text});
    
    setMy_ID(e.target.value);
  };

  useEffect(() => {
    setMy_Key(keyID);
  }, [keyID]);

  useEffect(() => {
    setMy_ID(id);
  }, [id]);


  return (
    <select
      name={my_key}
      value={my_id}
      onChange={handleChange}
      className={className}>
        {my_data.map(o => (
          <option 
            key={o.id?o.id:o.account} 
            value={o.id?o.id:o.account}>
              {o.account}
          </option>
        ))}
    </select>
  );
};

export default AccountDropDown;