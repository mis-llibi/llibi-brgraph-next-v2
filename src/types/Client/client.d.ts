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
  datasetId?: number | null;
  year: string;
  months?: string | null;
  type: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Dataset = {
  id: number;
  title: string;
  hasMasterlist: boolean;
  hasUtilization: boolean;
  masterlistUploadId?: number | null;
  utilizationUploadId?: number | null;
  masterlistUpload?: Upload | null;
  utilizationUpload?: Upload | null;
};

export type ClientData = {
  id: number;
  client_name: string;
  description?: string;
  insurer_id: number;
  insurer?: Insurer;
  masterlist?: Upload[];
  utilization?: Upload[];
  datasets?: Dataset[];
  decks?: Deck[];
};
