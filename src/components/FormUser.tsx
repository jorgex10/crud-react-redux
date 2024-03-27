import { Badge, Button, Card, TextInput, Title } from "@tremor/react";

function FormUser({
  title,
  onSubmit,
  result,
  buttonSubmitLabel,
}: {
  title: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  result: string | null;
  buttonSubmitLabel: string;
}) {
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
              autoComplete="Github"
              placeholder="Github"
              className="mt-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-6">
          <button
            type="button"
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
        <div className="flex items-center justify-center space-x-4">
          <span style={{ marginTop: "12px" }}>
            {result === "ok" && <Badge color="green">Saved!</Badge>}
            {result === "ko" && <Badge color="red">Error on fields!</Badge>}
          </span>
        </div>
      </form>
    </Card>
  );
}

export default FormUser;
