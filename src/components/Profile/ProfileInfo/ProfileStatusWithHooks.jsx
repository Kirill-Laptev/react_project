import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }


    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }

    return(
        <div>
            {editMode
            ? <div><input onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true} value={status}/></div>
            : <div><span onDoubleClick={activateMode}>{props.status || '------'}</span></div>}
         </div>
    )      
}


export default ProfileStatusWithHooks; 