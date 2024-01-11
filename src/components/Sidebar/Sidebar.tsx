import { MenuItem, Select, SvgIcon, selectClasses } from '@mui/material'
import { styled } from '@mui/material/styles'
import { MdClose, MdCode, MdInfoOutline } from 'react-icons/md'
import BrandLogo from '../../assets/icons/logo.svg'
import FilledButton from '../FilledButton/FilledButton'
import './Sidebar.css'
import { DropdownIcon } from '../Icons/Icons'
import { useNavigate } from 'react-router-dom'

const CustomizedSelect = styled(Select)(() => ({
  '&.MuiOutlinedInput-root': {
    height: '50px',
    fontFamily: 'IBM Plex Sans',
    '& fieldset': {
      borderColor: '#e8ebeb',
    },
    '&:hover fieldset': {
      borderColor: '#e8ebeb',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
}))

const Sidebar = (props: any) => {
  const navigation = useNavigate()

  return (
    <div className="sidebar">
      <div className="sidebar-heading">
        <div className="sidebar-heading__content">
          <div className="logo ">
            <img src={BrandLogo} alt="deliveroo brand logo" />
          </div>

          <MdClose
            className="cyan"
            size={30}
            onClick={() => props.toggleSidebar()}
          />
        </div>
      </div>
      <div className="sidebar-body">
        <FilledButton
          onClick={() => {
            props.toggleSidebar()
            navigation('/login')
          }}
        >
          <p>Sign up or log in</p>
        </FilledButton>

        <div className="sidebar-body__info">
          <MdInfoOutline color="#abadad" size={25} />
          <p>FAQs</p>
        </div>

        <div className="spacer" />

        <CustomizedSelect
          value="English"
          className="select-fields"
          IconComponent={(props) => <DropdownIcon {...props} />}
        >
          <MenuItem value={'English'}>English</MenuItem>
        </CustomizedSelect>

        <CustomizedSelect
          value="United Kingdom"
          className="select-fields"
          variant="outlined"
          IconComponent={(props) => <DropdownIcon {...props} />}
        >
          <MenuItem value={'Australia'}>Australia</MenuItem>
          <MenuItem value={'Belgium'}>Belgium</MenuItem>
          <MenuItem value={'France'}>France</MenuItem>
          <MenuItem value={'Germany'}>Germany</MenuItem>
          <MenuItem value={'Hong Kong'}>Hong Kong</MenuItem>
          <MenuItem value={'Ireland'}>Ireland</MenuItem>
          <MenuItem value={'Italy'}>Italy</MenuItem>
          <MenuItem value={'Kuwait'}>Kuwait</MenuItem>
          <MenuItem value={'Netherlands'}>Netherlands</MenuItem>
          <MenuItem value={'Qatar'}>Qatar</MenuItem>
          <MenuItem value={'Singapore'}>Singapore</MenuItem>
          <MenuItem value={'Spain'}>Spain</MenuItem>
          <MenuItem value={'Taiwan'}>Taiwan</MenuItem>
          <MenuItem value={'United Arab Emirates'}>
            United Arab Emirates
          </MenuItem>
          <MenuItem value={'United Kingdom'}>United Kingdom</MenuItem>
        </CustomizedSelect>
      </div>
    </div>
  )
}

export default Sidebar
