export type Row = {
  name: string
  payload: number
  color: string
}

export type Props = {
  data: Row[]
}

export enum SortDir {
  NEUTRAL = 0,
  DESC = 1,
  ASC = 2,
}

export type SortInfo = {
  column: keyof Row
  dir: SortDir
}

export type TableHeader = {
  accessor: keyof Row
  label: string
}

export const tableHeaders: TableHeader[] = [
  {
    accessor: 'name',
    label: 'Mission',
  },
  {
    accessor: 'payload',
    label: 'TPM',
  },
]
