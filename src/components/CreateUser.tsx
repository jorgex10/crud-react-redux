import { toast } from "sonner";

import { useUserActions } from "../hooks/useUserActions";
import FormUser from "./FormUser";
import { useUiActions } from "../hooks/useUiActions";

function CreateUser() {
  const { addUser } = useUserActions();
  const { hideAddUserBlock } = useUiActions();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;

    if (!name || !email || !github) {
      return toast.error("Error on fields!");
    }

    addUser({ name, email, github });
    toast.success("User Created!");
    hideAddUserBlock();
    form.reset();
  };

  return (
    <FormUser
      title="Create New User"
      onSubmit={handleSubmit}
      buttonSubmitLabel="Create User"
    />
  );
}

export default CreateUser;
