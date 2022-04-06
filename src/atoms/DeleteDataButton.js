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
  LightMode
} from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
// import deleteData from '../api/deleteData'

export default function DeleteDataButton ({
  setValue,
  title,
  toast,
  size,
  data,
  fontSize
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const prefix = data.client_id ? `${data.client_id}/` : ''
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
                  console.log(`${prefix}${title}/${data.id}`)
                  // const result = await deleteData(
                  //   `${model}/${data.id}`,
                  //   toast,
                  //   `${model}s`,
                  //   'Item was successfully deleted".'
                  // )
                  // setValue(result)
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
