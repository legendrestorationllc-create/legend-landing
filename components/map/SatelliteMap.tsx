'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface Props {
  onAddressSelect: (address: string, lat: number, lng: number) => void
  inputValue: string
  onInputChange: (v: string) => void
  placeholder?: string
}

export function SatelliteMap({ onAddressSelect, inputValue, onInputChange, placeholder = 'Escribe tu dirección completa...' }: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markerRef = useRef<google.maps.Marker | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const [verified, setVerified] = useState(false)
  const [mapsAvailable, setMapsAvailable] = useState(false)

  const initMap = useCallback(() => {
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
    setMapsAvailable(true)
  }, [])

  const initAutocomplete = useCallback(() => {
    if (!inputRef.current || autocompleteRef.current) return
    if (!window.google?.maps?.places) return

    const ac = new google.maps.places.Autocomplete(inputRef.current, {
      types: ['address'],
      componentRestrictions: { country: 'us' },
      fields: ['formatted_address', 'geometry'],
    })

    ac.addListener('place_changed', () => {
      const place = ac.getPlace()
      if (!place.geometry?.location) return

      const lat = place.geometry.location.lat()
      const lng = place.geometry.location.lng()
      const address = place.formatted_address ?? ''

      onAddressSelect(address, lat, lng)
      onInputChange(address)

      const map = mapInstanceRef.current
      const marker = markerRef.current
      if (!map || !marker) return

      map.panTo({ lat, lng })
      setTimeout(() => {
        map.setZoom(19)
        map.setCenter({ lat, lng })
        marker.setPosition({ lat, lng })
        marker.setVisible(true)
        setVerified(true)
        setTimeout(() => map.setCenter({ lat, lng }), 250)
      }, 200)
    })

    autocompleteRef.current = ac
  }, [onAddressSelect, onInputChange])

  useEffect(() => {
    const tryInit = () => {
      if (window.google?.maps) {
        initMap()
        initAutocomplete()
      }
    }

    tryInit()
    window.addEventListener('google-maps-ready', tryInit)
    return () => window.removeEventListener('google-maps-ready', tryInit)
  }, [initMap, initAutocomplete])

  useEffect(() => {
    if (mapsAvailable) initAutocomplete()
  }, [mapsAvailable, initAutocomplete])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
      <div style={{ position: 'relative' }}>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '0.875rem 1rem 0.875rem 2.75rem',
            border: `2px solid ${verified ? 'var(--orange)' : 'var(--border)'}`,
            borderRadius: 'var(--radius)',
            fontSize: '0.9375rem',
            fontFamily: 'var(--font-dm)',
            color: 'var(--navy2)',
            outline: 'none',
            transition: 'border-color 0.2s',
            background: 'var(--white)',
          }}
        />
        <span style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1rem' }}>
          📍
        </span>
        {verified && (
          <span style={{
            position: 'absolute', right: '0.875rem', top: '50%', transform: 'translateY(-50%)',
            background: 'var(--orange)', color: 'white', fontSize: '0.6875rem', fontWeight: 700,
            padding: '0.2rem 0.5rem', borderRadius: 999, fontFamily: 'var(--font-sora)',
          }}>
            🛰️ SATÉLITE
          </span>
        )}
      </div>

      <div className={`map-block${verified ? ' verified' : ''}`} style={{ position: 'relative' }}>
        {verified && (
          <div style={{
            position: 'absolute', top: 8, left: 8, zIndex: 10,
            background: 'rgba(27,42,107,.85)', color: 'white',
            fontSize: '0.6875rem', fontWeight: 700, padding: '0.3rem 0.625rem',
            borderRadius: 6, fontFamily: 'var(--font-sora)', backdropFilter: 'blur(4px)',
          }}>
            🛰️ TU PROPIEDAD
          </div>
        )}
        <div ref={mapRef} style={{ width: '100%', height: 220 }} />
        {!mapsAvailable && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
            justifyContent: 'center', background: 'var(--light)', borderRadius: 'var(--radius)',
            flexDirection: 'column', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.875rem',
          }}>
            <span style={{ fontSize: '1.5rem' }}>🗺️</span>
            <span>Mapa satelital</span>
            <span style={{ fontSize: '0.75rem' }}>(se carga automáticamente)</span>
          </div>
        )}
      </div>

      {verified && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(5,150,105,.08)', border: '1px solid rgba(5,150,105,.2)',
          borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.875rem',
          fontSize: '0.8125rem', color: 'var(--green)', fontWeight: 600,
        }}>
          <span>✅</span> Propiedad verificada por satélite
        </div>
      )}
    </div>
  )
}
