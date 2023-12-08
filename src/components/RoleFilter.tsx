import { Checkbox } from "./Checkbox";

type RoleFilterProps = {
  handleRoleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RoleFilter: React.FC<RoleFilterProps> = ({ handleRoleInput }) => {
  return (
    <div className="roleFilter">
      <h2>Role</h2>
      <Checkbox value={"Frontend"} handleInput={handleRoleInput} />
      <Checkbox value={"Backend"} handleInput={handleRoleInput} />
      <Checkbox value={"Fullstack"} handleInput={handleRoleInput} />
    </div>
  );
};
