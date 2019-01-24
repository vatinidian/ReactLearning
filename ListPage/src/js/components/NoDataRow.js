import React from "react";

class NoDataRow extends React.Component {
    render() {
        return (<tr className="noDataRow">
            <td colSpan="100%">
                {this.props.message}
            </td>
        </tr>);
    }
}

export default NoDataRow;
