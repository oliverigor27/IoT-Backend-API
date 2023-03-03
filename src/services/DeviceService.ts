import { IDevice, Device } from "../models/device";
import { DeviceRepository } from "../repositories/DeviceRepository";

export class DeviceService {
  private deviceRepository: DeviceRepository;

  constructor() {
    this.deviceRepository = new DeviceRepository();
  }

  async findAll(): Promise<IDevice[]> {
    return await this.deviceRepository.findAll();
  }

  async findById(id: string): Promise<IDevice | null> {
    return await this.deviceRepository.findById(id);
  }

  async create(device: IDevice): Promise<IDevice> {
    return await this.deviceRepository.create(device);
  }

  async update(id: string, device: IDevice): Promise<IDevice | null> {
    return await this.deviceRepository.update(id, device);
  }

  async delete(id: string): Promise<boolean> {
    return await this.deviceRepository.delete(id);
  }
}
