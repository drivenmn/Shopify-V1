export type FinishType = 'gloss' | 'satin' | 'matte';

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  type: 'standard' | 'premium' | 'custom' | 'clear';
  price: number;
  finish: FinishType;
  overlayColor?: string; // CSS color for overlay
  overlayOpacity?: number;
  asset?: string; // URL or import path for the specific color visualization
}

export interface VisualizerState {
  selectedColorId: string;
  selectedFinish: FinishType; // Some colors might allow gloss/stealth toggle
  isComparing: boolean; // Before/After view
}
