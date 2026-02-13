// PPF Configurator Types

export interface PPFQuote {
  id?: string;
  created_at?: string;
  vehicle_info: {
    year: number;
    make: string;
    model: string;
    trim: string;
    type: string;
  };
  configuration: {
    package: string;
    film: string;
    addons: string[];
  };
  total_price: number;
  customer_email: string;
  customer_phone?: string;
  status?: string;
}
