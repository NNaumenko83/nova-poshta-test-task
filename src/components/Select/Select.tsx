import * as React from "react";
import Select, { SelectProps } from "@mui/base/Select";

import { TWarehouse } from "../../Types/WarehouseType";
import { Paragraph, StyledButton, StyledListbox, StyledOption, StyledPopper } from "./Select.styled";

interface IUnstyledSelectControlledProps {
	warehousesTypes: TWarehouse[];
}

export const UnstyledSelectControlled: React.FC<IUnstyledSelectControlledProps> = ({ warehousesTypes }) => {
	console.log("warehouses:", warehousesTypes);
	const [value, setValue] = React.useState<string | null>("");

	return (
		<div>
			<CustomSelect value={value} onChange={(_, newValue) => setValue(newValue)}>
				<StyledOption value={""}>Всі</StyledOption>
				{warehousesTypes.map(item => (
					<StyledOption key={item.Ref} value={item.Ref}>
						{item.Description}
					</StyledOption>
				))}
			</CustomSelect>

			<Paragraph>Selected value: {value}</Paragraph>
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
