import axios from 'axios';
import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CustomerDetails from './CustomerDetails';

import "bootstrap/dist/css/bootstrap.min.css";
export default class Customers extends React.Component
{

constructor(props)
{
    super(props)
    this.state={
        selectedCustomer :1
    }
}

componentDidMount()
{
    this.getCustomerData();
}

getCustomerData()
{
    axios.get('assets/samplejson/customerlist.json').then(response => {
       this.setState({customerList:response.data})
    })
}

render()
{
    console.log(this.state.customerList);
    if(!this.state.customerList)
    return(<p>Loading data</p>)
    return(<div className=''>
        <div className='col-md-4'>
            {
                
          this.state.customerList.map(customer => 
          {
         return(<>
                <Card style={{ position:'relative' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body key={customer.name}>
                    <Card.Title>{customer.name}</Card.Title>
                    <Card.Text>
                    <p>{customer.email}</p>
            <p>{customer.phone}</p>
                    </Card.Text>
                    <Button variant="primary"  onClick={() => this.setState({selectedCustomer: customer.id})}> Click to View Details</Button>
                  </Card.Body>
                </Card>
                </>)
})
    
          
        //   <Card bsStyle="info" key={customer.name} className="centeralign">
        //   <Card.Heading>
        //     <Card.Title componentClass="h3">{customer.name}</Card.Title>
        //   </Card.Heading>
        //   <Card.Body>
        //     <p>{customer.email}</p>
        //     <p>{customer.phone}</p>
        //     <Button bsStyle="info" onClick={() => this.setState({selectedCustomer: customer.id})}>

             

        //     </Button>

        //   </Card.Body>
        // </Card>)
}

    </div>
   
    <div className="col-md-6" style={{marginTop:'auto'}}>
      <CustomerDetails val={this.state.selectedCustomer}/>
    </div>
        
    </div>)
}

}