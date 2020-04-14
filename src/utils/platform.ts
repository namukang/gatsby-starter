export const isFirefox =
  typeof window !== 'undefined' &&
  window.navigator.userAgent.includes('Firefox');
