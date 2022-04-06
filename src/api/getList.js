import axios from 'axios'
import RenderToast from './RenderToast'
import { baseUrl } from '../utils'

const getList = async (request, title, toast) => {
  return axios
    .get(`${baseUrl}/${request}`, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
    .then((res) => {
      toast({
        render: ({ id, onClose }) =>
          RenderToast({
            id,
            onClose,
            title: `${title} list loaded.`,
            description: `Environment ${title} loaded.`,
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
            title: `${title} list not loaded.`,
            description: `${err.response.status} Status code.`,
            status: 'error'
          }),
        duration: 2500,
        isClosable: true
      })
      return []
    })
}

export default getList
