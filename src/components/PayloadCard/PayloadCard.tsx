import { useState } from 'react'

import { Doughnut } from 'components/Chart'
import Dropdown from 'components/Dropdown'
import LegendTable from 'components/Table'

import { Props as PayloadCardProps, ALL_NATIONS } from './types'
import { usePayloadData } from './usePayloadData'

export const PayloadCard: React.FC<PayloadCardProps> = ({
  heading,
  dataset,
}) => {
  const [countryOption, setCountryOption] = useState(ALL_NATIONS)

  const { chartData, countryNames } = usePayloadData(dataset, countryOption)

  return (
    <div className="bg-white w-full max-w-[550px]">
      <div className="flex items-center justify-between mx-6 my-4 rounded-t-lg">
        <p className="text-sm font-bold line-clamp-1 md:text-xl text-dark-jungle-green">
          {heading}
        </p>
        <Dropdown
          options={[ALL_NATIONS, ...countryNames]}
          value={countryOption}
          onChange={setCountryOption}
        />
      </div>

      <div className="w-full h-1 bg-gray-50" />

      <div className="flex flex-col items-center m-6 space-x-8 space-y-8 rounded-b-lg md:flex-row md:space-y-0">
        <Doughnut chartData={chartData} />
        <LegendTable data={chartData} />
      </div>
    </div>
  )
}
