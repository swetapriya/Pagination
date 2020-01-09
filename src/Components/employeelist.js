import React from 'react';
import {Table} from 'react-bootstrap';
import Pagination from 'react-js-pagination';


function EmployeeList (props){
    return (
      <div>
        <Table striped bordered hover size="sm">
            <thead style= {{"color":"blue"}}>
                <tr>
                    <th>FULL NAME</th>
                    <th>PHONE</th>
                    <th>USER NAME</th>
                    <th>COMPANY NAME</th>
                </tr>
            </thead>
            <tbody>
              {props.userDetails.map((userDetail,index) => (
              <tr key={userDetail.id}>
                <td key={userDetail.id}>{userDetail.name}</td>
                <td key={userDetail.phone}>{userDetail.phone}</td>
                <td key={userDetail.username}>{userDetail.username}</td>
                <td key={userDetail.company.name}>{userDetail.company.name}</td>
              </tr>
              ))}
            </tbody>
        </Table>

        <Pagination
        activePage={props.activePage}
        itemsCountPerPage={2}
        totalItemsCount={10}
        pageRangeDisplayed={5}
        onChange={props.handlePageChange}/>
      </div>
    );
  }

export default EmployeeList;