import './App.css';
import Filters from './Components/Filters';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Items from './Components/Items';
import SeasonSpecial from './Components/SeasonSpecial';

function App() {
  return (
    <>
      <Header />
      <Filters />
      <Items />
      <SeasonSpecial />
      <Footer />
    </>
  );
}

export default App;
