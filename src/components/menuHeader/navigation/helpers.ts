export default class Navigation {
  goToRoute(route: string) {
    window.location.href = route;
  }

  switchActiveImage(isActive:any, notActiveImage: any, activeImage: any) {
    if (isActive) {
      return activeImage;
    }
    return notActiveImage;
  }
}
