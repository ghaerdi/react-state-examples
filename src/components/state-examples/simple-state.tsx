import { CardWithForm } from "../card-with-form";
import { useEffect, useState } from "react";
import { TextField } from "../text-field";

const NameTextField = () => {
  const [localName, setLocalName] = useState<string>("");
  useEffect(() => {
    console.table({ name: localName });
    // run debounced mutation
  }, [localName])
  return (
    <TextField
      label="Name"
      placeholder="Name"
      value={localName}
      onChange={setLocalName}
    />
  );
}

const HobbyTextField = () => {
  const [hobby, setHobby] = useState<string>("");
  useEffect(() => {
    console.table({ hobby });
    // debounce and send state to parent
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
  return (
    <CardWithForm
      title="Personal Data"
      description="State handled by the field"
      fields={(
        <>
          <NameTextField />
          <HobbyTextField />
        </>
      )}
    />
  );
};
