import { FC } from "react";

export const Owner: FC = () => {
  return (
    <div className="card flex-column gap">
      <h2>Owner data:</h2>
      <label className="input">
        name:
        <input type="text" />
      </label>
      <label className="input">
        surname:
        <input type="text" />
      </label>
      <label className="input">
        PESEL no:
        <input type="text" />
      </label>
      <label className="input">
        street:
        <input type="text" />
      </label>
      <label className="input">
        postcode:
        <input type="text" />
      </label>
      <label className="input-between">
        co-owner ?:
        <input type="checkbox" />
      </label>
    </div>
  );
};