export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#456dd1',
  fillColor: '#456dd1'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#456dd1',
  fillColor: '#456dd1'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#456dd1',
  fillColor: '#456dd1'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleC]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}
