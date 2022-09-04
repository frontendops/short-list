interface Properties {
  Loc_name: string;
  Status: string;
  Score: number;
  Match_addr: string;
  LongLabel: string;
  ShortLabel: string;
  Addr_type: string;
  Type: string;
  PlaceName: string;
  Place_addr: string;
  Phone: string;
  URL: string;
  Rank: number;
  AddBldg: string;
  AddNum: string;
  AddNumFrom: string;
  AddNumTo: string;
  AddRange: string;
  Side: string;
  StPreDir: string;
  StPreType: string;
  StName: string;
  StType: string;
  StDir: string;
  BldgType: string;
  BldgName: string;
  LevelType: string;
  LevelName: string;
  UnitType: string;
  UnitName: string;
  SubAddr: string;
  StAddr: string;
  Block: string;
  Sector: string;
  Nbrhd: string;
  District: string;
  City: string;
  MetroArea: string;
  Subregion: string;
  Region: string;
  RegionAbbr: string;
  Territory: string;
  Zone: string;
  Postal: string;
  PostalExt: string;
  Country: string;
  CntryName: string;
  LangCode: string;
  Distance: number;
  X: number;
  Y: number;
  DisplayX: number;
  DisplayY: number;
  Xmin: number;
  Xmax: number;
  Ymin: number;
  Ymax: number;
  ExInfo: string;
}

interface SouthWest {
  lat: number;
  lng: number;
}
interface Bounds {
  _southWest: SouthWest;
  _northEast: SouthWest;
}

export interface FormState {
  city: '';
  arrivalDate: '';
  departureDate: '';
}

export interface LocationResult {
  text: string;
  bounds: Bounds;
  score: number;
  latlng: SouthWest;
  properties: Properties;
}

export interface MarkerData {
  id: string;
  latlng: [number, number];
  data: LocationResult;
  saved: boolean;
}

export interface CardData {
  category?: string;
  date?: Date; // completion date,
  daysUntil?: number;
  description?: string;
  id: string;
  imgUrl?: string;
  title: string;
  timeUntil?: number; // this could be in miliseconds then converted to hours/ minutes
}

export interface LocationData {
  name: string;
  visited: boolean;
}
