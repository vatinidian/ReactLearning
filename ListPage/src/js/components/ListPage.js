import React from "react";
import UserTable from "./UserTable";

const UserData = [{ userId: "I301164", name: "Venkatesh Manohar", contact: "vekatesh.manohar@gmail.com" }, { userId: "I301165", name: "Tonia Lecentina", contact: "TLS@gmail.com" }, { userId: "I301166", name: "Ferdina Sheriene", contact: "FDI@gmail.com" }];

class ListPage extends React.Component {
    render() {
        return (<div>
            <h1>List Page</h1>
            <UserTable UserData={UserData} />
        </div>);
    }
}

export default ListPage;
