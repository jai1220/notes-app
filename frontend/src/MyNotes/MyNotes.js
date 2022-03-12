import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../components/MainScreen';

import notes from '../notes';

const MyNotes = () => {

  const deleteHandler = (id) => {
   if(window.confirm("Are you sure to delete")){

   } 
  }

  return <MainScreen title="Welcome back Jai">
    <Link to='createnote'>
      <Button size='lg'>
        Create New Note
      </Button>

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
    </Link>
  </MainScreen>
}

export default MyNotes