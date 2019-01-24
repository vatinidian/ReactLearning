import React from "react";

class UserTableRow extends React.Component {
    render() {
        return (<tr>
            <td>
                {this.props.userId}
            </td>
            <td>
                {this.props.name}
            </td>
            <td>
                {this.props.contact}
            </td>
        </tr>);
    }
}

export default UserTableRow;
