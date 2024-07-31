import InventoryTable from './InventoryTable';
import { StyledInventoryContainer } from 'Components/common/StyledInventory';

export default function InventoryContainer() {
	return (
		<StyledInventoryContainer>
			<InventoryTable />
		</StyledInventoryContainer>
	);
}
