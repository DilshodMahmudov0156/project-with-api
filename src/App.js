import './App.css';
import {useEffect, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import CardSection from "./components/card-section";
import PostData from "./components/post-data";
import {logDOM} from "@testing-library/react";
import EditingData from "./components/editing-data";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import LoginPage from "./components/login-page";
import WorkersSection from "./components/workers-section";

function App() {
  const [ data, setData ] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [editObj, setEditObj] = useState(null);
  const [login, setLogin] = useState(false);

  const forActive = ({isActive}) => {
      return(
          isActive? "list-group-item active": "list-group-item"
      );
  };

  useEffect(() => {
      fetch('http://localhost:3000/data')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error:', error))
  }, [data]);

  const opener = (text) => {
      if(text === "open"){
          setShowAdd(true);
      }else if(text === "close"){
          setShowAdd(false);
      }
  };

  const secondOpener = (text, item) => {
      if(text === "open"){
          setShowUpdate(true);
          const newObj = {
              name: item.name,
              role: item.role,
              username: item.username,
              phone: item.phone
          }
          setEditObj({...item, newObj});
      }else if(text === "close"){
          setShowUpdate(false);
      }
  }

  const poster = (e, obj) => {
      e.preventDefault();
      console.log({
          ...obj,
          id: uuidv4(),
          type: "worker",
          password: "0000"
      });
      fetch('http://localhost:3000/data', {
          method: "POST",
          // headers: {
          //     'Content-type': 'application/json'
          // },
          body: JSON.stringify(
              {
                  ...obj,
                  id: uuidv4(),
                  type: "worker",
                  password: "0000"
              }
          ),
      })
          .then(res => res.json())
          .then(data => {
              console.log(data)
          })
      e.target.reset();
  }

  const deletePerson = async (id) => {
      await fetch(`http://localhost:3000/data/${id}`, {
          method: 'DELETE' //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
      });

      window.location.reload();
  }

  const updater = async (e, obj) => {
      e.preventDefault();
      await fetch(`http://localhost:3000/data/${editObj.id}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/josn'},
          body: JSON.stringify(obj)
      })
          .then(response => response.json())
          .then(data => {console.log(data)})
          .catch(err => {console.log(err)});
      setEditObj(null);
      setShowUpdate(false);
  }

  const getData = () => {
      console.log(data);
  }
  return (
    <div className="app">
        <Router>
            <div className="d-flex">
                <div className="left-side">
                    <ul className="list-group">
                        <NavLink to="/" className={forActive} aria-current="true">
                            <i className="bi bi-person-circle"></i> Xodimlar
                        </NavLink>
                        <NavLink to="/sozlamalar" className={forActive}><i className="bi bi-gear"></i> Sozlamalar</NavLink>
                    </ul>
                    <button
                        className="btn btn-primary w-100 mt-2"
                        onClick={() => {
                            opener("open")
                        }}>
                        add new <i className="bi bi-person-plus-fill"></i>
                    </button>
                </div>
                <div className="main-side px-3">
                    {
                        showAdd ? <PostData opener={opener} adder={poster}/> : null
                    }
                    {
                        showUpdate ?
                            <EditingData secondOpener={secondOpener} updater={updater} editObj={editObj}/> : null
                    }
                    {
                        login? <LoginPage/>: null
                    }
                    <Routes>
                        <Route path="/" element={<WorkersSection data={data}/>}/>
                        <Route path="/sozlamalar" element={<CardSection data={data} deletePerson={deletePerson} secondOpener={secondOpener}/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
