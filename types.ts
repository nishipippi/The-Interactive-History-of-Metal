export interface Band {
  name: string;
  url?: string;
}

export interface GenreInfo {
  id: string;
  name: string;
  era: string;
  description: string;
  bands: Band[];
  type: 'origin' | 'mainstream' | 'counter-culture' | 'sub-genre' | 'transitional' | 'fusion';
  influences: string[];
  column: number;
}