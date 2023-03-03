import { Request, Response } from "express";
import { DeviceService } from "../services/DeviceService";


export class DeviceController {
    private readonly deviceService: DeviceService;
  
    constructor() {
      this.deviceService = new DeviceService();
    }
  
    async createDevice(req: Request, res: Response) {
      try {
        const device = await this.deviceService.create(req.body);
        res.status(201).json(device);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  
    async getAllDevices(req: Request, res: Response) {
      try {
        const devices = await this.deviceService.findAll();
        res.json(devices);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
  
    async getDeviceById(req: Request, res: Response) {
      try {
        const device = await this.deviceService.findById(req.params.id);
        res.json(device);
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
    }
  
    async updateDevice(req: Request, res: Response) {
      try {
        const device = await this.deviceService.update(req.params.id, req.body);
        res.json(device);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  
    async deleteDevice(req: Request, res: Response) {
      try {
        await this.deviceService.delete(req.params.id);
        res.sendStatus(204);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  }
  