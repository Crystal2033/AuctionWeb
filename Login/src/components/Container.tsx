import React from "react";
import styled from '@emotion/styled';

const Container = styled.div`

    // для любого компонета для уровня вложенности 1
    & > * {
        //width: 0px;
        width: 20%; // Должно же быть так?
        flex: 1; // размер относительно родителя 
        margin: 5% auto; // середина 
        display: block;
        color: darkslategray;
    }
`;

export default Container;
