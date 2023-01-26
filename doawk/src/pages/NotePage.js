import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
//import notes from '../assets/data'
import { useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'



 const NotePage = ({history}) => {
    const {id} = useParams();
    //const note = notes.find(note => note.id===Number(id))
    const [note, setNote] = useState(null)
  

    // the function should be wrapped in a useEffect hook to prevent ESlint error
    //working with a dummy server/api
    useEffect(() => {

      let getNote = async () => {
        let response = await fetch(`http://localhost:8000/notes/${id}`)
        let data = await response.json()
        setNote(data)
      }
      getNote()
    }, [id])


  
  let handleSubmit = () => {
    updateNote()
    history.push('/')

  }






  
  //update the note
  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated': new Date()})
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
            </div>
        
        <textarea onChange={(e) => setNote({
            ...note, 'body': e.target.value})} value={note?.body}>
        </textarea>
    </div>
  )
}

export default NotePage;








