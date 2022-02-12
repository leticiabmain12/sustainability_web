import axios from 'axios';
import { useEffect, useState } from 'react'; 
import './App.css';
import Button from './Button.js';
import RatingsList from "./components/RatingsList";


const URL = "https://fast-mountain-02468.herokuapp.com/ratings";
const TOP = "https://fast-mountain-02468.herokuapp.com/ratings/Overall%20rating:%20Great"


function App() {
  const [type, setType] = useState('All-Rankings');
  const [ratingsApi, setRatingsApi] = useState([]);
  const [topratingsApi, setTopratingsApi] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=> {
    axios.get(`${URL}`)
    .then((response) => {
      setRatingsApi(response.data);
      console.log(response.data)
      console.log(ratingsApi);
    })
    .catch((error) => {
      console.log(error)
      setErrorMessage(
      <section>
       {'error'}
        </section>)
    })
  },[],
  );

useEffect(()=> {
  axios.get(`${TOP}`)
  .then((response) => {
    setTopratingsApi(response.data);
    console.log(response.data)
    console.log(topratingsApi);
  })
  .catch((error) => {
    console.log(error)
    setErrorMessage(
    <section>
     {'error'}
      </section>)
})
},[],
);


  return (
    <div className={`App ${type}`}>
      <div 
      className="container">
        <h1 className="header">Let's Shop Sustainably!</h1>
        {errorMessage}
        <Button type="All-Rankings"
        setType={setType}
        setRatingsApi={setRatingsApi}
        />
        <Button type="Note-Worthy"
        setType={setType}
        setTopratingsApi={setTopratingsApi}
        />
        <Button type="Top-Rated"
        setType={setType}
        />
      
       <main>
       <RatingsList
          brandData={ratingsApi}></RatingsList>
       </main>  
  
      </div>
      
    </div> 
  );
  }
  
  export default App;

