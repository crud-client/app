import {
  LightMode,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton
} from '@chakra-ui/react'

export default function RenderToast ({
  id,
  onClose,
  status,
  title,
  description
}) {
  const alertTitleId =
    typeof id !== 'undefined' ? `toast-${id}-title` : undefined

  return (
    <LightMode>
      <Alert
        id={id}
        status={status}
        variant="solid"
        alignItems="start"
        borderRadius="md"
        boxShadow="lg"
        paddingEnd={8}
        textAlign="start"
        width="auto"
        aria-labelledby={alertTitleId}
      >
        <AlertIcon />
        <div style={{ flex: 1, maxWidth: '100%' }}>
          <AlertTitle id={alertTitleId}>{title}</AlertTitle>
          <AlertDescription display="block">{description}</AlertDescription>
        </div>
        <CloseButton
          size="sm"
          onClick={onClose}
          position="absolute"
          insetEnd={1}
          top={1}
        />
      </Alert>
    </LightMode>
  )
}
