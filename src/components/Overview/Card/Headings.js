import React from 'react'
import { ChevronLink, Typography, Box, Divider, StackView, Spacer } from '@telus-uds/ds-allium';
import Edit from './Edit';
import {useLocation} from 'react-router-dom';

export default function Headings(props) {
  const location = useLocation();
  return (
    <>
    <Spacer space={6}/>
      <ChevronLink
        direction="left"
        variant={{ size: "large", alternative: true }}
        tokens={{
          iconSpace: 1,
          iconSize: 20
        }}
      >
        Back to Address availability
      </ChevronLink>
      <Box vertical={2}>
        <Typography
          block
          variant={{ size: "h1" }}
          heading="h1"
          gap={14}
        >Great news {location.state.username}, your current plan is available in your new area. </Typography>
        <Box vertical={2}>
          <Typography variant={{ size: "large" }}>
            You’ll be able to connect to the TELUS PureFibre® network with
            your new address.
          </Typography>
        </Box>
        <Divider
          tokens={{
            color: "#b2b9bf",
          }}
        />
      </Box>
      <Box>
        <Typography
          block
          variant={{ alternative: true, bold: true }}
          tokens={{
            fontSize: 24,
          }}
        >
        <b>Your internet plan overview</b>
        </Typography>
        <StackView direction="row" space={2}>
          <Typography
            tokens={{
              fontSize: 21,
            }}
          >{props.address}</Typography>
          <Edit />
        </StackView>
      </Box>
    </>


  )
}
