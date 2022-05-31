import axios from 'axios'

export default () => {
  const axiosInstance = () => {
    return axios.create({
      headers: {
        Authorization: import.meta.env.VITE_NGTV_ACCESS_TOKEN,
      },
      baseURL: import.meta.env.VITE_API_URL,
    })
  }

  return {
    axiosInstance,
  }
}
