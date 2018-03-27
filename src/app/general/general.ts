export interface MessageM<T> {
  data: T[];
  error: string;
}

export interface MessageU<T> {
  data: T;
  error: string;
}

export interface City {
  id: number;
  name: string;
  state: string;
  country: string;
}
