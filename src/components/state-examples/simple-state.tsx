import { CardWithForm } from "../card-with-form";
import { useEffect, useState } from "react";
import { TextField } from "../text-field";
import { PersonalData } from "./common";
import { debounce } from "lodash";

const NameTextField = (props: { setName(name: string): void }) => {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    console.table({ name: name });
    props.setName?.(name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

const HobbyTextField = (props: { setHobby(hobby: string): void }) => {
  const [hobby, setHobby] = useState<string>("");
  useEffect(() => {
    console.table({ hobby });
    props.setHobby(hobby);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hobby])
  return (
    <TextField
      label="Hobby"
      placeholder="Your favorite hobby"
      value={hobby}
      onChange={setHobby}
    />
  );
}

export const SimpleState = () => {
  const [state, setState] = useState<PersonalData>({ name: "", hobby: "" });
  const setName = debounce((name: string) => setState({ ...state, name }), 750);
  const setHobby = debounce((hobby: string) => setState({ ...state, hobby }), 750);
  return (
    <CardWithForm
      title="Personal Data"
      description="State handled by the field"
      onSubmit={() => alert(`Hello ${state.name}.`)}
      fields={(
        <>
          <NameTextField setName={setName} />
          <HobbyTextField setHobby={setHobby} />
        </>
      )}
    />
  );
};
