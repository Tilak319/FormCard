import React from 'react'
import { Typography, Card, Spacer, Box, Button, Divider } from '@telus-uds/ds-allium'
import PlanDetails from './PlanDetails';
import PlanHeading from './PlanHeading';

export default function PlanCard(props, loaddata) {
  return (
    <Card
      tokens={{
        borderColor: 'rgb(43, 128, 0)',
        borderWidth: '2px',
        paddingBottom: '1rem',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        paddingTop: '1rem',
        maxWidth: '3rem'
      }}
    >
      <Typography
        tokens={{
          fontSize: 16,
          lineheight: 24

        }}
        block
        variant={{ size: "h3" }}
      >
        Internet
      </Typography>
      <Box vertical={2}>

        <Box>
          <PlanHeading price='120' period='/month' plan='TELUS INTERNET 300/300' />
          <Divider />
          <Spacer space={3} />

          <PlanDetails />
          <Box top={4}>
            <Button variant={{ priority: "high", width: "full" }} tokens={{
              fontWeight: 500
            }}>
              Keep my current plan
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

