import React, { useState } from "react";
import Button from "./Button";
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
      <Button
        onClick={() => {
          console.log(loginData);
        }}
      >
        OK
      </Button>
    </div>
  );
};

export default LoginForm;