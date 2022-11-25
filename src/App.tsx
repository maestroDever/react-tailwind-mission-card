import React from 'react'

import PayloadCard from 'components/PayloadCard'
import missionData from 'dataset/missions.json'

function App() {
  const { data } = missionData

  return (
    <div className="flex items-center justify-center min-h-screen mx-10 ">
      <PayloadCard heading="Total Payload Per Mission" dataset={data} />
    </div>
  )
}

export default App
