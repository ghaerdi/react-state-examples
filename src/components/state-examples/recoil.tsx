import { CardWithForm } from "../card-with-form";
import { TextField } from "../text-field";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { atom } from "recoil";

const nameState = atom({
  key: "nameState",
  default: "",
});

const hobbyState = atom({
  key: "hobbyState",
  default: "",
});

const NameTextField = () => {
  const [name, setName] = useRecoilState(nameState);
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
  const [hobby, setHobby] = useRecoilState(hobbyState);
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

export const Recoil = () => {
  return (
      <CardWithForm
        title="Personal Data"
        description="State handled by recoil"
        fields={(
          <>
            <NameTextField />
            <HobbyTextField />
          </>
        )}
      />
  );
};

