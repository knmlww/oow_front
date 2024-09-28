import axios from 'axios'

// Axios 인스턴스 생성
const instance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api`,
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
  });


export default instance;

  