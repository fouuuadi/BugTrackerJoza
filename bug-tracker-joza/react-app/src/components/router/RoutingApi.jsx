import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import TicketList from "../../pages/ticket-list/TicketList";
import TicketUpdate from "../../pages/ticket-update/TicketUpdate";
import TicketCreate from "../../pages/ticket-create/TicketCreate";
import TicketSingle from "../../pages/ticket-single/TicketSingle";
import NotFound from "../../pages/Error/404";

const BugTrackerRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TicketList/>}/>
                <Route path="/ticket/:id/update" element={<TicketUpdate/>}/>
                <Route path="/ticket/create" element={<TicketCreate/>}/>
                <Route path="/ticket/:id" element={<TicketSingle/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default BugTrackerRouter;