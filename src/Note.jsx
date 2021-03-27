import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';



const Note = (props) => {

const deleteNote = () => {
    props.deleteItem(props.id);
}


    return (
        <>
            <div className="noteDiv">
            <div className="note">
                <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                    <Button className="del_btn" onClick={deleteNote}>
                <HighlightOffIcon className="deleteIcon"/>
                </Button>
            </div>
            </div>
        </>
    );

}

export default Note;