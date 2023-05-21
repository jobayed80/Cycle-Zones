import React from 'react'
import Dashboard from './pages/DashMenu/dashboard'
import QRcode from './pages/QR/QRcode'
import Payment from './pages/PaymentGateway/payment'
import Notification from './pages/DashMenu/Notification'




import { BrowserRouter, Routes, Route } from 'react-router-dom'
const AppMenu = () => {
  return (
    <div>
      
        <BrowserRouter>
        <Routes>

          <Route path="/dashboard" element={<Dashboard></Dashboard>}> </Route>
          <Route path="/qrCode" element={<QRcode></QRcode>}> </Route>
          <Route path="/payment" element={<Payment></Payment>}> </Route>
          <Route path="/notification" element={<Notification></Notification>}> </Route>

         

          

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default AppMenu