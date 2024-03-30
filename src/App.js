import './App.css';
import {useEffect, useState} from "react";
import CardSection from "./components/card-section";
import PostData from "./components/post-data";

function App() {
  const [ data, setData ] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
      fetch('http://localhost:3000/data')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error:', error))
  }, []);

  const opener = (text) => {
      if(text === "open"){
          setShowAdd(true);
      }else if(text === "close"){
          setShowAdd(false);
      }
  };

  const deletePerson = async (id) => {
      await fetch(`http://localhost:3000/data/${id}`, {
          method: 'DELETE' //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
      });

      window.location.reload();
  };

  const getData = () => {
      console.log(data);
  };

  return (
    <div className="app">
        <button onClick={()=> {opener("open")}}>click to get data</button>
        <CardSection data={data} deletePerson={deletePerson}/>
        {
            showAdd? <PostData opener={opener}/>: null
        }
    </div>
  );
}

export default App;
