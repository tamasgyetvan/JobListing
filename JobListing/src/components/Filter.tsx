import React from "react";
import "../scss/components/_filter.scss";

type FilterProps = {
  applyRoleFilter: (roles: Array<string>) => void;
};

export const Filter: React.FC<FilterProps> = ({ applyRoleFilter }) => {
  let roles: Array<string> = [];
  return (
    <form className="filter">
      <h2>Role</h2>
      <div className="roleFilter">
        <label>
          Frontend
          <input
            type="checkbox"
            value="Frontend"
            onChange={(e) => {
              if (!roles?.includes(e.target.value)) {
                roles = [...roles, e.target.value];
              } else {
                roles = roles.filter((role) => role !== e.target.value);
              }
              console.log(roles);
            }}
          />
        </label>
        <label>
          Backend
          <input
            type="checkbox"
            value="Backend"
            onChange={(e) => {
              if (!roles?.includes(e.target.value)) {
                roles = [...roles, e.target.value];
              } else {
                roles = roles.filter((role) => role !== e.target.value);
              }
              console.log(roles);
            }}
          />
        </label>
        <label>
          Fullstack
          <input
            type="checkbox"
            value="Fullstack"
            onChange={(e) => {
              if (!roles?.includes(e.target.value)) {
                roles = [...roles, e.target.value];
              } else {
                roles = roles.filter((role) => role !== e.target.value);
              }
              console.log(roles);
            }}
          />
        </label>
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
