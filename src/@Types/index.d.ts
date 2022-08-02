interface People {
  name: string;
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: string[],
  species: string[],
  vehicles: string[],
  starships: string[],
  created: Date,
  edited: Date,
  url: string,

}

interface PeopleResponse {
  count: number,
  next: string,
  previous: null | number,
  results: People[],
}