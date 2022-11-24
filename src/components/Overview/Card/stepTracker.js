import React, { Fragment } from 'react'
import { StepTracker } from '@telus-uds/ds-allium'

export default function Tracker() {
  return (
   
    <StepTracker
      tokens={{
        showStepName: false,
        labelFontSize: '16px', labelDirection: 'row', labelFontWeight: '200'
        
      }}
      current={0}
      steps={[
        "Check new address",
        "TELUS home services",
        "Equipment",
        "Installation appointment",
        "Review and submit",
      ]}
    />
    
  )
}
