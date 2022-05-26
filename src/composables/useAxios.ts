import axios from 'axios'

export default () => {
  const axiosInstance = () => {
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        Autorization: import.meta.env.VITE_NGTV_ACESS_TOKEN,
      },
    })
  }

  return {
    axiosInstance,
  }
}
