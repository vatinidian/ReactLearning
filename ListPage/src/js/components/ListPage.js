import React from "react";
import FilterBar from "./FilterBar";
import UserTable from "./UserTable";

const UserData = [{ userId: "UserId_4", name: "User Mad Person", contact: "Mad.Person@gmail.com" }, { userId: "UserId_5", name: "Lovely Girl", contact: "Lovely.Girl@gmail.com" }, { userId: "UserId_6", name: "GodIsThere?", contact: "FDI@gmail.com" }, { userId: "UserId_4", name: "User Mad Person", contact: "Mad.Person@gmail.com" }, { userId: "UserId_5", name: "Lovely Girl", contact: "Lovely.Girl@gmail.com" }, { userId: "UserId_6", name: "GodIsThere?", contact: "FDI@gmail.com" }, { userId: "UserId_4", name: "User Mad Person", contact: "Mad.Person@gmail.com" }, { userId: "UserId_5", name: "Lovely Girl", contact: "Lovely.Girl@gmail.com" }, { userId: "UserId_6", name: "GodIsThere?", contact: "FDI@gmail.com" }, { userId: "UserId_4", name: "User Mad Person", contact: "Mad.Person@gmail.com" }, { userId: "UserId_5", name: "Lovely Girl", contact: "Lovely.Girl@gmail.com" }, { userId: "UserId_6", name: "GodIsThere?", contact: "FDI@gmail.com" }, { userId: "UserId_4", name: "User Mad Person", contact: "Mad.Person@gmail.com" }, { userId: "UserId_5", name: "Lovely Girl", contact: "Lovely.Girl@gmail.com" }, { userId: "UserId_6", name: "GodIsThere?", contact: "FDI@gmail.com" }, { userId: "UserId_4", name: "User Mad Person", contact: "Mad.Person@gmail.com" }, { userId: "UserId_5", name: "Lovely Girl", contact: "Lovely.Girl@gmail.com" }, { userId: "UserId_6", name: "GodIsThere?", contact: "FDI@gmail.com" }, { userId: "UserId_4", name: "User Mad Person", contact: "Mad.Person@gmail.com" }, { userId: "UserId_5", name: "Lovely Girl", contact: "Lovely.Girl@gmail.com" }, { userId: "UserId_6", name: "GodIsThere?", contact: "FDI@gmail.com" }];

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
