import { Chip } from '@mui/material'
import { ColDef, ICellRendererParams } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { AgGridReact } from 'ag-grid-react'
import { useMemo, useState } from 'react'
import './Dashboard.css'
import { FiCheck, FiEye } from 'react-icons/fi'

// Row Data Interface
interface IRow {
  id: number
  mission: string
  company: string
  location: string
  date: string
  price: number
  status: boolean
}

const ViewButton = (props: ICellRendererParams) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value

  const buttonClicked = () => {
    alert(`${cellValue} View Order`)
  }

  return (
    <span>
      <button
        className="action-button"
        onClick={() => buttonClicked()}
        type="button"
      >
        <FiEye />
      </button>
    </span>
  )
}

const ConfirmButton = (props: ICellRendererParams) => {
  const [status, setStatus] = useState(false)
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value

  const buttonClicked = () => {
    // alert(`${cellValue} Confirm Order`)
    setStatus(true)
  }

  return (
    <span>
      <button
        className="action-button"
        onClick={() => buttonClicked()}
        type="button"
      >
        <FiCheck />
      </button>
      {/* <LoadingButton
        loading={status}
        size="small"
        sx={{ width: '10px' }}
        variant="outlined"
        onClick={buttonClicked}

        // loading={status}
      >
        <FiCheck />
      </LoadingButton> */}
    </span>
  )
}

const StatusRenderer = ({ value }: { value: boolean }) => (
  <div>
    {value ? (
      <Chip variant="filled" size="small" color="success" label="Finished" />
    ) : (
      <Chip variant="filled" size="small" color="warning" label="Pending" />
    )}
  </div>
)

const Dashboard = () => {
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: false,
      flex: 1,
      //   minWidth: 30,
      filter: true,
    }
  }, [])

  const [rowData, setRowData] = useState<IRow[]>([
    {
      id: 1,
      mission: 'Voyager',
      company: 'NASA',
      location: 'Cape Canaveral',
      date: '1977-09-05',
      price: 86580000,
      status: true,
    },
    {
      id: 2,
      mission: 'Apollo 13',
      company: 'NASA',
      location: 'Kennedy Space Center',
      date: '1970-04-11',
      price: 3750000,
      status: false,
    },
    {
      id: 3,
      mission: 'Falcon 9',
      company: 'SpaceX',
      location: 'Cape Canaveral',
      date: '2015-12-22',
      price: 9750000,
      status: true,
    },
  ])

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'status', cellRenderer: 'statusRenderer' },
    {
      field: 'id',
      headerName: ' ',
      width: 10,
      cellRenderer: 'confirmButton',
      cellRendererParams: {
        // clicked: function (field: any) {
        //   alert(`${field} was clicked`)
        // },
      },
    },

    {
      field: 'id',
      headerName: ' ',
      cellRenderer: 'viewButton',
      cellRendererParams: {
        // clicked: function (field: any) {
        //   alert(`${field} was clicked`)
        // },
      },
    },
  ])

  return (
    <div className="dashboard__container">
      <h1>Dashboard</h1>
      <p>Orders</p>

      <div
        className={'ag-theme-quartz'}
        style={{ width: '100vh', height: '500px' }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination
          defaultColDef={defaultColDef}
          components={{
            confirmButton: ConfirmButton,
            statusRenderer: StatusRenderer,
            viewButton: ViewButton,
          }}
        />
      </div>
    </div>
  )
}
export default Dashboard
