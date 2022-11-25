import { useCallback, useMemo, useState } from 'react'

import { SortDir, Row, SortInfo } from './types'

export const useSort = (data: Row[]) => {
  const [sortInfo, setSortInfo] = useState<SortInfo>({
    column: 'payload',
    dir: SortDir.DESC,
  })

  const parsedData = useMemo(() => {
    const { column, dir } = sortInfo
    const unsortedData = [...data]

    if (dir === SortDir.NEUTRAL) return unsortedData

    const sortedData = unsortedData.sort((a, b) => {
      if (column === 'payload')
        return (a.payload - b.payload) * (dir === SortDir.ASC ? 1 : -1)

      if (column === 'name')
        return a.name.localeCompare(b.name) * (dir === SortDir.ASC ? 1 : -1)

      return 0
    })

    return sortedData
  }, [data, sortInfo])

  const handleSort = useCallback(
    (column: keyof Row) => {
      const { column: sortColumn, dir } = sortInfo

      if (column === sortColumn) {
        setSortInfo({ column, dir: (dir + 1) % 3 })
      } else {
        setSortInfo({ column, dir: SortDir.DESC })
      }
    },
    [sortInfo],
  )

  return { parsedData, sortInfo, handleSort }
}
