import { Document, Model, model, Schema } from "mongoose";

interface IDevice extends Document {
  name: string;
  temperature?: number;
  humidity?: number;
  luminosity?: number;
}

const deviceSchema = new Schema<IDevice>({
  name: { type: String, required: true },
  temperature: { type: Number },
  humidity: { type: Number },
  luminosity: { type: Number },
});

const Device: Model<IDevice> = model("Device", deviceSchema);

export { IDevice, Device };