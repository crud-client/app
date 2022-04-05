import {
  Input,
  Flex,
  useColorMode,
  useToast,
  Stack,
  Button,
  IconButton,
  HStack,
  Heading
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import List from './List'
import getList from './api/getList'
import createData from './api/createData'

const client = {
  name: 'Client',
  dateOfBirth: '21/01/2010',
  rg: '2626166',
  cpf: '098768912',
  facebook: 'fb.com/client',
  linkedin: 'linkedin.com/in/client',
  twitter: 'twitter.com/client',
  instagram: 'instagram.com/client'
}

export default function App () {
  const toast = useToast()
  const [clients, setClients] = useState([])
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
        <HStack width="100%" justifyContent="space-between" alignItems="top">
          <Heading>Get Clients</Heading>
          <ToggleButton />
        </HStack>
        <HStack width="100%" justifyContent="space-between" alignItems="center">
          <Input width="100%" placeholder="Search" size="lg" onChange={inputHandler} />
          <IconButton
            colorScheme='teal'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<FaPlusCircle />}
            onClick={async () => {
              const result = await createData(
                'Client',
                client,
                toast,
                'Clients',
                `"${client.name}" was successfully created".`
              )
              setClients(result)
              console.log(clients)
            }}
          />
        </HStack>
        <List input={inputText}/>
      </Stack>
    </Flex>
  )
}
