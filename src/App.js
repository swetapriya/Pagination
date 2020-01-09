import React,{Component} from 'react';
import Search from './Components/search';
import EmployeeList from './Components/employeelist';
import NextPage from './Components/nextpagenevigation';
import axios from 'axios'
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
        userDetails:[],
        offset: 0,
        perPage: 2,
        pageCount: null,
        activePage: 1,
        itemLength:0,
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  
  receivedData() {
    axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const userDetails = res.data;
            const sliceData = userDetails.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(userDetails.length / this.state.perPage),
                userDetails:sliceData
            })
        });
}
  componentDidMount() {
    this.receivedData();
  }

  handlePageChange(pageNumber) {
    const offset = this.state.activePage * this.state.perPage;
    this.setState({
      activePage: pageNumber,
      offset: offset
      }, () => {
      this.receivedData()
    });
  }
//https://medium.com/how-to-react/create-pagination-in-reactjs-e4326c1b9855
  render() {
    return (
      <div>
        <Search/>
        <EmployeeList 
        userDetails={this.state.userDetails}
        activePage={this.state.activePage}
        handlePageChange={this.handlePageChange}/>
        <NextPage/>
      </div>
      
    );
  }
}

export default App;
