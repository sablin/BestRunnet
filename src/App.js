import React, {useState} from 'react'
import { Table, Button } from 'reactstrap';
import ModalWindow from './components/ModalWindow';
import {useSelector} from 'react-redux';
import './App.css'
function App() {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // const training = [
  //   {
  //     date: '15-12-2021',
  //     type: 'Running',
  //     distance: '12'
  //   },
  //   {
  //     date: '17-12-2021',
  //     type: 'Ski',
  //     distance: '25'
  //   }
  // ]

  const training = useSelector(state => state.training)


  return (
    <div className="App">
     <div className="container">
       <h1>BestRunner</h1>
      
       <h3>Your best sport app</h3>
       <Button onClick={toggle} color="primary" style={{float: 'right'}}>+ Add workout</Button>
       <Table>
       <thead>
        <tr>
          <th>Date</th>
          <th>Workout</th>
          <th>Distance</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {
          training.map((el,key) =>{
          return (  
          <tr key={key}>
            <th scope="row">{el.date}</th>
            <td>{el.type}</td>
            <td>{el.distance}</td>
            <td>{el.comment}</td>
          </tr>)
          })
        }
      </tbody>
       </Table>
     </div>
     <ModalWindow isOpen={modal} toggle={toggle} buttonLabel='Show'/>
    </div>
  );
}

export default App;
