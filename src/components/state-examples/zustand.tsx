import { CardWithForm } from "../card-with-form";
import { PersonalDataState } from "./common";
import { useEffect, useState } from "react";
import { TextField } from "../text-field";
import { debounce } from "lodash";
import { create } from "zustand";

const useFormStore = create<PersonalDataState>((set) => ({
  name: "",
  hobby: "",
  setName: (name: string) => set(() => ({ name })),
  setHobby: (hobby: string) => set(() => ({ hobby }))
}));

const NameTextField = () => {
  const setNameState = useFormStore(state => state.setName);
  const debouncedSetName = debounce(setNameState, 750);
  const [name, setName] = useState<string>("");
  useEffect(() => {
    const timeout = setTimeout(() => debouncedSetName(name), 100);
    return () => {
      clearTimeout(timeout);
    }
  }, [name])
  return (
    <TextField
      label="Name"
      placeholder="Name"
      value={name}
      onChange={(value) => { 
        setName(value);
      }}
    />
  );
}

const HobbyTextField = () => {
  const setHobbyState = useFormStore(state => state.setHobby)
  const debouncedSetHobby = debounce(setHobbyState, 750);
  const [hobby, setHobby] = useState<string>("");
  return (
    <TextField
      label="Hobby"
      placeholder="Your favorite hobby"
      value={hobby}
      onChange={(value) => { 
        debouncedSetHobby(value);
        setHobby(value);
      }}
    />
  )
}

export const Zustand = () => {
  const name = useFormStore(state => state.name);
  return (
    <CardWithForm
      title="Personal Data"
      description="State handled by zustand"
      onSubmit={() => alert(`Hello ${name}.`)}
      fields={(
        <>
          <NameTextField />
          <HobbyTextField />
        </>
      )}
    />
  );
};
