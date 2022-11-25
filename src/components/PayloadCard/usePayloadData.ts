import { useMemo } from 'react'

import { stringToColor } from 'utils/color'

import { Mission, ALL_NATIONS } from './types'

export const usePayloadData = (
  { missions }: { missions: Mission[] },
  countryOption: string,
) => {
  const chartData = useMemo(() => {
    if (countryOption === ALL_NATIONS)
      return missions.map((mission) => ({
        name: mission.name,
        payload: mission.payloads.reduce((prev, current) => {
          if (current && current.payload_mass_kg)
            return prev + current.payload_mass_kg
          return prev
        }, 0),
        color: stringToColor(mission.name),
      }))

    return missions
      .filter(
        (mission) => mission?.payloads?.[0]?.nationality === countryOption,
      )
      .map((mission) => ({
        name: mission.name,
        payload: mission.payloads.reduce((prev, current) => {
          if (current && current.payload_mass_kg)
            return prev + current.payload_mass_kg
          return prev
        }, 0),
        color: stringToColor(mission.name),
      }))
  }, [missions, countryOption])

  const countryNames = useMemo(
    () =>
      Array.from(
        new Set(
          missions.map((mission) => {
            const nationality = mission?.payloads?.[0]?.nationality ?? null

            return nationality
          }),
        ),
      ).filter((item) => item !== null) as string[],
    [missions],
  )

  return {
    chartData,
    countryNames,
  }
}
