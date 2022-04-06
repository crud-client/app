import { GridItem } from '@chakra-ui/react'
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import ExternalLinkIconButton from '../../atoms/ExternalLinkIconButton'

export default function IconsRow ({ item }) {
  return (
    <>
      {item.facebook && (
        <GridItem>
          <ExternalLinkIconButton
            href={item.facebook}
            ariaLabel={'facebook'}
            icon={<FaFacebook />}
          />
        </GridItem>
      )}

      {item.linkedin && (
        <GridItem>
          <ExternalLinkIconButton
            href={item.linkedin}
            ariaLabel={'linkedin'}
            icon={<FaLinkedin />}
          />
        </GridItem>
      )}

      {item.instagram && (
        <GridItem>
          <ExternalLinkIconButton
            href={item.instagram}
            ariaLabel={'instagram'}
            icon={<FaInstagram />}
          />
        </GridItem>
      )}

      {item.twitter && (
        <GridItem>
          <ExternalLinkIconButton
            href={item.twitter}
            ariaLabel={'twitter'}
            icon={<FaTwitter />}
          />
        </GridItem>
      )}
    </>
  )
}
