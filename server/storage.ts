import { type Reservation, type InsertReservation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservations(): Promise<Reservation[]>;
  getReservation(id: string): Promise<Reservation | undefined>;
}

export class MemStorage implements IStorage {
  private reservations: Map<string, Reservation>;

  constructor() {
    this.reservations = new Map();
  }

  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const id = randomUUID();
    const reservation: Reservation = {
      ...insertReservation,
      id,
      createdAt: new Date(),
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }

  async getReservation(id: string): Promise<Reservation | undefined> {
    return this.reservations.get(id);
  }
}

export const storage = new MemStorage();
