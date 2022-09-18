import React from "react";
import {useSelector} from 'react-redux'

function Test() {
    let cart = useSelector(state => state );
  return( 
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{cart.playersList[0].id}</td>
      <td>{cart.playersList[0].name.split(' ')[0]}</td>
      <td>{cart.playersList[0].name.split(' ')[1]}</td>
      <td>{cart.playersList[0].count}</td>
    </tr>
    <tr>
      <td>{cart.playersList[1].id}</td>
      <td>{cart.playersList[1].name.split(' ')[0]}</td>
      <td>{cart.playersList[1].name.split(' ')[1]}</td>
      <td>{cart.playersList[1].count}</td>
    </tr>
  </tbody>
</table> 
)
}

export default Test

