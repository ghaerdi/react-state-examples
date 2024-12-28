import { CardWithForm } from "../card-with-form";
import { PersonalDataState } from "./common";
import { TextField } from "../text-field";
import { useEffect } from "react";
import { create } from "zustand";

const useFormStore = create<PersonalDataState>((set) => ({
  name: "",
  hobby: "",
  setName: (name: string) => set(() => ({ name })),
  setHobby: (hobby: string) => set(() => ({ hobby }))
}))

const NameTextField = () => {
  //const { name, setName } = useFormStore(); // this includes hobby and setHobby even if it's not used 
  const setName = useFormStore(state => state.setName);
  const name = useFormStore(state => state.name);
  useEffect(() => {
    console.table({ name });
    // run debounced mutation
  }, [name])
  return (
    <TextField
      label="Name"
      placeholder="Name"
      value={name}
      onChange={setName}
    />
  );
}

const HobbyTextField = () => {
  const setHobby = useFormStore(state => state.setHobby);
  const hobby = useFormStore(state => state.hobby);
  useEffect(() => {
    console.table({ hobby });
    // run debounced mutation
  }, [hobby])
  return (
    <TextField
      label="Hobby"
      placeholder="Your favorite hobby"
      value={hobby}
      onChange={setHobby}
    />
  )
}

export const Zustand = () => {
  return (
    <CardWithForm
      title="Personal Data"
      description="State handled by zustand"
      fields={(
        <>
          <NameTextField />
          <HobbyTextField />
        </>
      )}
    />
  );
};
