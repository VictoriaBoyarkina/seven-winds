import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { FC, useState } from 'react';
import styles from './Table.module.scss';
import { Box } from '@mui/material';
import EditIcon from '../Editicon';
import DeleteIcon from '../DeleteIcon';

function createData(
  level: number,
  name: string,
  salary: number,
  equipmentCosts: number,
  overheads: number,
  estimatedProfit: number,
) {
  return {
    id: name,
    level,
    name,
    salary,
    equipmentCosts,
    overheads,
    estimatedProfit,
  };
}

const initialRows: GridValidRowModel[] = [
  createData(1, 'Южная строительная площадка', 20348, 1750, 108.07, 1209122.5),
];

const StyledTable: FC = () => {
  const [rows, setRows] = useState(initialRows);

  const TABLE_COLUMNS: GridColDef[] = [
    {
      field: 'level',
      headerName: 'Уровень',
      type: 'number',
      flex: 0.066,
      renderCell: () => (
        <div className={styles.iconsContainer}>
          <div>
            <EditIcon />
            <DeleteIcon />
          </div>
        </div>
      ),
    },
    {
      field: 'name',
      headerName: 'Наименование работ',
      type: 'string',
      flex: 0.45,
      editable: true,
    },
    {
      field: 'salary',
      headerName: 'Основная з/п',
      type: 'number',
      flex: 0.12,
      editable: true,
    },
    {
      field: 'equipmentCosts',
      headerName: 'Оборудование',
      type: 'number',
      flex: 0.12,
      editable: true,
    },
    {
      field: 'overheads',
      headerName: 'Накладные расходы',
      type: 'number',
      flex: 0.12,
      editable: true,
    },
    {
      field: 'estimatedProfit',
      headerName: 'Сметная прибыль',
      type: 'number',
      flex: 0.12,
      editable: true,
    },
  ];

  const handleProcessRowUpdate = (
    newRow: GridValidRowModel,
    _oldRow: GridValidRowModel,
    params: {
      rowId: GridRowId;
    },
  ) => {
    const updatedRows = rows.map((row) =>
      row.id === params.rowId ? newRow : row,
    );
    setRows(updatedRows);
    return newRow;
  };

  return (
    <Box className={styles.container}>
      <DataGrid
        rows={rows}
        columns={TABLE_COLUMNS}
        rowHeight={60}
        editMode="row"
        className={styles.table}
        disableColumnResize
        disableColumnSorting
        disableRowSelectionOnClick
        disableColumnMenu
        hideFooter
        disableColumnSelector
        processRowUpdate={handleProcessRowUpdate}
      />
    </Box>
  );
};

export default StyledTable;
