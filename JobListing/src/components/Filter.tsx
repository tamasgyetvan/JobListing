import React from "react";
import "../scss/components/_filter.scss";
import { Checkbox } from "./Checkbox";

type FilterProps = {
  applyRoleFilter: (roles: Array<string>) => void;
};

export const Filter: React.FC<FilterProps> = ({ applyRoleFilter }) => {
  let roles: Array<string> = [];

  const handleCheckboxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!roles?.includes(e.target.value)) {
      roles = [...roles, e.target.value];
    } else {
      roles = roles.filter((role) => role !== e.target.value);
    }
    console.log(roles);
  };
  return (
    <form className="filter">
      <h2>Role</h2>
      <div className="roleFilter">
        <Checkbox
          value={"Frontend"}
          handleInput={handleCheckboxInput}
        ></Checkbox>
        <Checkbox
          value={"Backend"}
          handleInput={handleCheckboxInput}
        ></Checkbox>
        <Checkbox
          value={"Fullstack"}
          handleInput={handleCheckboxInput}
        ></Checkbox>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          applyRoleFilter(roles);
        }}
      >
        Filter
      </button>
      <button onClick={() => {}}>Reset</button>
    </form>
  );
};
