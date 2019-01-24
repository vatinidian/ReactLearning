import React from "react";
import FilterBar from "./FilterBar";
import UserTable from "./UserTable";

const UserData = [{ userId: "I301164", name: "Venkatesh Manohar", contact: "vekatesh.manohar@gmail.com" }, { userId: "I301165", name: "Tonia Lecentina", contact: "TLS@gmail.com" }, { userId: "I301166", name: "Ferdina Sheriene", contact: "FDI@gmail.com" }, { userId: "I301164", name: "Venkatesh Manohar", contact: "vekatesh.manohar@gmail.com" }, { userId: "I301165", name: "Tonia Lecentina", contact: "TLS@gmail.com" }, { userId: "I301166", name: "Ferdina Sheriene", contact: "FDI@gmail.com" }, { userId: "I301164", name: "Venkatesh Manohar", contact: "vekatesh.manohar@gmail.com" }, { userId: "I301165", name: "Tonia Lecentina", contact: "TLS@gmail.com" }, { userId: "I301166", name: "Ferdina Sheriene", contact: "FDI@gmail.com" }, { userId: "I301164", name: "Venkatesh Manohar", contact: "vekatesh.manohar@gmail.com" }, { userId: "I301165", name: "Tonia Lecentina", contact: "TLS@gmail.com" }, { userId: "I301166", name: "Ferdina Sheriene", contact: "FDI@gmail.com" }, { userId: "I301164", name: "Venkatesh Manohar", contact: "vekatesh.manohar@gmail.com" }, { userId: "I301165", name: "Tonia Lecentina", contact: "TLS@gmail.com" }, { userId: "I301166", name: "Ferdina Sheriene", contact: "FDI@gmail.com" }, { userId: "I301164", name: "Venkatesh Manohar", contact: "vekatesh.manohar@gmail.com" }, { userId: "I301165", name: "Tonia Lecentina", contact: "TLS@gmail.com" }, { userId: "I301166", name: "Ferdina Sheriene", contact: "FDI@gmail.com" }, { userId: "I301164", name: "Venkatesh Manohar", contact: "vekatesh.manohar@gmail.com" }, { userId: "I301165", name: "Tonia Lecentina", contact: "TLS@gmail.com" }, { userId: "I301166", name: "Ferdina Sheriene", contact: "FDI@gmail.com" }];

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "userId": "",
            "name": "",
            "filterBarInfo": {
            }
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleFilterChange(sFielName, sValue) {
        this.setState({ [sFielName]: sValue });

    }
    handleSearch() {
        this.setState((state) => {
            if (state.userId || state.name) {
                return {
                    "filterBarInfo": {
                        "userId": state.userId,
                        "name": state.name
                    }
                }
            } else {
                return { "filterBarInfo": {} }
            }
        }
        );

    }
    render() {
        return (<div>
            <h1>User List</h1>
            <FilterBar userId={this.state.userId} name={this.state.name} onFilterChange={this.handleFilterChange} onSearch={this.handleSearch} />
            <UserTable UserData={UserData} filterData={this.state.filterBarInfo} />
        </div>);
    }
}

export default ListPage;
