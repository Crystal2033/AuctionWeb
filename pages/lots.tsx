import styled from "@emotion/styled";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import { useLayoutEffect, useState } from "react";
import {Lot} from "./src/types/types";
import CardLot from "./src/components/CardLot";
import { getLots } from "./src/api/mainApi";
import { debug } from "console";

const Container = styled.div``;

// const mockGetLots = () =>
//   new Promise<ReadonlyArray<Lot>>((resolve, reject) => {
//     resolve([{ name: "Сапог левый", price: 100, step: 10 },
//     { name: "Сапог правый", price: 100, step: 10 }]);
//   });



const Lots: NextPage = () => {
  const [lots, setLots] = useState<Array<Lot>>([]);
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    getLots().then((data) => {
      //debugger;
      console.log(data);
      setLots(data.data);
    });
  }, [count]);

  return (
    <Container>
      {lots.map((lot) => (
        <CardLot key={lot.name} data={lot} />
      ))}

      <Button onClick={() => setCount(count + 1)}>click</Button>
      <div>{count}</div>
    </Container>
  );
};

export default Lots;