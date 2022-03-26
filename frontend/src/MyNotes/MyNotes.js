import React, { useEffect, useState } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../components/MainScreen';
import axios from 'axios';

//import notes from '../notes';

const MyNotes = () => {

  const[notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
   if(window.confirm("Are you sure to delete")){

   } 
  }

  const fetchNotes = async () => {
    const {data} = await axios.get('/api/notes/'); //Destructuring data from response
    setNotes(data);
  }

  useEffect(()=> {
    fetchNotes();
  }, [])

  return <MainScreen title="Welcome back Jai">
    <Link  to='createnote'>
      <Button size='lg'>
        Create New Note
      </Button>
    </Link>

      {
        notes.map(note => (
          <Card key={note._id} style={{ margin: "10px" }}>
            <Card.Header style={{ display: "flex" }}>
              <span style={{ flex: "auto" }}>{note.title}</span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button variant='danger' className='mx-2' onClick={()=>deleteHandler(note._id)}>Delete</Button>
              </div>
            </Card.Header>
            <Card.Body>
              <h4>
              <Badge variant="success">
                  Category - {note.category}
              </Badge>
              </h4>
              <p>{note.content}</p>
            </Card.Body>
          </Card>
        ))
      }
  </MainScreen>
}

export default MyNotes