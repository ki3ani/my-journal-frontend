import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
//import notes from '../assets/data'
import { useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'



 const NotePage = () => {
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

  return (
    <div className='note'>
        <div className='note-header'>
            <h3>
                <Link to='/'>
                    <ArrowLeft />
                </Link>
            </h3>
            </div>
        
        <textarea value={note?.body}>
        </textarea>
    </div>
  )
}

export default NotePage;








