
export function getScreenWidth(size, stroke) {
  const isMobile = window.innerWidth <= 500; 

  if (isMobile) {
    return 230;
  } else {
    return 200;
  }
}

export function getScreenHeight() {
  const isNotTall = window.innerHeight <= 740;

  if (isNotTall) {
    return 15;
  } else {
    return 20;
  }
}