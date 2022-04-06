import axios from 'axios'
import RenderToast from './RenderToast'
import { baseUrl } from '../utils'

const deleteData = async (request, toast, title, description) => {
  return axios
    .delete(`${baseUrl}/${request}`, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
    .then((res) => {
      toast({
        render: ({ id, onClose }) =>
          RenderToast({
            id,
            onClose,
            title: `${title} deleted.`,
            description,
            status: 'success'
          }),
        duration: 2500,
        isClosable: true
      })
      return res.data
    })
    .catch((err) => {
      console.log(err)
      toast({
        render: ({ id, onClose }) =>
          RenderToast({
            id,
            onClose,
            title: `${title} not deleted.`,
            description: `${err.response.status} Status code.`,
            status: 'error'
          }),
        duration: 2500,
        isClosable: true
      })
      return []
    })
}

export default deleteData
