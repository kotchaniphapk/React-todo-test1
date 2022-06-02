
import "../dist/output.css";
import "./App.css";
import AppHeader from "./AppHeader";
import Item from "./Item";


function App() {
      
  return (
       <div className="app">
           <AppHeader />
           <div className="app-grid">
             <Item />
             <Item />
             <Item />
             <Item />
            </div>
        </div>
             

    );
}
export default App;