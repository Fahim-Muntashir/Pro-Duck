import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Button variant={"elevated"}>I ama button</Button>
      </div>
      <div>
        <Input placeholder="I loev you"></Input>
      </div>
      <div>
        <Progress value={400} />
      </div>

      <div>
        <Textarea name="" id="" value={"tello"}>
          I ama textarea
        </Textarea>
      </div>
    </div>
  );
}
