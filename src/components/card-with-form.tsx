import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ReactNode } from "react";


type Props = {
  title: string;
  description: string;
  fields: ReactNode;
  onSubmit: () => void;
}

export const CardWithForm = (props: Props) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {props.fields}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={props.onSubmit}>Submit</Button>
      </CardFooter>
    </Card>
  )
};
