import React from "react";
import { Container,
        Input,
        Textarea,
        Button,
        Box 
    } from "@chakra-ui/react";
import { createArea, createFields, submitButton } from "../styles";
import Note from "./Note";
import { FaPlusSquare } from "react-icons/fa";
import { useControllableState } from '@chakra-ui/react'


export default function CreateArea() {
    const formFields = {Title:"", Content:""};
    const [createChange, setCreateChange] = useControllableState({ defaultValue: formFields });
    const [createNote, setCreateNote] = useControllableState({ defaultValue: [] });

    function handleChange(e) {
        const {value, name} = e.target;
        //use [...prev, [name]: value]
        setCreateChange((prev) => {
            if(name === "Title"){
                return {Title: value, Content: prev.Content}
            }
            if(name === "Content"){
                return {Title: prev.Title, Content: value}
            }
        })
    }

    function handleSubmit() {
        return (
            setCreateNote((prev) => [createChange, ...prev]),
            setCreateChange(formFields)
        );
    }

    return(
        <div>
    <Container style={createArea}> {/*style this same as Note*/}
        
        <Input
        name="Title"
        placeholder='Note title'
        style={createFields}
        onChange={handleChange}
        value={createChange.Title}
        /> 
        <Textarea
        name="Content"
        onChange={handleChange}
        placeholder="Note content"
        style={createFields}
        rows="3"
        value={createChange.Content}
        />
        <Button style={submitButton} onClick={handleSubmit}><FaPlusSquare color="white"/></Button>

    </Container>

    <Box>
    {createNote.map((value, index) => 
    <Note
    Title={value.Title}
    Content={value.Content}
    key={index}
    id={index}
    />
    )}
    </Box>

    
    
    </div>
    )
}