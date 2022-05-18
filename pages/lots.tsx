import styled from "@emotion/styled";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import { useLayoutEffect, useState } from "react";
import {Lot} from "./src/types/types";
import CardLot from "./src/components/CardLot";

const Container = styled.div``;

const mockGetLots = () =>
  new Promise<ReadonlyArray<Lot>>((resolve, reject) => {
    resolve([{ name: "Сапог левый", price: 100, step: 10 }]);
  });

const Lots: NextPage = () => {
  const [lots, setLots] = useState<ReadonlyArray<Lot>>([]);

  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    mockGetLots().then((data) => {
      setLots([...data, ...lots]);
    });
  }, []);

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