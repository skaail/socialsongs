import React, { useState } from 'react'
import Modal from './Modal'


function Card(props) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <div className='card'>
            <div><img className='img' alt='capa' onClick={() => setIsOpen(true)} src={props.logo}></img></div>
            <div className='info'>
                <div className='albumNome'>{props.name}</div>
                <div className='albumBanda'>{props.band}</div>
            </div>
        </div>

        <Modal open={isOpen} onClose={() => {setIsOpen(false)}}>
          {props.name} - {props.band}

        </Modal>
    </>

  )
}

export default Card