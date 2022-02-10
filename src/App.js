import { useState } from 'react'; 
import './App.css';
import Button from './Button.js';

function App() {
  const [type, setType] = useState('Top-Rated');

  return (
    <div className={`App ${type}`}>
      <div 
      className="container">
        <h1 className="header">Company Ratings</h1>
        <Button type="Top-Rated"
        setType={setType}/>
        <Button type="Note-Worthy"
        setType={setType}/>
        <Button type="All-Rankings"
        setType={setType}/>
      </div>
    </div> 
  );
}
        
        


export default App;


/* <button className="blue" onClick={()=> {
          console.log('clicked!');
          setColor('blue');
        }}
        >
        Note-worthy</button>
        <button className="yellow" onClick={()=> {
          console.log('clicked!');
          setColor('yellow')
        }}
          >
        All Rankings</button>
      </div>
    </div> */