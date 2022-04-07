import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  IconButton,
  LightMode,
  useToast
} from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import deleteData from '../api/deleteData'

export default function DeleteDataButton ({
  title,
  size,
  data,
  fontSize
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const prefix = data?.clientID ? `${data.clientID}/` : ''

  return (
    <>
      <IconButton
        colorScheme="red"
        aria-label={`delete-${title}`}
        fontSize={fontSize}
        size={size}
        icon={<FaTrash />}
        onClick={onOpen}
      />
      <LightMode>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete {title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Confirm deletion?</ModalBody>

            <ModalFooter>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>

              <Button
                colorScheme="red"
                mr={3}
                onClick={async () => {
                  await deleteData(
                    `${prefix}${title}/${data.id}`,
                    toast,
                    `${title}s`,
                    'Item was successfully deleted".'
                  )
                  window.location.reload()
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </LightMode>
    </>
  )
}
