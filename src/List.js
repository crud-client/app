import { Grid, GridItem, useDisclosure, Text, Center } from '@chakra-ui/react'
import data from './ListData.json'
import { useState } from 'react'
import SocialIconsRow from './organisms/List/SocialIconsRow'
import ExpandedInfo from './organisms/List/ExpandedInfo'
import StackEditRemoveButtons from './molecules/StackEditRemoveButtons.js'
import ButtonExpandCollapse from './atoms/ButtonExpandCollapse.js'
import ClientInfo from './molecules/ClientInfo.js'

export default function List ({ input }) {
  const collapses = new Map()

  for (let i = 0; i < data.length; i++) {
    const { isOpen, onToggle } = useDisclosure()
    const [span, setSpan] = useState(1)
    const [text, setText] = useState('Expand Info')
    const [buttonsMargin, setButtonsMargin] = useState(49)

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
      return el.name.toLowerCase().includes(input)
    }
  })

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
      collapses.get(id).btnMargin.value === 49 ? 227 : 49
    collapses.get(id).btnMargin.setValue(toggledButtonMargin)
  }

  if (data.length) {
    return (
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {filteredData.map((item) => (
          <GridItem
            rowSpan={collapses.get(item.id).span.value}
            colSpan={collapses.get(item.id).span.value}
            key={item.id}
            rounded="md"
            shadow="md"
            bg="blue.500"
          >
            <Grid templateColumns="repeat(4, 1fr)">
              <GridItem colStart="4">
                <StackEditRemoveButtons
                  data={item}
                  ml={collapses.get(item.id).btnMargin.value}
                  title="Client"
                />
              </GridItem>
              <ClientInfo item={item} />
              <SocialIconsRow item={item} />
              <ExpandedInfo item={item} collapses={collapses} />
              <ButtonExpandCollapse
                item={item}
                collapses={collapses}
                showText={showText}
              />
            </Grid>
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
