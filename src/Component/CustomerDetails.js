import axios from 'axios';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
export default class CustomerDetails extends React.Component{
constructor(props)
{
    super(props)
    this.state = {}
}

componentDidMount()
{
    this.getCustomerDetails(this.props.val)
}

componentDidUpdate(prevProps)
{
    console.log(this.props,prevProps)
    //get Customer Details only if props has changed
    if(this.props.val !== prevProps.val)
    {
        this.getCustomerDetails(this.props.val)
    }
}
getCustomerDetails(id)
{
    axios.get(`assets/samplejson/customer${id}.json`)
    .then((response)=>{
        this.setState({customerDetails:response.data})
    }
    )
}

render()
{
    if(!this.state.customerDetails)
    return(<p>Loading Data</p>)
    return(
        <div className="customerdetails">
            <Card >
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body key={this.state.customerDetails.name} >
                    <Card.Title>{this.state.customerDetails.name}</Card.Title>
                    <Card.Text>
                    <p>{this.state.customerDetails.name}</p>
                    <p>{this.state.customerDetails.email}</p>
                    <p>{this.state.customerDetails.phone}</p>
                    <p>{this.state.customerDetails.city}</p>
                    <p>{this.state.customerDetails.state}</p>
                    <p>{this.state.customerDetails.country}</p>
                    <p>{this.state.customerDetails.organization}</p>
                    <p>{this.state.customerDetails.jobProfile}</p>
                    <p>{this.state.customerDetails.additionalInfo}</p>
                    
                    </Card.Text>
                    {/* <Button variant="primary"  onClick={() => this.setState({selectedCustomer: customer.id})}> Click to View Details</Button> */}
                  </Card.Body>
                </Card>
        </div>
    )
}
}