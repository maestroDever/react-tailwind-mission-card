import { Flag, Rocket, Truck } from 'components/Icons'
import { TooltipProps } from 'recharts'

export const PayloadTooltip = ({
  active,
  payload,
}: TooltipProps<'string', 'number'>) => {
  if (active && payload && payload.length) {
    const {
      name,
      value,
      payload: { color },
    } = payload[0]

    return (
      <div className="m-4 space-y-2">
        <div className="flex items-center space-x-2">
          <Rocket />
          <span className="text-sm line-clamp-1">{name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Flag />
          <div
            className="rounded-full w-[6px] h-[6px]"
            style={{ backgroundColor: color }}
          />
        </div>
        {value && (
          <div className="flex items-center space-x-2">
            <Truck />
            <span className="text-sm">
              {new Intl.NumberFormat().format(parseFloat(value))} KG
            </span>
          </div>
        )}
      </div>
    )
  }

  return null
}
