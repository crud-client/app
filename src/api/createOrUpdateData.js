import axios from 'axios'
import RenderToast from './RenderToast'
import { baseUrl } from '../utils'

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}

const createData = async (
  request,
  body,
  toast,
  title,
  description,
  put = true
) => {
  const confirmation = put ? 'updated' : 'created'
  return axios({
    method: put ? 'put' : 'post',
    url: `${baseUrl}/${request}`,
    data: body,
    config
  })
    .then((res) => {
      toast({
        render: ({ id, onClose }) =>
          RenderToast({
            id,
            onClose,
            title: `${title} ${confirmation}.`,
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
            title: `${title} not ${confirmation}.`,
            description: `${err.response.status} Status code.`,
            status: 'error'
          }),
        duration: 2500,
        isClosable: true
      })
      return []
    })
}

export default createData
