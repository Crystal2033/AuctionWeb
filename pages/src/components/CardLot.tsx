import styled from "@emotion/styled";
import { Button, Card, Paper } from "@mui/material";
import React from "react";
import { Lot } from "../types/types";

type Props = {
  data: Lot;
};

const LotPhoto = styled.img`
  height: 100px;
`;

const CardLot = ({ data }: Props) => {
  return (
    <Card>
      <Paper variant="outlined" square>
        {data.name}
      </Paper>

      <Button onClick={() => alert(data.name)}>Купить</Button>
    </Card>
  );
};

export default CardLot;