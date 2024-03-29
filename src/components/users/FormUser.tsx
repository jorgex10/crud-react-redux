import { Button, Card, TextInput, Title } from "@tremor/react";

import { useUiActions } from "../../hooks/useUiActions";
import { User, UserId } from "../../store/users/slice";
import { useAppSelector } from "../../hooks/store";
import { useEffect, useState } from "react";

function FormUser({
  title,
  onSubmit,
  buttonSubmitLabel,
  userId,
}: {
  title: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  buttonSubmitLabel: string;
  userId: UserId;
}) {
  const { hideAddUserBlock } = useUiActions();
  const users = useAppSelector((state) => state.users);

  const [userValues, setUserValues] = useState<User>({
    name: "",
    email: "",
    github: "",
  });

  useEffect(() => {
    const user = users.find((user) => user.id === userId);
    if (user)
      setUserValues({
        name: user.name,
        email: user.email,
        github: user.github,
      });
  }, [users, userId]);

  const handleCancel = () => {
    hideAddUserBlock();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Card style={{ marginTop: "16px" }}>
      <Title>{title}</Title>

      <form onSubmit={onSubmit} className="mt-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
          <div className="col-span-full">
            <TextInput
              type="text"
              id="name"
              name="name"
              value={userValues.name}
              onChange={onChangeHandler}
              autoComplete="Name"
              placeholder="Name"
              className="mt-2"
            />
          </div>
          <div className="col-span-full">
            <TextInput
              type="email"
              id="email"
              name="email"
              value={userValues.email}
              onChange={onChangeHandler}
              autoComplete="email"
              placeholder="Email"
              className="mt-2"
            />
          </div>
          <div className="col-span-full">
            <TextInput
              type="text"
              id="github"
              name="github"
              value={userValues.github}
              onChange={onChangeHandler}
              autoComplete="Github"
              placeholder="Github"
              className="mt-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-6">
          <button
            type="button"
            onClick={handleCancel}
            className="whitespace-nowrap rounded-tremor-small px-4 py-2.5 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Cancel
          </button>
          <Button
            type="submit"
            className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
          >
            {buttonSubmitLabel}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FormUser;
