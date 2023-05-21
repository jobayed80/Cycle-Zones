import React, {useState , useEffect} from 'react'
import NavMenuDash from './NavMenuDash'
import HeaderMenu from './HeaderMenu'
import { MdQrCodeScanner } from 'react-icons/md'
import { FaTachometerAlt } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'
import { GiWantedReward } from 'react-icons/gi'
import { GiRefinery } from 'react-icons/gi'
import { Box, Grid } from '@mui/material';
import BarChart from '../../components/BarChart'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Model from './Model'


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };



const dashboard = () => {


  // const [open, setOpen] = useState(false)
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);



  return (
    <div>
      <Model></Model>
      {/* <HeaderMenu></HeaderMenu> */}
     
    </div>
  )
}

export default dashboard