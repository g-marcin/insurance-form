import { FC } from "react";

export const Car: FC = () => {
  return (
    <div className="card flex-column gap">
      <h2>Car data:</h2>
      <label className="input">
        brand:
        <input type="text" />
      </label>
      <label className="input">
        model:
        <input type="text" />
      </label>
      <label className="input">
        color:
        <input type="text" />
      </label>
      <label className="input">
        win:
        <input type="text" />
      </label>
      <label className="input">
        postcode:
        <input type="text" />
      </label>
    </div>
  );
};
