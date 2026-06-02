'use client'

import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

export function useMaps(mapRef: RefObject<HTMLDivElement>) {
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markerRef = useRef<google.maps.Marker | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const init = () => {
      if (!mapRef.current || mapInstanceRef.current) return

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 41.6032, lng: -73.0877 },
        zoom: 9,
        mapTypeId: 'satellite',
        fullscreenControl: true,
        zoomControl: true,
        gestureHandling: 'cooperative',
        mapTypeControl: false,
        streetViewControl: false,
      })

      const marker = new google.maps.Marker({
        map,
        animation: google.maps.Animation.DROP,
        visible: false,
      })

      mapInstanceRef.current = map
      markerRef.current = marker
      setReady(true)
    }

    if (typeof window !== 'undefined' && window.google?.maps) {
      init()
    } else {
      const handler = () => init()
      window.addEventListener('google-maps-ready', handler)
      return () => window.removeEventListener('google-maps-ready', handler)
    }
  }, [mapRef])

  const panTo = (lat: number, lng: number) => {
    const map = mapInstanceRef.current
    const marker = markerRef.current
    if (!map || !marker) return

    const location = { lat, lng }
    map.panTo(location)
    setTimeout(() => {
      map.setZoom(19)
      marker.setPosition(location)
      marker.setVisible(true)
    }, 200)
  }

  return { mapInstance: mapInstanceRef.current, marker: markerRef.current, ready, panTo }
}
