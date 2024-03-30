import { toast } from "sonner";

import { useUserActions } from "../../hooks/useUserActions";
import FormUser from "./FormUser";
import { useUiActions } from "../../hooks/useUiActions";
import { UserId } from "../../store/users/slice";

function EditUser({ userId }: { userId: UserId }) {
  const { editUser } = useUserActions();
  const { hideAddUserBlock } = useUiActions();

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.target);

    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const github = form.get("github") as string;

    if (!name || !email || !github) {
      return toast.error("Error on fields!");
    }

    editUser({ id: userId, name, email, github });
    toast.success("User Updated!");
    hideAddUserBlock();
  };

  return (
    <FormUser
      title="Edit User"
      onSubmit={handleSubmit}
      buttonSubmitLabel="Edit User"
      userId={userId}
    />
  );
}

export default EditUser;
