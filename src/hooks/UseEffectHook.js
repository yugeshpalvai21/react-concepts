import { useState, useEffect } from 'react';

export const UseEffectHook = () => {
  const [catFact, setCatFact] = useState(null);
  
  const getNewCatFact = async () => {
    const res = await fetch('https://catfact.ninja/fact?max_length=140');
    const data = await res.json();
   
    setCatFact(data.fact);
  }

  useEffect(() => {
    console.log("UseEffect Run for the first time...");
    getNewCatFact();

    return () => {
      console.log("this will execute when component is unmounted..");
    }
  }, []);
  
  return (
    <div>
      <p>Today Fact: {catFact}</p>
      <button onClick={getNewCatFact}>Get New Cat Fact</button>
    </div>
  )
}