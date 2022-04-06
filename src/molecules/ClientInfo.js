import { GridItem, Center, Text } from '@chakra-ui/react'

export default function ButtonExpandCollapse ({ item }) {
  return (
    <>
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
    </>
  )
}
