import React from "react";
import "../scss/components/_filter.scss";
import { Checkbox } from "./Checkbox";

type FilterProps = {
  applyFilters: (
    roleFilterArray: Array<string>,
    levelFilterArray: Array<string>,
    contractTypeFilterArray: Array<string>
  ) => void;
};

export const Filter: React.FC<FilterProps> = ({ applyFilters }) => {
  let roles: Array<string> = [];
  let levels: Array<string> = [];
  let contractTypes: Array<string> = [];

  const handleRoleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!roles?.includes(e.target.value)) {
      roles = [...roles, e.target.value];
    } else {
      roles = roles.filter((role) => role !== e.target.value);
    }
  };

  const handleLevelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!levels.includes(e.target.value)) {
      levels = [...levels, e.target.value];
    } else {
      levels = levels.filter((level) => level !== e.target.value);
    }
  };
  const handleContractTypeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!contractTypes.includes(e.target.value)) {
      contractTypes = [...contractTypes, e.target.value];
    } else {
      contractTypes = contractTypes.filter(
        (contractType) => contractType !== e.target.value
      );
    }

    console.log(contractTypes);
  };
  return (
    <form className="filter">
      <h2>Role</h2>
      <div className="roleFilter">
        <Checkbox value={"Frontend"} handleInput={handleRoleInput}></Checkbox>
        <Checkbox value={"Backend"} handleInput={handleRoleInput}></Checkbox>
        <Checkbox value={"Fullstack"} handleInput={handleRoleInput}></Checkbox>
      </div>
      <div className="levelFilter">
        <Checkbox value={"Junior"} handleInput={handleLevelInput}></Checkbox>
        <Checkbox value={"Midweight"} handleInput={handleLevelInput}></Checkbox>
        <Checkbox value={"Senior"} handleInput={handleLevelInput}></Checkbox>
      </div>
      <div className="contractTypeFilter">
        <Checkbox
          value={"Full Time"}
          handleInput={handleContractTypeInput}
        ></Checkbox>
        <Checkbox
          value={"Contract"}
          handleInput={handleContractTypeInput}
        ></Checkbox>
        <Checkbox
          value={"Part Time"}
          handleInput={handleContractTypeInput}
        ></Checkbox>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          applyFilters(roles, levels, contractTypes);
        }}
      >
        Filter
      </button>
      <button onClick={() => {}}>Reset</button>
    </form>
  );
};
