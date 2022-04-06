import { GridItem, Center, Button } from '@chakra-ui/react'

export default function ButtonExpandCollapse ({ showText, collapses, item }) {
  return (
    <GridItem colSpan="4" rowSpan="2">
      <Center>
        <Button
          w="full"
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
  )
}
