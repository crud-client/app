import {
  GridItem,
  Collapse,
  HStack
} from '@chakra-ui/react'
import ModelTables from './ModelTables'

export default function ExpandedInfo ({ collapses, item }) {
  return (
    <GridItem colSpan="4">
      <Collapse
        in={collapses.get(item.id).collapse.isOpen}
        animateOpacity
        initialScale={0.9}
      >
        <HStack
          w="full"
          height="100%"
          justifyContent="space-between"
          alignItems="top"
          bg="blue.700"
        >
          <ModelTables item={item} model="address" title="Addresses" numCols={1} />
          <ModelTables item={item} model="telphone" title="Telphones" numCols={2} />
        </HStack>
      </Collapse>
    </GridItem>
  )
}
