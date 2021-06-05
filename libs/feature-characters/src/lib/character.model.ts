export interface Character {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  quote: string;
  age: number;
}

export interface Column {
  field: string;
  header: string;
  width?: string; // pass in 10px, 3rem etc
}
