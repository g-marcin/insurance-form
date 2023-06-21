import { FC } from "react";

export const Summary: FC = () => {
  const data = { Summary: "here" };
  return (
    <div className="card flex-column gap">
      <h2>Summary:</h2>
      {JSON.stringify(data)}
    </div>
  );
};
