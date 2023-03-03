import { connect, MqttClient } from "mqtt";
import { Device } from "../models/device";

class MqttService {
  private readonly client: MqttClient;

  constructor(brokerUrl: string) {
    this.client = connect(brokerUrl);
    this.client.on("connect", () => {
      console.log(`Connected to broker: ${brokerUrl}`);
      this.client.subscribe("devices/+/data");
    });
    this.client.on("message", async (topic, message) => {
      try {
        const [deviceId, dataType] = topic.split("/");
        const device = await Device.findById(deviceId);
        if (device) {
          const value = Number(message.toString());
          switch (dataType) {
            case "temperature":
              device.temperature = value;
              break;
            case "humidity":
              device.humidity = value;
              break;
            case "luminosity":
              device.luminosity = value;
              break;
            default:
              console.log(`Unknown data type: ${dataType}`);
          }
          await device.save();
        } else {
          console.log(`Device not found: ${deviceId}`);
        }
      } catch (error) {
        console.error(error);
      }
    });
  }
}

export default MqttService;