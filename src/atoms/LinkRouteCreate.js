import RouteIconButton from './RouteIconButton.js'
import { FaPlusCircle } from 'react-icons/fa'

export default function LinkRouteCreate ({
  model,
  data
}) {
  return (
    <RouteIconButton
      href={`/create_${model}`}
      data={data}
      ariaLabel={`create-${model}`}
      icon={<FaPlusCircle />}
    />
  )
}
