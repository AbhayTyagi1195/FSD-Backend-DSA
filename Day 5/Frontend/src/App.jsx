import React from "react";
import Register from "./components/Register.jsx";
import View from "./components/View.jsx";
import Delete from "./components/Delete.jsx";
import Update from "./components/Update.jsx";
import './App.css';
const App=()=>{
    return (
        <div>
            <h1>User Registration System</h1>
            <Register/>
            <View/>
            <Delete/>
            <Update/>
        </div>
    )
}
export default App;