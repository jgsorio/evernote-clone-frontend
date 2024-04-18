import React from 'react';
import {CDBSidebar, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem} from "cdbreact";
import {Nav} from "react-bootstrap";

const Sidebar = (props) => {

    return (
        <CDBSidebar textColor="#FFF" backgroundColor="#212529" toggled={false} className="" breakpoint={1} maxWidth="100%" minWidth="30%">

            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <Nav.Link onClick={() => props.createNote(true)}>
                        <CDBSidebarMenuItem  icon="fa fa-plus">Create</CDBSidebarMenuItem>
                    </Nav.Link>
                    {
                        props.notes &&
                        (
                            props.notes.map((note, i) => (
                                <Nav.Link key={i} onClick={(e) => props.selectNote(e, note._id)}>
                                    <CDBSidebarMenuItem key={i}>
                                        { note.title }
                                    </CDBSidebarMenuItem>
                                </Nav.Link>
                            ))
                        )
                    }
                </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
    )
}

export default Sidebar;