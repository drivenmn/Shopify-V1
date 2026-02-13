// Tesla Package Configurator Types

export interface TeslaConfigState {
  modelId: string;
  ppfPackageId: string;
  ppfFilmId: string; // 'ultimate-plus', 'stealth', 'molten-orange', etc.
  tintPackageId: string;
  tintFilmId: string; // 'prime-xr', 'prime-xr-plus'
  tintVLT: number;
  ceramicId: string;
  addons: string[];
}

export interface CeramicOption {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface AddonOption {
  id: string;
  name: string;
  price: number;
}
