import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import { Chat } from "./components/Chat";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
