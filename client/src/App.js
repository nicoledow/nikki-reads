import React from "react";

import Header from './Components/Header';
import UserActionsBar from './Components/UserActionsBar';

export default function App({children}) {
  return (
    <div>
      <UserActionsBar />
      <Header/>
      {children}
    </div>
  )
}

