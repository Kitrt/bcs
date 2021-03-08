import axios from 'axios'

export const getListByCategory = () => {
  return axios.get(`https://${process.env.REACT_APP_DOMAIN}/express_articles/v1`)
}