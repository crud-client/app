import {
  Input,
  Flex,
  useColorMode,
  useToast,
  Stack,
  Button,
  HStack,
  Heading
} from '@chakra-ui/react'

import { useEffect, useState } from 'react'

import LinkRouteCreate from './atoms/LinkRouteCreate'

import List from './List'
import getList from './api/getList'

export default function App () {
  const toast = useToast()
  const [, setClients] = useState([])
  const [inputText, setInputText] = useState('')
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  const { colorMode, toggleColorMode } = useColorMode()

  const ToggleButton = () => {
    return (
      <Button onClick={toggleColorMode} position="relative">
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    )
  }

  useEffect(() => {
    getList('Client', 'clients', toast).then((c) => {
      setClients(c)
      console.log(c)
    })
  }, [])

  return (
    <Flex justifyContent={'center'}>
      <Stack mt={50} width={'1080px'} padding={'15px'} spacing="25px">
        <HStack w="full" justifyContent="space-between" alignItems="top">
          <Heading>Get Clients</Heading>
          <ToggleButton />
        </HStack>
        <HStack w="full" justifyContent="space-between" alignItems="center">
          <Input
            w="full"
            placeholder="Search"
            size="lg"
            onChange={inputHandler}
          />
          <LinkRouteCreate model="client" data={{ client: null }} />
        </HStack>
        <List input={inputText} />
      </Stack>
    </Flex>
  )
}
