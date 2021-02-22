import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import API from "./utils/API";

class App extends Component {
  state = {
    employees: [],
    search: "",
    allEmployees: [],
  };

  componentDidMount() {
    this.listEmployees(
      "?inc=name,picture,location,registered,email,phone,dob&nat=US&results=30"
    );
  }

  listEmployees = (query) => {
    console.log("Got here");
    API.getUsers(query)
      .then((res) => {
        this.setState({
          employees: res.data.results,
          allEmployees: res.data.results,
        });
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  removeEmployee = (id) => {
    const employees = this.state.employees.filter(
      (employee) => this.state.employees.indexOf(employee) !== id
    );
    this.setState({ employees });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const employees = this.state.allEmployees.filter((employee) =>
      employee.name.trim().toLowerCase().includes(value.trim().toLowerCase())
    );
    this.setState({ employees });
  };

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Search />

        <Wrapper>
          {/* Map over this.state.employees and render an EmployeeCard component for each employee object */}
          {this.state.employees.map((employee) => (
            <EmployeeCard
              removeEmployee={this.removeEmployee}
              id={this.state.employees.indexOf(employee)}
              key={this.state.employees.indexOf(employee)}
              name={`${employee.name.title} ${employee.name.first} ${employee.name.last}`}
              email={employee.email}
              phone={employee.phone}
              image={employee.picture.medium}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
