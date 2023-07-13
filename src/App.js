import './App.css';
import { Box, Button } from '@chakra-ui/react';
import Navbar from './components/Navbar';

import { ChakraProvider } from '@chakra-ui/react';
import DrawerComp from './components/DrawerComp';

function App() {
  return (
    <ChakraProvider>
    <Box bg='#000'>
      <Box mx='auto'>
          <Navbar />
      </Box>
    </Box>
    </ChakraProvider>
    
  );
}
export default App;
