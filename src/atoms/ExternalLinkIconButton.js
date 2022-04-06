import {
  Center,
  LightMode,
  IconButton,
  Link
} from '@chakra-ui/react'

export default function ExternalLinkIconButton ({ href, ariaLabel, icon }) {
  return (
    <Center>
    <LightMode>
      <Link href={href} isExternal>
        <IconButton
          aria-label={`external-icon-button-${ariaLabel}`}
          fontSize="20px"
          colorScheme="blue"
          icon={icon}
        />
      </Link>
    </LightMode>
  </Center>
  )
}
