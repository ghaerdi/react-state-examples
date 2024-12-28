export type PersonalData = {
  name: string;
  hobby: string;
}

export type PersonalDataState = PersonalData & {
  setName(name: string): void;
  setHobby(hobby: string): void;
}
