import React from 'react'
import './TrackOrderPage.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Layout from '../../components/Layout/Layout';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('#2321', 'WashingMachine', 'Cash', 'Dispatched', 18600),
    createData('#2369', 'GodrejFridge', 'Wallet', 'Pending', 26800),
    createData('#2385', 'OrientAirConditioning', 'UPI', 'Dispatched', 25600),
    createData('#2342', 'Hitachi Cooler', 'DebitCard', 'Delivered', 29300),
    createData('#2316', 'BellaVita Perfume', 'CreditCard', 'Return/Refund', 860),
  ];

function TrackOrderPage() {
  return (
    <Layout title={'TrackOrder-KidzGlam Corner'}>
    <div className='trackordersection'>
        <div className='trackorderheading'>
Track Order  </div> 
        <div className='trackordermain'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='tablerowtrack'>
            <TableCell>Order Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Payment</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className='tablerowtrackkk'
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
    </div>
          
          </Layout>
  )
}

export default TrackOrderPage
