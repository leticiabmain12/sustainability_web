import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import './App.css';
import Button from './Button.js';
import RatingsList from "./components/RatingsList";

const URL = "https://fast-mountain-02468.herokuapp.com/ratings";
const TOP = "https://fast-mountain-02468.herokuapp.com/ratings/Overall%20rating:%20Great"
const TYPE_MAPPING = { "Top-Rated"  : {
  buttonLabel: "Top Rated",
  apiProp: "/Overall%20rating:%20Great",
  type: "Top-Rated"      
},
"Note-Worthy"  : {
  buttonLabel: "Note Worthy",
  apiProp: "/Overall%20rating:%20Good",
  type: "Note-Worthy"      
},
"All-Rankings"  : {
  buttonLabel: "All Rankings",
  apiProp: "",
  type: "All-Rankings"      
},
}

function App() {
  const [type, setType] = useState(TYPE_MAPPING['All-Rankings'].type);
  const [ratingsApi, setRatingsApi] = useState([]);
  const [topratingsApi, setTopratingsApi] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const [ searchText, setSearchText ] = useState("");




useEffect(()=> {
  console.log(`calling on type: ${TOP}`)

  const apiUrl = `${URL}${TYPE_MAPPING[type].apiProp}`
  console.log(`calling ${apiUrl}`)
  axios.get(`${apiUrl}`)
  .then((response) => {
    setRatingsApi(response.data);
    
  })
  .catch((error) => {
    console.log(error)
    setErrorMessage(
    <section>
     {'error'}
      </section>)
})
},[type],
);




  const onTypeChanged = (newType) => {
    console.log(newType)
    setType(newType)
  

  } 

   const filteredList = searchText !==''? ratingsApi.filter((data)=>{
     return  data.name.toLowerCase().includes(searchText.toLowerCase()) 
   }) : {}



  return (
    <div className={`App ${type}`}>

      <div 
      className="container">
        <h1 className="header">Let's Shop Sustainably!</h1>
        {errorMessage}
        <Button type={TYPE_MAPPING["All-Rankings"].type}
         label={TYPE_MAPPING["All-Rankings"].buttonLabel}
         onTypeChanged={onTypeChanged}
       
        />
        <Button type={TYPE_MAPPING["Note-Worthy"].type}
        label={TYPE_MAPPING["Note-Worthy"].buttonLabel}
         onTypeChanged={onTypeChanged}
  
        />
        <Button type={TYPE_MAPPING["Top-Rated"].type}
        label={TYPE_MAPPING["Top-Rated"].buttonLabel}
                 onTypeChanged={onTypeChanged}

      
        />
       </div>
       <main >
       {<RatingsList 
          brandData={ratingsApi}>
          </RatingsList>}
       </main>  
  
     
      
    </div> 
  );
  }
  
  export default App;

