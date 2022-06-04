
import { useState } from "react";
import "../dist/output.css";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Cookingpost from "./components/Cookingpost";
import Item from "./components/Item";
import cookings from "./data/cookings";

function App() {
        
        const [selectedcooking,setSelectedcooking]= useState(cookings[null]);
        function onCookingopenclick () {
            setSelectedcooking(cookings[0])
        }

        const cookingElements = cookings.map((cooking,index)=> {
          return <Item key={index} cooking={cooking} />;
        });    
      
       let cookingpost= null;
        if (!!selectedcooking) {
            cookingpost= <Cookingpost cooking={selectedcooking } />
        }

    return (
       <div className="app">
           <AppHeader />
            <button onClick={onCookingopenclick} >Select your food !</button>
           <div className="app-grid">
            {cookingElements}
          </div>
          {cookingpost}
        </div>
             

    );
}
export default App;