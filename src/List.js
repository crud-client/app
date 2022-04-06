import {
  Grid,
  GridItem,
  Text,
  Button,
  Center,
  Collapse,
  Box,
  IconButton,
  useDisclosure,
  HStack,
  Stack,
  LightMode,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Link
} from '@chakra-ui/react'
import {
  FaEdit,
  FaTrash,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'
import { Link as ReactLink } from 'react-router-dom'
import data from './ListData.json'
import { useState } from 'react'

export default function List ({ input }) {
  const collapses = new Map()
  for (let i = 0; i < data.length; i++) {
    const { isOpen, onToggle } = useDisclosure()
    const [span, setSpan] = useState(1)
    const [text, setText] = useState('Expand Info')
    const [hovering, setHovering] = useState(false)
    const [buttonsMargin, setButtonsMargin] = useState(299)

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
      },
      btnMargin: {
        value: buttonsMargin,
        setValue: setButtonsMargin
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

    const toggledButtonMargin =
      collapses.get(id).btnMargin.value === 299 ? 1014 : 299
    collapses.get(id).btnMargin.setValue(toggledButtonMargin)
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
          <Grid templateColumns="repeat(4, 1fr)">
            {collapses.get(item.id).hovering.value && (
              <GridItem colStart="4" position="absolute">
                <LightMode>
                  <Stack ml={collapses.get(item.id).btnMargin.value} mt={1}>
                    <IconButton
                      colorScheme="red"
                      aria-label="Call Sage"
                      fontSize="20px"
                      size="sm"
                      icon={<FaTrash />}
                    />
                    <Link as={ReactLink} to="/edit" state={{ client: item }}>
                      <IconButton
                        colorScheme="orange"
                        aria-label="Call Sage"
                        fontSize="20px"
                        size="sm"
                        icon={<FaEdit />}
                      />
                    </Link>
                  </Stack>
                </LightMode>
              </GridItem>
            )}
            <GridItem colSpan="4">
              <Center>
                <Text color="white" fontSize={'3xl'} height="60px" mt="5">
                  {item.name}
                </Text>
              </Center>
            </GridItem>
            <GridItem colSpan="2">
              <Center>
                <Text color="white">
                  <b>CPF:</b> {item.cpf}
                </Text>
              </Center>
            </GridItem>
            <GridItem colSpan="2">
              <Center>
                <Text color="white">
                  <b>RG:</b> {item.rg}
                </Text>
              </Center>
            </GridItem>
            {item.facebook && (
              <GridItem>
                <Center>
                  <LightMode>
                    <Link href={item.facebook} isExternal>
                      <IconButton
                        aria-label="Call Sage"
                        fontSize="20px"
                        colorScheme="blue"
                        icon={<FaFacebook />}
                      />
                    </Link>
                  </LightMode>
                </Center>
              </GridItem>
            )}{' '}
            {item.linkedin && (
              <GridItem>
                <Center>
                  <LightMode>
                    <Link href={item.linkedin} isExternal>
                      <IconButton
                        aria-label="Call Sage"
                        fontSize="20px"
                        colorScheme="blue"
                        icon={<FaLinkedin />}
                      />
                    </Link>
                  </LightMode>
                </Center>
              </GridItem>
            )}{' '}
            {item.instagram && (
              <GridItem>
                <Center>
                  <LightMode>
                    <Link href={item.instagram} isExternal>
                      <IconButton
                        aria-label="Call Sage"
                        fontSize="20px"
                        colorScheme="blue"
                        icon={<FaInstagram />}
                      />
                    </Link>
                  </LightMode>
                </Center>
              </GridItem>
            )}
            {item.twitter && (
              <GridItem>
                <Center>
                  <LightMode>
                    <Link href={item.twitter} isExternal>
                      <IconButton
                        aria-label="Call Sage"
                        fontSize="20px"
                        colorScheme="blue"
                        icon={<FaTwitter />}
                      />
                    </Link>
                  </LightMode>
                </Center>
              </GridItem>
            )}
            {!(
              item.facebook ||
              item.linkedin ||
              item.instagram ||
              item.twitter
            ) && (
              <GridItem colSpan="4">
                <Box h="40px"></Box>
              </GridItem>
            )}
            <GridItem colSpan="4">
              <Collapse
                in={collapses.get(item.id).collapse.isOpen}
                animateOpacity
                initialScale={0.9}
              >
                <HStack
                  width="100%"
                  height="100%"
                  justifyContent="space-between"
                  alignItems="top"
                  bg="blue.700"
                >
                  <Box
                    width="100%"
                    p="20px"
                    px="70px"
                    color="white"
                    alignItems="top"
                  >
                    <Text pb={1} fontSize="2xl" mt={-3}>
                      Addresses:
                    </Text>
                    <hr />
                    <Grid
                      key={`grid-addresses-${item.id}`}
                      templateColumns="repeat(1, 1fr)"
                      gap={8}
                      pt={5}
                    >
                      {item.addresses.map((address) => (
                        <GridItem key={`grid-item-address-${address.id}`}>
                          <TableContainer
                            rounded="md"
                            shadow="md"
                            bg="#B9FAF8"
                            color="gray.800"
                          >
                          <LightMode>
                            <Stack ml={360} mt={1} position="absolute">
                          <IconButton
                            colorScheme="red"
                            aria-label="Call Sage"
                            fontSize="15px"
                            size="xs"
                            icon={<FaTrash />}
                          />
                          <Link as={ReactLink} to="/edit" state={{ client: item }}>
                            <IconButton
                              colorScheme="orange"
                              aria-label="Call Sage"
                              fontSize="15px"
                              size="xs"
                              icon={<FaEdit />}
                            />
                          </Link>
                        </Stack>
                      </LightMode>
                            <Table size="sm" variant="unstyled">
                              <Tbody>
                                <Tr>
                                  <Td>
                                    <b>CEP</b>
                                  </Td>
                                  <Td>{address.cep}</Td>
                                </Tr>
                                <Tr>
                                  <Td>
                                    <b>State</b>
                                  </Td>
                                  <Td>{address.state}</Td>
                                </Tr>
                                <Tr>
                                  <Td>
                                    <b>City</b>
                                  </Td>
                                  <Td>{address.city}</Td>
                                </Tr>
                                <Tr>
                                  <Td>
                                    <b>Neighborhood</b>
                                  </Td>
                                  <Td>{address.neighborhood}</Td>
                                </Tr>
                                <Tr>
                                  <Td>
                                    <b>Complement</b>
                                  </Td>
                                  <Td>{address.complement}</Td>
                                </Tr>
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </GridItem>
                      ))}
                    </Grid>
                  </Box>
                  <Box width="100%" p="20px" pr="70px" color="white">
                    <Text pb={1} fontSize="2xl" mt={-3}>
                      Telphones:
                    </Text>
                    <hr />
                    <Grid
                      pt={5}
                      key={`grid-telphones-${item.id}`}
                      templateColumns="repeat(2, 1fr)"
                      gap={8}
                    >
                      {item.telphones.map((telphone) => (
                        <GridItem key={`grid-item-telphone-${telphone.id}`}>
                          <TableContainer
                            rounded="md"
                            shadow="md"
                            bg="#B9FAF8"
                            color="gray.800"
                          >
                            <Table size="sm" variant="unstyled">
                              <Tbody>
                                <Tr>
                                  <Td>
                                    <b>Number</b>
                                  </Td>
                                  <Td>{telphone.number}</Td>
                                </Tr>
                                <Tr>
                                  <Td>
                                    <b>Type</b>
                                  </Td>
                                  <Td>{telphone.type}</Td>
                                </Tr>
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </GridItem>
                      ))}
                    </Grid>
                  </Box>
                </HStack>
              </Collapse>
            </GridItem>
            <GridItem colSpan="4" rowSpan="2">
              <Center>
                <Button
                  width="100%"
                  // mb="-14"
                  color="gray.800"
                  bg="gray.200"
                  onClick={() => {
                    showText(item.id)
                  }}
                  _hover={{ bg: 'gray.200' }}
                  _active={{
                    bg: 'gray.200',
                    transform: 'scale(0.99)',
                    borderColor: 'gray.300'
                  }}
                  _focus={{
                    boxShadow: '0 0 0 0 pink.300'
                  }}
                >
                  {collapses.get(item.id).text.value}
                </Button>
              </Center>
            </GridItem>
          </Grid>
        </GridItem>
      ))}
    </Grid>
  )
}
