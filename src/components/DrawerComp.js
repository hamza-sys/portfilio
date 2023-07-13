import React, {useRef} from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
    DrawerCloseButton,
    Button,
  Input,
  IconButton,
  VStack,
  Link
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const DrawerComp = ({isOpen, onOpen, onClose}) => {
  return (
      <div>
          <IconButton colorScheme='black'
              icon={<HamburgerIcon color='white' boxSize={7} />}
              onClick={onOpen}
            />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg='black'>
          <DrawerCloseButton color='white' />

          <DrawerBody sx={{paddingTop: '80px'}}>
            <VStack align='start' spacing={4} >
                    <Link sx={{fontSize: '17px', cursor: 'pointer', transition: 'all .3s ease', color: '#676767', _hover: {color: 'white'}}}>Home</Link>
              <Link sx={{cursor: 'pointer', transition: 'all .3s ease', color: '#676767', _hover: {color: 'white'}}}>About</Link>
              <Link sx={{cursor: 'pointer', transition: 'all .3s ease', color: '#676767', _hover: {color: 'white'}}}>Works</Link>
              <Link sx={{cursor: 'pointer', transition: 'all .3s ease', color: '#676767', _hover: {color: 'white'}}}>Contact</Link>        
            </VStack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>

    </div>
  )
}

export default DrawerComp