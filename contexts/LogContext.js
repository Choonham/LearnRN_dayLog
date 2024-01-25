import {createContext, useState} from 'react';
import React from 'react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
const LogContext = createContext(undefined);

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);
  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };
  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
