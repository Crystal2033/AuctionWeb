import React, { useState } from "react";
import Input from "./Input";

type LoginInfo = {
  name?: string;
  pass?: string;
};

const LoginForm = () => {
  const [loginData, setLoginData] = useState<LoginInfo>({});

  return (
    <div>
      <h4>Логин</h4>
      <Input
        onChange={(value) => {
          setLoginData({ name: value, pass: loginData.pass });
        }}
      />
      <h4>Пароль</h4>
      <Input
        onChange={(value) => {
          setLoginData({ name: loginData.name, pass: value });
        }}
      />
      <button className="btn"
        onClick={() => {
          console.log(loginData);
        }}
      >
        Зарегистрироваться
      </button>
    </div>
  );
};

export default LoginForm;