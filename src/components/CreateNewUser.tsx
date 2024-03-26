import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";
import { useState } from "react";

export function CreateNewUser() {
  const [result, setResult] = useState<"ok" | "ko" | null>(null);
  const { addUser } = useUserActions();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(null);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;

    if (!name || !email || !github) {
      return setResult("ko");
    }

    addUser({ name, email, github });
    setResult("ok");
    form.reset();
  };

  return (
    <Card style={{ marginTop: "16px" }}>
      <Title>Create New User</Title>

      <form onSubmit={handleSubmit} action="">
        <TextInput placeholder="Nombre" name="name" />
        <TextInput placeholder="Email" name="email" />
        <TextInput placeholder="Github" name="github" />

        <div>
          <Button type="submit" style={{ marginTop: "16px" }}>
            Create User
          </Button>
          <span style={{ marginLeft: "10px" }}>
            {result === "ok" && <Badge color="green">Saved!</Badge>}
            {result === "ko" && <Badge color="red">Error on fields!</Badge>}
          </span>
        </div>
      </form>
    </Card>
  );
}
