import React from "react";
import styled from '@emotion/styled';

const Container = styled.div`

    // для любого компонета для уровня вложенности 1
    & > * {
        width: 350px;
        flex: 1; // размер относительно родителя 
        margin: 0 auto;
        display: block;
    }
`;

export default Container;
