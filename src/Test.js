import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Link,
  useToast,
  useColorModeValue
} from '@chakra-ui/react'

import { useLocation, Link as ReactLink } from 'react-router-dom'
import { useState } from 'react'

import createOrUpdateData from './api/createOrUpdateData'

export default function UserProfileEdit ({ model, title, isEdit }) {
  const toast = useToast()
  const location = useLocation()

  const { [model]: value } = location.state
  const fields = {
    telphone: [
      { col: 'Number', required: true, type: 'number' },
      { col: 'Type', required: true, type: 'text' }
    ],
    address: [
      { col: 'CEP', required: true, type: 'text' },
      { col: 'State', required: true, type: 'text' },
      { col: 'City', required: true, type: 'text' },
      { col: 'Neighborhood', required: true, type: 'text' },
      { col: 'Complement', required: true, type: 'text' }
    ],
    client: [
      { col: 'Name', required: true, type: 'text' },
      { col: 'RG', required: true, type: 'number' },
      { col: 'CPF', required: true, type: 'number' },
      { col: 'DateOfBirth', required: true, type: 'date' },
      { col: 'Linkedin', required: false, type: 'text' },
      { col: 'Facebook', required: false, type: 'text' },
      { col: 'Twitter', required: false, type: 'text' },
      { col: 'Instagram', required: false, type: 'text' }
    ]
  }
  const states = {}
  for (let i = 0; i < fields[model].length; i++) {
    states[fields[model][i].col] = useState(
      isEdit
        ? value[fields[model][i].col.toLowerCase()]
        : fields[model][i].type === 'number'
          ? 0
          : ''
    )
  }

  const prefix = value?.clientID ? `${value.clientID}/` : ''
  const suffix = value?.id ? `/${value.id}` : ''

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
        {fields[model].map((field) => (
          <FormControl
            key={`${title}-form-control-${field.col}`}
            isRequired={field.required}
          >
            <FormLabel>{field.col}</FormLabel>
            <Input
              defaultValue={isEdit ? value[field.col.toLowerCase()] : null}
              placeholder={field.col}
              _placeholder={{ color: 'gray.500' }}
              type={field.type}
              onChange={(e) => {
                states[field.col][1](e.target.value)
              }}
            />
          </FormControl>
        ))}

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
              onClick={async () => {
                let body = Object.entries(states).map(([k, v], i) =>
                  v[0] !== '' ? { [k.toLowerCase()]: v[0] } : null
                )
                body = Object.assign({}, ...body)
                if (body.dateofbirth) {
                  body.dateOfBirth = body.dateofbirth
                  delete body.dateofbirth
                }
                body = isEdit ? { ...value, ...body } : body

                await createOrUpdateData(
                  `${prefix}${model}${suffix}`,
                  body,
                  toast,
                  `${model}s`,
                  isEdit
                    ? 'Item was successfully updated".'
                    : 'Item was successfully created".',
                  isEdit
                )
                // window.location.reload()
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
