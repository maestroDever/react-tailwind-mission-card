import classNames from 'classnames'

import { IconDown } from 'components/Icons'

import { useSort } from './useSort'
import { Props, SortDir, tableHeaders } from './types'

export const LegendTable = ({ data }: Props) => {
  const { sortInfo, parsedData, handleSort } = useSort(data)

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col overflow-y-auto max-h-56">
        <div className="flex mb-4">
          {tableHeaders.map((header) => (
            <div
              key={header.accessor}
              className="flex items-center flex-1 text-xs font-bold uppercase cursor-pointer text-charcoal"
              onClick={() => handleSort(header.accessor)}
            >
              <span className="mr-1">{header.label}</span>
              {header.accessor === sortInfo.column &&
                sortInfo.dir !== SortDir.NEUTRAL && (
                  <IconDown
                    className={classNames({
                      'rotate-180': sortInfo.dir === SortDir.ASC,
                    })}
                  />
                )}
            </div>
          ))}
        </div>
        {parsedData.map((column, index) => (
          <div key={column.name}>
            <div className="flex">
              <div className="flex items-center flex-1 space-x-2">
                <div
                  className="w-[6px] h-[6px] rounded-full text-sm"
                  style={{ backgroundColor: column.color }}
                />
                <div className="text-sm text-dark-jungle-green line-clamp-1">
                  {column.name}
                </div>
              </div>
              <div className="flex-1 text-sm text-gray-500">
                {new Intl.NumberFormat().format(column.payload)} KG
              </div>
            </div>
            {index !== parsedData.length - 1 && (
              <div className="my-2 bg-ghost-white h-[2px] w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
