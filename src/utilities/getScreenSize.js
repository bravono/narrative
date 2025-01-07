
export function getScreenSize(size, stroke) {
  const isMobile = window.innerWidth <= 500; 

  if (isMobile) {
    return 230;
  } else {
    return 200;
  }
}