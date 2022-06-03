
import "../dist/output.css";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Cookingpost from "./components/Cookingpost";
import Item from "./components/Item";

const cookings = [

    {
        title: "Noodle",
        tumbnailurl:"/images/01.jpeg",
    },
    {
        title: "Hotdog",
        tumbnailurl:"/images/02.jpeg",
    },
    {
        title: "French Fries",
        tumbnailurl:"/images/03.jpeg",
    },
    {
        title: "Tokbokee",
        tumbnailurl:"/images/04.jpeg",
    } 
];

function App() {

        const cookingElements = cookings.map((cooking,index)=> {
       
            return <Item key={index} cooking={cooking} />;
        });
    return (
       <div className="app">
           <AppHeader />
           <div className="app-grid">
            {cookingElements}
          </div>
            
        </div>
             

    );
}
export default App;