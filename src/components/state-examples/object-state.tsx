import { CardWithForm } from "../card-with-form";
import { TextField } from "../text-field";
import { PersonalData } from "./common";
import { useState } from "react";

export function ObjectState() {
  const [state, setState] = useState<PersonalData>({ name: "", hobby: "" });
  return (
    <CardWithForm
      title="Personal Data"
      description="State handled by the parent"
      onSubmit={() => alert(`Hello ${state.name}.`)}
      fields={(
        <>
          <TextField
            label="Name"
            placeholder="Name"
            value={state.name}
            onChange={value => setState({ ...state, name: value })}
          />
          <TextField
            label="Hobby"
            placeholder="Your favorite hobby"
            value={state.hobby}
            onChange={value => setState({ ...state, hobby: value })}
          />
        </>
      )}
    />
  );
}
