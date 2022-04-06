import EmptyRow from '../../molecules/SocialIcons/EmptyRow.js'
import IconsRow from '../../molecules/SocialIcons/IconsRow.js'

export default function SocialIconsRow ({ item }) {
  return (
    <>
      <IconsRow item={item} />
      <EmptyRow item={item} />
    </>
  )
}
