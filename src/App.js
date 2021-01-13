import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat'
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'
import axios from './axios'
import { useStateValue } from './StateProvider';
import Login from './Login'



function App() {
  
  const [{ user}, dispatch] = useStateValue()
  const [messages, setMessages]  = useState([]);

  useEffect(()=> {
    axios.get('/messages/sync').then(response =>{
      setMessages(response.data)

    })

  }, [])


  useEffect(() => {
  const pusher = new Pusher('c65f4e3ea81c95508e4f', {
    cluster: 'eu'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage) => {
    // alert(JSON.stringify(newMessage));
    setMessages([...messages, newMessage]);
  });

  return () =>{
    channel.unbind_all();
    channel.unsubscribe();
  };
}, [messages]);  


console.log(messages)

  


return (
    <div className="app">
      
      {!user ? (
        <Login/>
      ) : (

        <div className='app__body'>
    
          <Sidebar/>
          <Chat messages={messages}/>

      </div>

      )}
     
     
    </div>
  );
}

export default App;
