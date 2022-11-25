export const ALL_NATIONS = 'All Nations'

export type Payload = {
  id: string
  payload_mass_kg: number | null
  nationality: string
}

export type Mission = {
  id: string
  name: string
  payloads: (Payload | null)[]
}

export type Props = {
  heading: string
  dataset: {
    missions: Mission[]
  }
}
