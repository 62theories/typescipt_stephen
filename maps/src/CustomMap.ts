export interface Mapable {
  location: {
    lat: number;
    lng: number;
  };
  contentMarker(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mapable: Mapable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng,
      },
    });

    const infowindow = new google.maps.InfoWindow({
      content: mapable.contentMarker(),
    });
    marker.addListener("click", () => {
      infowindow.open(this.googleMap, marker);
    });
  }
}
