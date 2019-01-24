import React from "react";

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleInputChange(e) {
        const target = event.target;
        const name = target.name;

        this.props.onFilterChange(name, target.value);
    }

    handleSearch() {
        this.props.onSearch();
    }

    render() {
        return (<div className="filterBar">
            <form>
                <label>
                    UserID:
                    <input name="userId" className="filterBarInput" value={this.props.userId} onChange={this.handleInputChange} />
                </label>

                <label>
                    Name:
                    <input name="name" className="filterBarInput" value={this.props.name} onChange={this.handleInputChange} />
                </label>

            </form>
            <button className="filterBarSearchButton" onClick={this.handleSearch}> Search</button>
        </div>);
    }
}

export default FilterBar;
