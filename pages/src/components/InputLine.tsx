import styled from '@emotion/styled'
import React from 'react'

const BaseInput = styled.input`
    box-sizing: border-box;
    font-family: sans-serif;
    height: 60px;
    border-radius: 10px 10px 0 0;
    font-size: 32px;
    //text-align: center;
    background-color: black;
    padding-left: 20px;
    color: white;
    border: 1px solid #333;
    outline: none;
    letter-spacing: .03em;
    ::-ms-reveal {
  filter: invert(60%);
    }
  ::-webkit-input-placeholder {
   text-align: center;
}

:-moz-placeholder { 
   text-align: center;
}

::-moz-placeholder {  
   text-align: center;
}

:-ms-input-placeholder {
   text-align: center; 
}

`

type Props = {
    dataType?: string;
    placeholder?: string;
    onChange: (value: string) => void; //Функция будет вызываться, когда у нас меняется значение.
    className?: string;
}

const InputLine = ({ placeholder, dataType, className, onChange }: Props) => {

    return (
        <BaseInput className={className} onChange={(ev: any) => {
            onChange(ev.target.value)
        }} placeholder={placeholder} type={dataType} ></BaseInput>
    )
}


export default InputLine