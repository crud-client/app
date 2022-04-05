import {
  Grid,
  GridItem,
  Text,
  Button,
  Center,
  Collapse,
  Stack,
  Box,
  IconButton,
  useDisclosure,
  HStack
} from '@chakra-ui/react'
import {
  FaEdit,
  FaTrash,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'

import data from './ListData.json'
import { useState } from 'react'

export default function List ({ input }) {
  const collapses = new Map()
  for (let i = 0; i < data.length; i++) {
    const { isOpen, onToggle } = useDisclosure()
    const [span, setSpan] = useState(1)
    const [text, setText] = useState('Expand Info')
    const [hovering, setHovering] = useState(false)

    collapses.set(data[i].id, {
      collapse: {
        isOpen,
        onToggle
      },
      span: {
        value: span,
        setValue: setSpan
      },
      text: {
        value: text,
        setValue: setText
      },
      hovering: {
        value: hovering,
        setValue: setHovering
      }
    })
  }
  const filteredData = data.filter((el) => {
    if (input === '') {
      return el
    } else {
      return el.text.toLowerCase().includes(input)
    }
  })

  const handleMouseEnter = (id) => {
    collapses.get(id).hovering.setValue(true)
  }

  const handleMouseLeave = (id) => {
    collapses.get(id).hovering.setValue(false)
  }

  const showText = (id) => {
    collapses.get(id).collapse.onToggle()
    const toggledSpanSize = collapses.get(id).span.value === 1 ? 3 : 1
    collapses.get(id).span.setValue(toggledSpanSize)

    const toggledText =
      collapses.get(id).text.value === 'Expand Info'
        ? 'Collapse Info'
        : 'Expand Info'
    collapses.get(id).text.setValue(toggledText)
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {filteredData.map((item) => (
        <GridItem
          rowSpan={collapses.get(item.id).span.value}
          colSpan={collapses.get(item.id).span.value}
          key={item.id}
          onMouseEnter={() => {
            handleMouseEnter(item.id)
          }}
          onMouseLeave={() => {
            handleMouseLeave(item.id)
          }}
          rounded="md"
          shadow="md"
          bg="blue.500"
        >
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {collapses.get(item.id).hovering.value && (
              <GridItem colStart="4" position="absolute">
                <Stack>
                  <IconButton
                    colorScheme="red"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<FaTrash />}
                  />
                  <IconButton
                    colorScheme="gray"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<FaEdit />}
                  />
                </Stack>
              </GridItem>
            )}

            <GridItem colSpan="4">
              <Center>
                <Text fontSize="4xl">{item.text}</Text>
              </Center>
            </GridItem>

            <GridItem colSpan="2">
              <Center>
                <Text>CPF: {item.cpf}</Text>
              </Center>
            </GridItem>

            <GridItem colSpan="2">
              <Center>
                <Text>RG: {item.rg}</Text>
              </Center>
            </GridItem>

            <GridItem>
              <Center>
                <IconButton
                  aria-label="Call Sage"
                  fontSize="20px"
                  icon={<FaFacebook />}
                />
              </Center>
            </GridItem>

            <GridItem>
              <Center>
                <IconButton
                  aria-label="Call Sage"
                  fontSize="20px"
                  icon={<FaLinkedin />}
                />
              </Center>
            </GridItem>

            <GridItem>
              <Center>
                <IconButton
                  aria-label="Call Sage"
                  fontSize="20px"
                  icon={<FaInstagram />}
                />
              </Center>
            </GridItem>

            <GridItem>
              <Center>
                <IconButton
                  aria-label="Call Sage"
                  fontSize="20px"
                  icon={<FaTwitter />}
                />
              </Center>
            </GridItem>

            <GridItem colSpan="4" rowSpan="2">
              <Center>
                <Button
                  width="100%"
                  mb="-14"
                  onClick={() => {
                    showText(item.id)
                  }}
                >
                  {collapses.get(item.id).text.value}
                </Button>
              </Center>
            </GridItem>

            <GridItem colSpan="4" rowSpan="0">
              <Collapse
                in={collapses.get(item.id).collapse.isOpen}
                animateOpacity
                initialScale={0.9}
              >
                <HStack
                  width="100%"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    width="100%"
                    p="40px"
                    color="white"
                    mt="0"
                    bg="teal.500"
                    rounded="md"
                    shadow="md"
                  >
                    <Text fontSize="2xl">Addresses:</Text>
                    <Grid
                      key={`grid-addresses-${item.id}`}
                      templateColumns="repeat(4, 1fr)"
                      gap={2}
                    >
                      {item.addresses.map((address) => (
                        <GridItem key={`grid-item-address-${address.id}`}>
                          <>
                            <Text key={`cep-${address.id}`}>
                              CEP: {address.cep}
                            </Text>
                            <Text key={`state-${address.id}`}>
                              State: {address.state}
                            </Text>
                            <Text key={`city-${address.id}`}>
                              City: {address.city}
                            </Text>
                            <Text key={`neighborhood-${address.id}`}>
                              Neighborhood: {address.neighborhood}
                            </Text>
                            <Text key={`complement-${address.id}`}>
                              Complement: {address.complement}
                            </Text>
                          </>
                        </GridItem>
                      ))}
                    </Grid>
                  </Box>
                  <Box
                    width="100%"
                    p="40px"
                    color="white"
                    mt="-1"
                    bg="teal.500"
                    rounded="md"
                    shadow="md"
                  >
                    <Text fontSize="2xl">Telphones:</Text>
                    <Grid
                      key={`grid-telphones-${item.id}`}
                      templateColumns="repeat(3, 1fr)"
                      gap={1}
                    >
                      {item.telphones.map((telphone) => (
                        <GridItem key={`grid-item-telphone-${telphone.id}`}>
                          <>
                            <Text key={`number-${telphone.id}`}>
                              Number: {telphone.number}
                            </Text>
                            <Text key={`type-${telphone.id}`}>
                              Type: {telphone.type}
                            </Text>
                          </>
                        </GridItem>
                      ))}
                    </Grid>
                  </Box>
                </HStack>
                <hr />
              </Collapse>
            </GridItem>
          </Grid>
        </GridItem>
      ))}
    </Grid>
  )
}
