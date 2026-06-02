// Augment the Window interface so TypeScript is happy with the google-maps-ready event
// and the google.maps namespace (loaded via <Script>)
export {}

declare global {
  interface Window {
    google: typeof google
  }
}
