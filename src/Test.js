import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

import { useLocation, Link as ReactLink } from 'react-router-dom'

export default function UserProfileEdit ({ title, isEdit }) {
  const location = useLocation()
  const { client } = location.state
  console.log(client)
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          {title}
        </Heading>

        <FormControl id="userName" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            defaultValue={isEdit ? client.name : null }
            placeholder="Name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="RG" isRequired>
          <FormLabel>RG</FormLabel>
          <Input
            defaultValue={isEdit ? client.cpf : null }
            placeholder="RG (apenas números)"
            _placeholder={{ color: 'gray.500' }}
            type="number"
          />
        </FormControl>
        <FormControl id="CPF" isRequired>
          <FormLabel>CPF</FormLabel>
          <Input
            defaultValue={isEdit ? client.rg : null }
            placeholder="CPF (apenas números)"
            _placeholder={{ color: 'gray.500' }}
            type="number"
          />
        </FormControl>
        <FormControl id="linkedin">
          <FormLabel>Linkedin</FormLabel>
          <Input
            defaultValue={isEdit ? client.linkedin : null }
            placeholder="LinkedIn"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="facebook">
          <FormLabel>Facebook</FormLabel>
          <Input
            defaultValue={isEdit ? client.facebook : null }
            placeholder="Facebook"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="twitter">
          <FormLabel>Twitter</FormLabel>
          <Input
            defaultValue={isEdit ? client.twitter : null }
            placeholder="Twitter"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="instagram">
          <FormLabel>Instagram</FormLabel>
          <Input
            defaultValue={isEdit ? client.instagram : null }
            placeholder="Instagram"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Link
            as={ReactLink}
            to="/"
            w="full"
            style={{ textDecoration: 'none' }}
          >
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500'
              }}
            >
              Back
            </Button>
          </Link>
          <Link
            as={ReactLink}
            to="/"
            w="full"
            style={{ textDecoration: 'none' }}
          >
            <Button
              bg={'green.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'green.500'
              }}
            >
              Confirm
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Flex>
  )
}
