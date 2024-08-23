import { useState } from 'react';

export const UseStateHook = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <h3>Full Name: {firstName || lastName ? `${firstName} ${lastName}` : ''}</h3>
      <form>
        <div>
          <input type="text" placeholder="Please enter first name .." onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <br />
        <div>
          <input type="text" placeholder="Please enter last name .." onChange={(e) => setLastName(e.target.value)}/>
        </div>
      </form>
    </div>
  );
}