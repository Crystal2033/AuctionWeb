import React from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input``;

type Props = {
  onChange: (value: string) => void; // функция
};

const Input = ({ onChange }: Props) => {
  return (
    <StyledInput
      onChange={(e: any) => {
        onChange(e.target.value);
      }}
    ></StyledInput>
  );
};

export default Input;


// import { SetStateAction, useState } from 'react';

// type Props = {
//     title?: string;
// };

// const MyControlledInput = ({title}: Props) => {

//     const [value, setValue] = useState('');

//     const onChange = (event: { target: { value: SetStateAction<string>; }; }) => {
//     setValue(event.target.value);
//     };
//     return (
//     <>
//         <div>{title + ":" || "кнопка:"} {value}</div>
//         <input value={value} onChange={onChange} />
//     </>
//     );
// }

// export default MyControlledInput;