import React from "react";
import UserTableRow from "./UserTableRow";

class UserTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const rows = [];
        const oFilterData = this.props.filterData;
        const aKeys = Object.keys(oFilterData);
        const iLength = aKeys ? aKeys.length : 0;

        this.props.UserData.forEach(user => {
            let bFiltersMatched = iLength ? false : true;
            for (let i = 0; i < iLength; i++) {
                if (oFilterData[aKeys[i]] && user[aKeys[i]].toUpperCase().indexOf(oFilterData[aKeys[i]].toUpperCase()) !== -1) {
                    bFiltersMatched = true;
                    break;
                } else {
                    bFiltersMatched = bFiltersMatched || false;
                }
            }

            if (bFiltersMatched) {
                rows.push(<UserTableRow userId={user.userId} name={user.name} contact={user.contact} key={user.userId} />);
            }

        });
        return (<table className="table">
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Name</th>
                    <th>Contact</th>
                </tr>
            </thead>

            <tbody>{rows}</tbody>
        </table>)
    }
}

export default UserTable;
