import { Checkbox } from "./Checkbox";

type LevelFilterProps = {
  handleLevelInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const LevelFilter: React.FC<LevelFilterProps> = ({
  handleLevelInput,
}) => {
  return (
    <div className="levelFilter">
      <h2>Level</h2>
      <Checkbox value={"Junior"} handleInput={handleLevelInput} />
      <Checkbox value={"Midweight"} handleInput={handleLevelInput} />
      <Checkbox value={"Senior"} handleInput={handleLevelInput} />
    </div>
  );
};
