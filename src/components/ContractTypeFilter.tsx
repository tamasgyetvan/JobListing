import { Checkbox } from "./Checkbox";

type ContractTypeFilterProps = {
  handleContractTypeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ContractTypeFilter: React.FC<ContractTypeFilterProps> = ({
  handleContractTypeInput,
}) => {
  return (
    <div className="contractTypeFilter">
      <h2>Contract Type</h2>
      <Checkbox
        value={"Full Time"}
        handleInput={handleContractTypeInput}
      ></Checkbox>
      <Checkbox
        value={"Part Time"}
        handleInput={handleContractTypeInput}
      ></Checkbox>
      <Checkbox
        value={"Contract"}
        handleInput={handleContractTypeInput}
      ></Checkbox>
    </div>
  );
};
