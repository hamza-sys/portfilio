import { Button, Container, HStack, IconButton, Link, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

import {HamburgerIcon} from '@chakra-ui/icons'
import DrawerComp from './DrawerComp'

const Navbar = () => {
      const { isOpen, onOpen, onClose } = useDisclosure()
    const [is781] = useMediaQuery('(min-width: 781px)')

  return (
      <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} maxW='1000px' m='auto' py={4}>
          <Text sx={{ fontSize: '30px', color: '#fff', fontWeight: 'bold' }}>Hamza</Text>
          {is781 ? (
              <>
                  <HStack spacing='40px'>
              <Link sx={{fontSize: '17px', cursor: 'pointer', transition: 'all .3s ease', color: '#676767', _hover: {color: 'white'}}}>Home</Link>
              <Link sx={{cursor: 'pointer', transition: 'all .3s ease', color: '#676767', _hover: {color: 'white'}}}>About</Link>
              <Link sx={{cursor: 'pointer', transition: 'all .3s ease', color: '#676767', _hover: {color: 'white'}}}>Works</Link>
              <Link sx={{cursor: 'pointer', transition: 'all .3s ease', color: '#676767', _hover: {color: 'white'}}}>Contact</Link>
                </HStack>
                  <Button sx={{ backgroundColor: '#323232', color: 'white', borderRadius: '14px', padding: '0 25px', _hover: {color: 'black', backgroundColor:'white',}}}>Let's talk</Button>
              </>
      ) : (
          <>
          
            <DrawerComp isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          </>
          )
         
        }
         
        </Container>
        
  )
}

export default Navbar