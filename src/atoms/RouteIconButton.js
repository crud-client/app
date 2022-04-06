import { IconButton, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

export default function RouteIconButton ({
  href,
  ariaLabel,
  icon,
  data,
  colorScheme = 'teal',
  size,
  fontSize
}) {
  return (
    <Link as={ReactLink} to={href} state={data}>
      <IconButton
        colorScheme={colorScheme}
        aria-label={ariaLabel}
        fontSize={fontSize}
        icon={icon}
        size={size}
      />
    </Link>
  )
}
