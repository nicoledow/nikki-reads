import React from "react";

import Header from './Components/Header';

export default function App({children}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

