import React from "react";

import Contacts from "./Components/Contacts/Contacts";


function App() {
  return (
        <div className = "contact">
            <Contacts  contacts={data}/>
        </div>   
    
  )
}

export default App;

const data=[
  {
  id:1,
  fName:'Ousman',
  lName:'Dibbasey',
  initial:'',
  primaryNumber:7876547,
  secondaryNumber:9876543,
  Address:'Banjul',
  email:'ous@yahoo.com'

},
{
   id:2,
  fName:'Alieu',
  lName:'Badjie',
  initial:'',
  primaryNumber:7272468,
  secondaryNumber:9876543,
  Address:'Banjul',
  email:'alieu@yahoo.com'

},
{
id:3,
  fName:'Modou',
  lName:'Secka',
  initial:'',
  primaryNumber:8899977,
  secondaryNumber:9876543,
  Address:'Banjul',
  email:'modou@yahoo.com'

},
{
id:4,
  fName:'Omar',
  lName:'Njie',
  initial:'',
  primaryNumber:7787654,
  secondaryNumber:9876543,
  Address:'Banjul',
  email:'oms@yahoo.com'

}
]












