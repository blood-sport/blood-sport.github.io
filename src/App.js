import './App.css';
import Social from './Social';

const App = () => {
  return (
    <div>
      <div className='App'>
        <h1>...SPEED KILLS...</h1>
        <p>Upcoming events: </p>
        <p>4/3/2023 Varjobaari, Tampere</p>
        <p>12/3/2023 Dog's Home, Tampere</p>
        <Social />
      </div>
      <div className='line'>X</div>
    </div>
  );
};

export default App;
