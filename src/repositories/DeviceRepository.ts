import { Model } from 'mongoose';
import { IDevice } from '../models/Device';
import { DeviceDTO } from '../dtos/DeviceDTO';


export class DeviceRepository {
  constructor(private readonly deviceModel: Model<IDevice>) {}

  async create(deviceDto: DeviceDTO): Promise<IDevice> {
    const device = new this.deviceModel(deviceDto);
    return device.save();
  }

  async findAll(): Promise<IDevice[]> {
    return this.deviceModel.find().exec();
  }

  async findById(id: string): Promise<IDevice> {
    return this.deviceModel.findById(id).exec();
  }

  async update(id: string, deviceDto: DeviceDTO): Promise<IDevice> {
    return this.deviceModel.findByIdAndUpdate(id, deviceDto, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.deviceModel.findByIdAndDelete(id).exec();
  }
}
