import React, {useEffect, useState} from 'react';
import './login.css'; // CSS 파일을 별도로 생성하여 스타일을 적용할 수 있습니다.
import logo from './logo.png';
import testapi from './api/test/TestApi'; 

const Login = () => {

  const [data, setData] = useState({});
  useEffect(()=>{
    const res =  testapi.getServerStatus();
    console.log(res);
  });

  return (
    <>
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="로고" />
      </div>
      <h1>로그인</h1>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" placeholder="아이디를 입력하세요" />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
    </>
  );
};

export default Login;