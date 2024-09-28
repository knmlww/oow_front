import axios from 'axios'

// Axios 인스턴스 생성
const instance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api`,
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
  });


  // 응답 인터셉터
instance.interceptors.response.use(
  res => {
    console.log('📍 response -> ', res);
    return res;
  },
  async err => {
    if (axios.isAxiosError(err)) {
      const status = err.response?.status;

      // 임시 코드
      if (status === 400) {
        console.log('데이터가 존재하지 않아요!');
      }
      if (status === 404) {
        console.log('잘못된 값을 넣었어요!');
      }
    }
    return Promise.reject(err);
  },
)

export default instance;

  