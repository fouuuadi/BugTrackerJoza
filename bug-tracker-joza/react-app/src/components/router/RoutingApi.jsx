import {BrowserRouter, Route, Routes} from "react-router-dom";
import TicketList from "../../pages/ticket-list/TicketList";
import TicketUpdate from "../../pages/ticket-update/TicketUpdate";
import TicketCreate from "../../pages/ticket-create/TicketCreate";
import TicketSingle from "../../pages/ticket-single/TicketSingle";

const BugTrackerRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TicketList/>}/>
                <Route path="/ticket/:id/update" element={<TicketUpdate/>}/>
                <Route path="/ticket/create" element={<TicketCreate/>}/>
                <Route path="/ticket/:id" element={<TicketSingle/>}/>
                <Route path="*" element={<div>Page not found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default BugTrackerRouter;