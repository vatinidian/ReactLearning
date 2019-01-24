import React from "react";
import UserTableRow from "./UserTableRow";
import NoDataRow from "./NoDataRow";

class UserTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const rows = [];
        const oFilterData = this.props.filterData;
        const aKeys = Object.keys(oFilterData);
        const iLength = aKeys ? aKeys.length : 0;

        this.props.UserData.forEach((user, iIndex) => {
            let bFiltersMatched = iLength ? false : true;
            for (let i = 0; i < iLength; i++) {
                if (user[aKeys[i]].toUpperCase().indexOf(oFilterData[aKeys[i]].toUpperCase()) === -1) {
                    bFiltersMatched = false;
                    break;
                } else if (oFilterData[aKeys[i]]) {
                    bFiltersMatched = true;
                }
            }

            if (bFiltersMatched) {
                rows.push(<UserTableRow userId={user.userId} name={user.name} contact={user.contact} key={user.userId + iIndex} />);
            }

        });

        if (!rows.length) {
            rows.push(<NoDataRow message="No Data Found ! Please adjust your search or We are Mad" key="message" />);
        }
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
