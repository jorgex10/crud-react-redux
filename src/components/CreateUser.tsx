import { useUserActions } from "../hooks/useUserActions";
import { useState } from "react";
import FormUser from "./FormUser";

function CreateUser() {
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
    <FormUser
      title="Create New User"
      onSubmit={handleSubmit}
      result={result}
      buttonSubmitLabel="Create User"
    />
  );
}

export default CreateUser;
