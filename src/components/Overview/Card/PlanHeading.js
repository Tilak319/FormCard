import React from "react";
import { Typography, PriceLockup, Spacer } from "@telus-uds/ds-allium";

export default function PlanHeading(props) {
  return (
    <>
      <Typography
        tokens={{
          fontSize: 24,
          color: "rgb(65, 69, 71)",
        }}
      >
        <b>{props.plan}</b>
      </Typography>
      <Spacer space={3} />
      <Typography
        tokens={{
          color: "secondary",
        }}
      >
        <PriceLockup price={props.price} rateText="/month" />
      </Typography>
      <Spacer space={1} />
    </>
  );
}
