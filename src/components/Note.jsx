import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react';
import { noteBox, TrashCan } from '../styles.jsx';
import { FaRegTrashAlt } from "react-icons/fa";


export default function Note(props) {

    // const [change, setChange] = useState("")

    // function handleDelete(e) {
    //     console.log(e)
    // }


    return(
        <Box  style={{width:"100vw"}} id={props.id}>
            <Box style={noteBox}>
            <Heading as="h4" mb="5px">{props.Title}</Heading>
            <Text>{props.Content}</Text>
            <FaRegTrashAlt 
                style={TrashCan}
                onClick={props.whenClicked}
            />
            </Box>
        </Box>
    )
}