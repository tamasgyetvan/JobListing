import React from "react";
import "../scss/components/_filter.scss";

export const Filter: React.FC = () => {
  let roleFilter: Array<string> = [];
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
              if (!roleFilter.includes(e.target.value)) {
                roleFilter = [...roleFilter, e.target.value];
              } else {
                roleFilter = roleFilter.filter(
                  (role) => role !== e.target.value
                );
              }
              console.log(roleFilter);
            }}
          />
        </label>
        <label>
          Backend
          <input
            type="checkbox"
            value="Backend"
            onChange={(e) => {
              if (!roleFilter.includes(e.target.value)) {
                roleFilter = [...roleFilter, e.target.value];
              } else {
                roleFilter = roleFilter.filter(
                  (role) => role !== e.target.value
                );
              }
              console.log(roleFilter);
            }}
          />
        </label>
        <label>
          Fullstack
          <input
            type="checkbox"
            value="Fullstack"
            onChange={(e) => {
              if (!roleFilter.includes(e.target.value)) {
                roleFilter = [...roleFilter, e.target.value];
              } else {
                roleFilter = roleFilter.filter(
                  (role) => role !== e.target.value
                );
              }
            }}
          />
        </label>
      </div>
      <button onClick={() => {}}>Filter</button>
      <button onClick={() => {}}>Reset</button>
    </form>
  );
};
