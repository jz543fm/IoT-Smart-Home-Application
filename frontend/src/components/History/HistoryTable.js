import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'items',
    label: 'Items',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(name, date, action, items) {
  return { name, date, action, items };
}

const rows = [
  createData('Tomas', '1.5.2021 15:45', "Change color", "[1,2,3,4]"),
  createData('Juraj', '2.5.2021 20:15', "Turn On All", "All"),
  createData('Tomas', '3.5.2021 18:43', "Turn Off All", "All"),
  createData('Tomas', '4.5.2021 19:10', "Change color", "[21,22,23]"),
  createData('Juraj', '5.5.2021 15:13', "Turn Off All", "All"),
  createData('Tomas', '6.5.2021 8:59', "Turn Off Selected", "[1,3,5,7,9]"),
  createData('Juraj', '7.5.2021 10:54', "Turn On Selected", "[1,2]"),
  createData('Tomas', '8.5.2021 8:25', "Turn On All", "All"),
  createData('Juraj', '9.5.2021 9:24', "Turn Off All", "All"),
  createData('Tomas', '1.5.2021 11:16', "Change color", "[90,91,92,98,97]"),
  createData('Tomas', '3.5.2021 19:35', "Turn Off All", "All"),
  createData('Juraj', '5.5.2021 12:58', "Turn On Selected", "[12]"),
  createData('Juraj', '8.5.2021 17:18', "Change color", "[45,46,47,48]"),
  createData('Tomas', '6.5.2021 21:19', "Turn On All", "All"),
  createData('Juraj', '9.5.2021 22:38', "Change color", "[56,57,58,59]"),
  createData('Tomas', '1.5.2021 15:45', "Change color", "[1,2,3,4]"),
  createData('Juraj', '2.5.2021 20:15', "Turn On All", "All"),
  createData('Tomas', '3.5.2021 18:43', "Turn Off All", "All"),
  createData('Tomas', '4.5.2021 19:10', "Change color", "[21,22,23]"),
  createData('Juraj', '5.5.2021 15:13', "Turn Off All", "All"),
  createData('Tomas', '6.5.2021 8:59', "Turn Off Selected", "[1,3,5,7,9]"),
  createData('Juraj', '7.5.2021 10:54', "Turn On Selected", "[1,2]"),
  createData('Tomas', '8.5.2021 8:25', "Turn On All", "All"),
  createData('Juraj', '9.5.2021 9:24', "Turn Off All", "All"),
  createData('Tomas', '1.5.2021 11:16', "Change color", "[90,91,92,98,97]"),
  createData('Tomas', '3.5.2021 19:35', "Turn Off All", "All"),
  createData('Juraj', '5.5.2021 12:58', "Turn On Selected", "[12]"),
  createData('Juraj', '8.5.2021 17:18', "Change color", "[45,46,47,48]"),
  createData('Tomas', '6.5.2021 21:19', "Turn On All", "All"),
  createData('Juraj', '9.5.2021 22:38', "Change color", "[56,57,58,59]"),
];

const useStyles = makeStyles({
  root: {
    width: '97%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
