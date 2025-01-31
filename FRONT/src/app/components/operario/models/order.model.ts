// src/app/models/order.model.ts

export interface Order {
    id_order: number;
    item_type: string;
    status: string;
    date_of_entry: string;
    date_of_departure: string;
    destination: string;
    warehouse_location: string;
    worker_email: string;
    email_operator: string;
    comment: string | null;
  }