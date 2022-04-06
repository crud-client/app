import { Stack, LightMode } from '@chakra-ui/react'

import LinkRouteEdit from '../atoms/LinkRouteEdit.js'
import DeleteDataButton from '../atoms/DeleteDataButton.js'

export default function StackEditRemoveButtons ({
  ml,
  size = 'sm',
  setValue,
  title,
  toast,
  data
}) {
  const keyName = title.toLowerCase()
  const fontSize = size === 'sm' ? '20px' : '15px'

  return (
    <LightMode>
      <Stack ml={ml} mt={1} position="absolute">
        <DeleteDataButton
          size={size}
          title={title}
          data={data}
          toast={toast}
          setValue={setValue}
          fontSize={fontSize}
        />
        <LinkRouteEdit
          fontSize={fontSize}
          title={keyName}
          data={{ [keyName]: data }}
          size={size}
        />
      </Stack>
    </LightMode>
  )
}
