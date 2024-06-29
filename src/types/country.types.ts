export interface Country {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side: string;
}

export interface CoatOfArms {}

export interface Currencies {
    XPF: Xpf;
}

export interface Xpf {
    name: string;
    symbol: string;
}

export interface Demonyms {
    eng: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png: string;
    svg: string;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface Languages {
    fra: string;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface NativeName {
    fra: Translation;
}

export interface Translation {
    official: string;
    common: string;
}

export interface PostalCode {
    format: string;
    regex: string;
}
