import React from 'react'
import { Notification } from '@telus-uds/ds-allium';

export default function Notifications(props) {
  return (
    <Notification
      tokens={{
        fontSize: 20,
      }}>
      {props.notify1}
    </Notification>
  )
}
