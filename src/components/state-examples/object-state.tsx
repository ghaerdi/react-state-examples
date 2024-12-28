import { CardWithForm } from "../card-with-form";
import { TextField } from "../text-field";
import { useEffect, useState } from "react";

type Data = {
  name: string;
  hobby: string;
}

export function ObjectState() {
  const [state, setState] = useState<Data>({ name: "", hobby: "" });
  useEffect(() => {
    console.table(state);
    // run debounced mutation 
  }, [state]);
  return (
    <CardWithForm
      title="Personal Data"
      description="State handled by the parent"
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
