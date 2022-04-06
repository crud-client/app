import {
  Grid,
  GridItem,
  Text,
  Center,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer
} from '@chakra-ui/react'
import StackEditRemoveButtons from './StackEditRemoveButtons.js'

export default function Tables ({ item, title }) {
  const fields = {
    Telphones: ['Number', 'Type'],
    Addresses: ['CEP', 'State', 'City', 'Neighborhood', 'Complement']
  }

  const singularTitle = {
    Addresses: 'Address',
    Telphones: 'Telphone'
  }

  if (item[title.toLowerCase()].length) {
    return (
      <Grid
        key={`grid-${title}-${item.id}`}
        templateColumns="repeat(1, 1fr)"
        gap={8}
        pt={5}
      >
        {item[title.toLowerCase()].map((i) => (
          <GridItem key={`grid-item-${title}-${i.id}`}>
            <TableContainer
              rounded="md"
              shadow="md"
              bg="#B9FAF8"
              color="gray.800"
            >
              <StackEditRemoveButtons
                data={i}
                ml={353}
                title={singularTitle[title]}
                size="xs"
              />

              <Table size="sm" variant="unstyled">
                <Tbody>
                  {fields[title].map((field) => (
                    <Tr key={`${title}-row-${field}`}>
                      <Td>
                        <b>{field}</b>
                      </Td>
                      <Td>{i[field.toLowerCase()]}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </GridItem>
        ))}
      </Grid>
    )
  }

  return (
    <Center>
      <Text>No results found</Text>
    </Center>
  )
}
