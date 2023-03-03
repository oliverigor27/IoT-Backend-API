export interface DeviceDTO {
    id: string;
    name: string;
    type: string;
    status: string;
    location: {
      latitude: number;
      longitude: number;
    };
    data: {
      temperature: number;
      humidity: number;
      luminosity: number;
    };
  }
  