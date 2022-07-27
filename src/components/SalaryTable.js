import React, { useMemo } from 'react'
import { useTable, useFilters, usePagination} from 'react-table'
import maas_anketi from './maas-anketi.json'
import { COLUMNS } from './columns'
import './table.css'
import { ColumnFilter } from './ColumnFilter'

export const SalaryTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => maas_anketi.RECORDS, [])

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    },[])

    const { getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        setPageSize, 
        prepareRow,
    } = useTable({
        columns,
        data,
        defaultColumn,
    },useFilters,
    usePagination,
    ) 

    const { pageIndex, pageSize } = state

    return ( 
        <>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                        ))}
                    </tr>       
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps}> 
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')} </td> 
                                })}
                            </tr>
                        )
                })}
            </tbody>
        </table>
        <div>
            <span class='pageInfo'>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' | '}

            </span>
            <select value={pageSize} onChange={(e)=>setPageSize(Number(e.target.value))}>
                {
                    [10, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))
                }
            </select>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
        </>
    )
}   