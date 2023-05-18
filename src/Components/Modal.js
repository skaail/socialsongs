import React from 'react'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    width: '60%',
    height: '80%',
    zIndex: 1000,
    color: 'black',
    borderRadius: '20px'
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

const CONTENT_STYLES = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
}

const MODAL_BODY = {
    display: 'flex',
    padding: '25px'
}

function Modal({open, children, onClose}) {
    if(!open) return null

    return (
        <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLES}>
                <div style={CONTENT_STYLES}>
                    <div><p style={{cursor: 'pointer', display: 'flex', paddingRight: '25px', flexDirection: 'row-reverse'}} onClick={onClose}>X</p></div>
                    <div style={MODAL_BODY}>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal