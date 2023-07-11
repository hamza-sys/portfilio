import { Button, Container, HStack, IconButton, Link, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

import {HamburgerIcon} from '@chakra-ui/icons'

const Navbar = () => {
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
                  <Button sx={{ backgroundColor: '#323232', color: 'white', _hover: {color: 'black', backgroundColor:'white',}}}>Let's talk</Button>
              </>
          ) : (
                  <IconButton
                      colorScheme='black'
                    icon={<HamburgerIcon color='white' boxSize={7} />}
                  />
          )
         
        }
         
        </Container>
        
  )
}

export default Navbar