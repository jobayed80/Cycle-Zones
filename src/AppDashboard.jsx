import React, { useEffect, useState } from 'react'

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from './scenes/global/TopBar';
import Dashboard from './scenes/dashboard'
import SideBar from './scenes/global/SideBar';
import Team from './scenes/team'
import Invoices from './scenes/invoices'
import Contacts from './scenes/contacts'
import Bar from './scenes/bar'
import Form from './scenes/form'
import Line from './scenes/line'
import Pie from './scenes/pie'
import FAQ from './scenes/faq'
import Geography from './scenes/geography'
import Calendar from "./scenes/calendar";



const AppDashboard = () => {

    const navigate = useNavigate()

    // useEffect(() => {
    //    navigate('/dashboard')
    //   });

    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);



    return (
        <div className="overflow-x-hidden">
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />




                    <div className="app">


                        <SideBar isSidebar={isSidebar}></SideBar>

                        <div style={{ height: "100%", width: "100%" }}>

                            <main className="content">
                                <TopBar setIsSidebar={setIsSidebar} />
                                <Dashboard></Dashboard>

                            </main>
                        </div>

                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    )
}

export default AppDashboard