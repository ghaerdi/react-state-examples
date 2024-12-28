import { Input } from "./ui/input";
import { Label } from "./ui/label";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange(value: string): void;
}

export const TextField = (props: Props) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label>{props.label}</Label>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
}
