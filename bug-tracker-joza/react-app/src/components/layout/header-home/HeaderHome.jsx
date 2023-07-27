import React from "react";
import {Link} from "react-router-dom";

 const HeaderHomePage = () => {
     return(
         <div>
             <header>
                 <nav>
                     <ul>
                         <li><Link to="/ticket/create">Create Ticket</Link></li>
                     </ul>
                 </nav>
             </header>
         </div>
     )
 }
 export default HeaderHomePage;