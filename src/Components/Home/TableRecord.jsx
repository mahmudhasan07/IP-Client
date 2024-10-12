import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useState } from 'react';

const TableRecord = ({ array, loading }) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }
    return (
        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow >
                                <TableCell className='bg-gray-200 w-80'>Serial</TableCell>
                                <TableCell className='bg-gray-200 w-96'>IP</TableCell>
                                <TableCell className='bg-gray-200'>Pointer Of Record</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                loading == true ?
                                <TableRow className='w-full text-center'>
                                <TableCell></TableCell>
                                <TableCell>loading</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                                    :
                                    array.length > 0 ?
                                        array?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, idx) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>

                                                        <TableCell>{idx + 1}</TableCell>
                                                        <TableCell>{row.ip}</TableCell>
                                                        <TableCell className='px-1'>[{
                                                            row.ptr.map((e, idx) => <span key={idx} className={row.ptr.length == idx + 1 ? "" : "mr-2"}>{e},</span>
                                                            )}]</TableCell>
                                                    </TableRow>
                                                );
                                            })
                                        :
                                        <TableRow className='w-full text-center'>
                                            <TableCell></TableCell>
                                            <TableCell>No data Found</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={array?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default TableRecord;