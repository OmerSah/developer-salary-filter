export const COLUMNS = [
    {
        Header: 'Level',
        accessor: 'level',
    },
    {
        Header: 'Position',
        accessor: 'position',
    },
    {
        Header: 'Tech Stack',
        accessor: 'tech_stack',
    },
    {
        Header: 'Experience',
        accessor: 'experience',
    },
    {
        Header: 'Gender',
        accessor: 'gender',
    },
    {
        Header: 'Company',
        accessor: 'company',
    },
    {
        Header: 'Company Size',
        accessor: 'company_size',
    },
    {
        Header: 'Work Type',
        accessor: 'work_type',
    },
    {
        Header: 'City',
        accessor: 'city',
    },
    {
        Header: 'Salary',
        accessor: 'salary_for_other_currency',
        Cell: (props) => {
            if(!props.row.original.salary_for_other_currency) {
                return (
                    <>
                       <p>{props.row.original.salary_for_tl_currency}</p>
                    </>
                )
            }
            else {
                return (
                    <>
                       <p>{props.row.original.salary_for_other_currency + " " + props.row.original.currency[0]}</p>
                    </>
                )
            }
        },
    },
]
