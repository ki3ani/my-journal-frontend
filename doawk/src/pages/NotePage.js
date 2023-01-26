import React from 'react'

import notes from '../assets/data'
import { useParams } from 'react-router-dom';



 const NotePage = () => {
    const {id} = useParams();
    const note = notes.find(note => note.id===Number(id))
  return (
    <div>
        <h1>{note.body}</h1>
    </div>
  )
}

export default NotePage;








