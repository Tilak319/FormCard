import React from 'react'
import { Typography,Icon } from '@telus-uds/ds-allium'
import { Users } from '@telus-uds/palette-allium/build/web/icons'

export default function IconTelus() {  
  const icons = [{ 
    id:1,
    iconName: 'Speed'
   },
   { 
    id:2,
    iconName:' DataLimit'
   },
   { 
    id:3,
    iconName: 'Devices'
   }
  ]
  return (
    <Typography 
    >
     <Icon icon={Users} accessibilityLabel="Works on Web" />     
          </Typography>
  )
}
