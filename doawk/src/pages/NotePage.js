import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useParams, useNavigate } from 'react-router-dom';


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


    let createNote = async () => {
        fetch(`/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }


    let updateNote = async () => {
        fetch(`/api/notes/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }


    let deleteNote = async () => {
        fetch(`/api/notes/${id}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')
    }

    let handleSubmit = () => {
        console.log('NOTE:', note)
        if (id !== 'new' && note.body === '') {
            deleteNote()
        } else if (id !== 'new') {
            updateNote()
        } else if (id === 'new' && note.body !== null) {
            createNote()
        }
        navigate('/')
    }

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
        console.log('Handle Change:', note)
    }

    return (
        <div className="note" >
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}

            </div>
            <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage