import React from "react";
import "../scss/components/_filter.scss";
import { RoleFilter } from "./RoleFilter";
import { LevelFilter } from "./LevelFilter";
import { ContractTypeFilter } from "./ContractTypeFilter";

type FilterProps = {
  applyFilters: (
    roleFilterArray: Array<string>,
    levelFilterArray: Array<string>,
    contractTypeFilterArray: Array<string>
  ) => void;

  resetData: () => void;
};

export const Filter: React.FC<FilterProps> = ({ applyFilters, resetData }) => {
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
  };
  return (
    <form className="filter">
      <div className="inputContainer">
        <RoleFilter handleRoleInput={handleRoleInput} />
        <LevelFilter handleLevelInput={handleLevelInput} />
        <ContractTypeFilter handleContractTypeInput={handleContractTypeInput} />
      </div>
      <div className="buttonContainer">
        <button
          onClick={(e) => {
            e.preventDefault();
            applyFilters(roles, levels, contractTypes);
          }}
        >
          Filter
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            resetData();
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
};
