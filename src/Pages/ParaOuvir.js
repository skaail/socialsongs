import React from 'react'
import Card from '../Components/Card'
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { useState, useEffect} from 'react'

function ParaOuvir() {

  const [albums, setAlbums] = useState([])

  const fetchPost = async () => {
      await getDocs(collection(db, "todos"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setAlbums(newData)
          })
  }

  useEffect(()=>{
      fetchPost();
  }, [])

  return (
    <div className='lista'>
          { albums.map( (album, key) => {
            if(album.nota === '' || album.nota === 100){
              return (
                  <Card key={key} name = {album.name} band = {album.band} logo = {album.logo}/>
              )
            }else{
              return ('')
            }
          }
            
        ) 
    }
    </div>
  )
}

export default ParaOuvir