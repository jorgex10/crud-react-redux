import { RiInformationLine } from "@remixicon/react";

interface Props {
  children: string;
}

function Info({ children }: Props) {
  return (
    <>
      <div className="mt-4 flex h-52 items-center justify-center rounded-tremor-small border border-dashed border-tremor-border p-4 dark:border-dark-tremor-border">
        <div className="text-center">
          <RiInformationLine className="mx-auto" />
          <p className="mt-2 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Info;
