import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react';
import { noteBox } from '../styles.jsx';



export default function Note(props) {
    return(
        <Box  style={{width:"100vw"}} id={props.id}>
            <Box style={noteBox}>
            <Heading as="h4" mb="5px">{props.Title}</Heading>
            <Text>{props.Content}</Text>
            </Box>
        </Box>
    )
}