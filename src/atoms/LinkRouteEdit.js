import RouteIconButton from './RouteIconButton.js'
import { FaEdit } from 'react-icons/fa'

export default function LinkRouteEdit ({
  title,
  data,
  size,
  fontSize
}) {
  return (
    <RouteIconButton
      href={`/edit_${title}`}
      data={data}
      fontSize={fontSize}
      icon={<FaEdit />}
      colorScheme="orange"
      size={size}
    />
  )
}
