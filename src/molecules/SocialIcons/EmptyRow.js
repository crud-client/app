import { Box, GridItem } from '@chakra-ui/react'

export default function EmptyRow ({ item }) {
  return (
    <>
      {!(item.facebook || item.linkedin || item.instagram || item.twitter) && (
        <GridItem colSpan="4">
          <Box h="40px"></Box>
        </GridItem>
      )}
    </>
  )
}
