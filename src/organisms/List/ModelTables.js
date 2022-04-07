import { Grid, Text, Box, HStack } from '@chakra-ui/react'
import Tables from '../../molecules/Tables.js'
import LinkRouteCreate from '../../atoms/LinkRouteCreate'

export default function ModelTables ({ model, item, title }) {
  return (
    <Box w="full" p="20px" px="70px" color="white" alignItems="top">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Text w="full" pb={1} fontSize="2xl" mt={-3}>
          {title}:
        </Text>
        <LinkRouteCreate
          model={model}
          data={{ [model]: { clientID: item.id } }}
        />
      </HStack>
      <hr />
      <Grid
        key={`grid-${title}-${item.id}`}
        templateColumns="repeat(1, 1fr)"
        gap={8}
      >
        <Tables item={item} title={title} />
      </Grid>
    </Box>
  )
}
