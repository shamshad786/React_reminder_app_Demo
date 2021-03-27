import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const CreateNote = (props) => {
    
    const[expand, setExpand] = useState(false);

    const[note, setNote] = useState({
        title: '',
        content: ''
    });

    const InputEvent = (event) =>{

        // const value = event.target.value;  this is old method
        // const name = event.target.name;

        const {value, name} = event.target; // this is object destructuring modern JS

        setNote((previousData) =>{
            return{
                ...previousData,
                [name]: value,

            };
         
        });
        console.log(note);
    };
        const addEvent = () =>{
            props.passNote(note);
            setNote({
                title: '',
                content: ''
            });
        }

        const expandIt = () =>{
            setExpand(true);
        }

        const shrink = () =>{
            setExpand(false);
        }

    return (
        <>
        <div className="main_div" onDoubleClick={shrink}>
        <div className ="main_note">
        <form>
          {expand ?  <input type="text"  value={note.title} name="title" onChange={InputEvent} placeholder="Title" autocomplete="off"/> : null}
            <textarea rows="" column="" value={note.content} name="content" onChange={InputEvent} placeholder="write a note..." onClick={expandIt}></textarea>
          {expand ?  <Button className="add_btn" onClick={addEvent}>
                <AddCircleIcon/>
            </Button> :null}
        </form>

        </div>
        </div>

        </>
    );
}

export default CreateNote;