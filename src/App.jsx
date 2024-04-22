
import './App.css';

import Card from './Card';

import NavBar from './NavBar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar link={'#'} linkCurrent ={'Home'} linkSecond= {'Chi siamo'} linkThird= {'Documenti'}/>
<Card title = 'Sono una card' content = 'lorem ipsum' />

      </header>
    </div>
  );
}
export default App;
