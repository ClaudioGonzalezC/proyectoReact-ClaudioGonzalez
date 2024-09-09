import Navbar from "./components/layouts/navbar/Navbar";
import Disclaimer from "./components/pages/disclaimer/Disclaimer";
import ItemListContainer from "./components/pages/itemListContainer/itemListContainer";
  
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer /> 
      <Disclaimer />
    </div>
  );
}

export default App;