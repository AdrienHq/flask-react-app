import { useEffect, useState } from 'react';
import './App.css';
import { Channel } from './components/channel/Channel';

function App() {
  const [initialState, setState] = useState([])
  const url = '/api'

  useEffect(() => {
    fetch(url).then(response => {
      if(response.status == 200){
        return response.json()
      }
    }).then(data => setState(data))
  }, [])


  return (
    <div className="App">
      <Channel data={initialState}></Channel>      
    </div>
  );
}

export default App;
