import { Cell, Pie, PieChart, Tooltip } from 'recharts'

import { PayloadTooltip } from './Tooltip'

type Props = {
  chartData: {
    name: string
    payload: number
    color: string
  }[]
  size?: number
}

export const Doughnut = ({ chartData, size = 150 }: Props) => {
  return (
    <PieChart width={size} height={size}>
      <Pie
        data={chartData}
        innerRadius={70}
        outerRadius={75}
        paddingAngle={chartData.length === 1 ? 0 : 5}
        dataKey="payload"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip
        content={<PayloadTooltip />}
        wrapperStyle={{ background: '#fffa' }}
      />
    </PieChart>
  )
}
