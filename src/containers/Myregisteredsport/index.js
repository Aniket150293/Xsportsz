import React from 'react'
import { useState ,useEffect} from 'react';
import { connect } from 'react-redux';
import { Form,Table,Modal,Row,Input } from "reactstrap";
import {getMysport} from '../../actions/index';


export default function Myregisteredsport({getMysport,getMysportsuccess}) {

const data=[{
  id:1,
  name:'a',
  age:22
},
{ 
    id:2,
    name:'b',
    age:44
}];


const [data1,setdata]=useState([]);

React.useEffect(()=>{
  if(getMysportsuccess)
    if(getMysportsuccess.status==200){
        setdata(getMysportsuccess.data);
    }
},[getMysportsuccess]);


useEffect(()=>{
  getMysport(
    { userid: localStorage.getItem("userid") },
    localStorage.getItem("token")
  );

},[])




  return (
    <div>
   
    <Form className="shadow card mt-5">
                <div className="card-body">
                <Table responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>SRNO</th>
                      <th>sport Name</th>
                      <th>specilization</th>
                      <th>date</th>
                    
                      
                    </tr>
                  </thead>
                  <tbody>
                  {data1 
                   ?data1.map(item=>{
                    return(
                      <tr>
                        <td color="red" >name{item.name}</td>
                      </tr>
                    )
                   }):"notfound"}
                      
                    
                  </tbody>
                </Table>
                </div>

            </Form>

           
    </div>
  );
    
    
     
  
}

const mapDispatchToProps =  {
  getMysport:getMysport
};

const mapStateToProps = (state) => ({
  getMysportsuccess:state.getMysportsuccess
});

 Myregisteredsport=connect( mapStateToProps, mapDispatchToProps)(Myregisteredsport);
