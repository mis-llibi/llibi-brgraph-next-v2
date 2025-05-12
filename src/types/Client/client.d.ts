export type Insurer = {
  id: number;
  name: string;
};

export type Client = {
  id: number;
  client_name: string;
  description?: string;
  insurer_id?: number;
  insurer?: Insurer;
};

export type Deck = {
  id: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  clientId: number;
};

export type Upload = {
  id: number;
  clientId: number;
  insurerId: number;
  year: string;
  months?: string | null;
  type: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ClientData = {
  id: number;
  client_name: string;
  description?: string;
  insurer_id: number;
  insurer?: Insurer;
  masterlist?: Upload[];
  utilization?: Upload[];
  decks?: Deck[];
};
