import './App.css';
import CreateArea from './components/CreateArea.jsx'
import {
    Text,
    Container,
    Heading,
    Box
} from "@chakra-ui/react"
import * as styles from './styles.jsx';
import { FaCrown } from "react-icons/fa6";


const currentYear = new Date().getFullYear();


export default function App() {

  return (
    <Box>

    

        <Heading as="h1" size="4xl" style={styles.boxH1}>
          <FaCrown />Keeper heading
        </Heading>

        <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Container>
        <CreateArea />
        </Container>
        </Container>
    <Text style={styles.copyrightText}>©Copyright {currentYear}</Text>
    

    </Box>
  );
}

