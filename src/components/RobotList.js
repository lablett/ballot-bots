import React from 'react'

import Robot from './Robot'

import robots from '../data/bots'

function RobotList() {
  return (
    <div className="robot-list">
      {robots.map(function(robotInfo) {
        return <Robot robotInfo={robotInfo} />
      })}
    </div>
  )
}

export default RobotList
