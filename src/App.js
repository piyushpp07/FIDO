
import './App.css';
import Header from './Header';
import FidoCard from './FidoCard';
import SwipeButton from './SwipeButton'
function App() {
  return (
    <div className="app">

      {/*Header*/}
      <Header />
      {/*Tinder Cards*/}
     <FidoCard/>
      {/*SwipeButtons*/}
      <SwipeButton/>
    </div>
  );
}

export default App;
