import React from "react";
import UserTableRow from "./UserTableRow";

class UserTable extends React.Component {
    render() {
        const rows = [];
        this.props.UserData.forEach(user => {
            rows.push(<UserTableRow userId={user.userId} name={user.name} contact={user.contact} key={user.userId} />);
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
