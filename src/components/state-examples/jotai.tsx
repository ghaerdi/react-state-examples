import { CardWithForm } from "../card-with-form";
import { TextField } from "../text-field";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";

// zustand like?
//const formAtom = atom({ name: "", hobby: "" });
//const nameAtom = atom(get => get(formAtom).name, (get, set, name: string) => set(formAtom, { ...get(formAtom), name }));
//const hobbyAtom = atom(get => get(formAtom).hobby, (get, set, hobby: string) => set(formAtom, { ...get(formAtom), hobby }));

const nameAtom = atom("");
const hobbyAtom = atom("");

const NameTextField = () => {
  const [name, setName] = useAtom(nameAtom);
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
  const [hobby, setHobby] = useAtom(hobbyAtom);
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

export const Jotai = () => {
  return (
    <CardWithForm
      title="Personal Data"
      description="State handled by jotai"
      fields={(
        <>
          <NameTextField />
          <HobbyTextField />
        </>
      )}
    />
  );
};

