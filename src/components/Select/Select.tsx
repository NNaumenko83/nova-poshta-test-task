import * as React from "react";
import Select, { SelectProps } from "@mui/base/Select";

import { TWarehouse } from "../../Types/WarehouseType";
import { StyledButton, StyledListbox, StyledOption, StyledPopper } from "./Select.styled";

interface IUnstyledSelectControlledProps {
	warehousesTypes: TWarehouse[];
	onChangeType: (type: string | null) => void;
	value: string | null;
}

export const UnstyledSelectControlled: React.FC<IUnstyledSelectControlledProps> = ({
	warehousesTypes,
	onChangeType,
	value,
}) => {
	console.log("value:", value);
	console.log("warehousesTypes:", warehousesTypes);
	return (
		<div>
			<CustomSelect
				value={value}
				onChange={(_, newValue) => {
					onChangeType(newValue);
				}}
			>
				<StyledOption value={"all"}>Всі</StyledOption>
				{warehousesTypes.map(item => (
					<StyledOption key={item.Ref} value={item.Ref}>
						{item.Description}
					</StyledOption>
				))}
			</CustomSelect>
		</div>
	);
};

function CustomSelect(props: SelectProps<string, false>) {
	const slots: SelectProps<string, false>["slots"] = {
		root: StyledButton,
		listbox: StyledListbox,
		popper: StyledPopper,
		...props.slots,
	};

	return <Select {...props} slots={slots} />;
}
