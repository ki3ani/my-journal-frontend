import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
//import notes from '../assets/data'
import { useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useNavigate } from 'react-router-dom';


 const NotePage = ({history}) => {
    //get the id from the url 
    const {id} = useParams();

    //a better way to navigate to a different page
    const navigate = useNavigate()



    //const note = notes.find(note => note.id===Number(id))
    const [note, setNote] = useState(null)
  

    // the function should be wrapped in a useEffect hook to prevent ESlint error
    //working on the real server/api
    useEffect(() => {

      let getNote = async () => {
        if (id === 'new') return
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`)
        let data = await response.json()
        setNote(data)
      }
      getNote()
    }, [id])


  
  let handleSubmit = () => {
    if(id !== 'new' && !note.body){
      deleteNote()
    } else if (id !== 'new') {
    updateNote()
    }
    else if (id === 'new' && note !== null) {
      createNote()
    }
    navigate('/')
  }




  
  //update the note
  let updateNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated': new Date()})
    })
  }

  //delete the note
  let deleteNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    navigate('/')
  }


//create a new note  
let createNote = async () => {
  await fetch(``, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({...note, 'created': new Date()})
  })
}






  return (
    <div className='note'>
        <div className='note-header'>
            <h3>
                <Link to='/'>
                    <ArrowLeft onClick={handleSubmit} />
                </Link>
            </h3>

            {id !== 'new' ? (
              <button onClick={deleteNote}>Delete</button>
            ) : (
              <button onClick={handleSubmit}>Done</button>
            )
          }

            </div>
        
        <textarea onChange={(e) => setNote({
            ...note, 'body': e.target.value})} value={note?.body}>
        </textarea>
    </div>
  )
}

export default NotePage;








