import { PropsWithChildren, useState, createContext, useContext, useEffect } from "react";
import { CardWithForm } from "../card-with-form";
import { PersonalDataState } from "./common";
import { TextField } from "../text-field";

const initialState: PersonalDataState = {
  name: "",
  hobby: "",
  setName() { },
  setHobby() { }
};

const FormProviderContext = createContext<PersonalDataState>(initialState);

function FormProvider(props: PropsWithChildren) {
  const [state, setState] = useState<PersonalDataState>(initialState);

  useEffect(() => {
    console.table(state);
    // run debounced mutation 
  }, [state]);

  const value = {
    name: state.name,
    hobby: state.hobby,
    setName: (name: string) => setState(prev => ({ ...prev, name })),
    setHobby: (hobby: string) => setState(prev => ({ ...prev, hobby }))
  };

  return (
    <FormProviderContext.Provider value={value}>
      {props.children}
    </FormProviderContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormProviderContext);

  if (context === undefined)
    throw new Error("useForm must be used within a FormProvider")

  return context
}

function Form() {
  const { name, setName, hobby, setHobby } = useForm();
  return (
    <CardWithForm
      title="Personal Data"
      description="State handled by provider"
      onSubmit={() => alert(`Hello ${name}.`)}
      fields={(
        <>
          <TextField
            label="Name"
            placeholder="Name"
            value={name}
            onChange={setName}
          />
          <TextField
            label="Hobby"
            placeholder="Your favorite hobby"
            value={hobby}
            onChange={setHobby}
          />
        </>
      )}
    />
  )
}

export function ContextProvider() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}
