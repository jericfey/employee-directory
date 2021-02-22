import React from "react";
import "./style.css";

const Search = () => {
 
  return (
    <div className="searchbox">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            Search
          </span>
        </div>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Type search criteria such as Employee Name"
          aria-label="Search"
          // value={this.state.name}
        //   onChange={(e) => context.handleSearchChange(e)}
        />
      </div>
    </div>
  );
};
export default Search;
