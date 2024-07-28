import React, { createContext, useState, useContext } from 'react';

// Create a context object
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState('Hello, World!');

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

const MyComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState('Hello, useContext!')}>Change Text</button>
    </div>
  );
};

const Context = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

export default Context;
