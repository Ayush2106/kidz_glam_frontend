import React from 'react';
import Layout from '../../components/Layout/Layout';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled component for the Card with scrollbar styles

const CustomCard = styled(Card)(({ theme }) => ({
    width: '93%', // Default width
    maxHeight: '80vh', // Set the max height to 80% of the viewport height
    overflow: 'auto', // Enable scrolling within the card
    padding: '0rem 2rem', // Default padding
    '&::-webkit-scrollbar': {
      width: '5px', // Width of the scrollbar
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#231B44', // Color of the scrollbar thumb
      borderRadius: '4px', // Rounded corners for the thumb
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#FFEDF3', // Color of the scrollbar track
    },
    [theme.breakpoints.down('sm')]: { // Media query for small screens
      width: '94%', // Set the width to 96% for small screens
      padding: '0rem 1rem', // Reduce padding for small screens
    },
  }));

function ReturnRefundPolicy() {
    return (
        <Layout title={'Return&RefundPolicy-KidzGlam Corner'}>
            <Box
                sx={{
                    backgroundColor: '#FFEDF3',
                    width: '100%',
                    height: '87vh', // Set the height to cover the entire viewport
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CustomCard>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
                        Return & Refund Policy
                       </Typography>
                        <hr style={{color:'#231B44'}} />
                        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                        KidzGlam Corner Return & Refund Policy
                        </Typography>
                        <Typography variant='body2' style={{marginBottom:'0.6rem'}}>
                            We want you to be completely satisfied with your KidzGlam Corner purchase. However, we understand that sometimes products may not meet your expectations. This policy outlines the conditions under which you can return items for a refund.
                        </Typography>

                        {/* <Typography variant="h6" style={{fontWeight:550}} gutterBottom> */}
                        <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                            What can be returned?
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <ul>
                                <li>	You may return unopened, unused, and undamaged cosmetics and makeup brushes within 24 hours of delivery.
                                </li>
                                <li>	Due to hygiene concerns, we cannot accept returns of opened cosmetics, including lipsticks, lipglosses, mascaras, eyeliners, and facial toners, once the seal is broken.</li>
                            </ul>
                        </Typography>

                        <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                            What can't be returned?
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <ul>
                                <li>Opened cosmetics (lipstick, lipgloss, mascara, eyeliner, etc.)
                                </li>
                                <li>Facial toners (once seal is broken)</li>
                                <li>Used or damaged products</li>
                                <li>Products returned after 24 hours of delivery</li>
                            </ul>
                        </Typography>


                        <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                            How to return an item:                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <ul>
                                <li>	Contact KidzGlam Corner customer service within 24 hours of receiving your order, stating your reason for return. You can reach us by email at <span style={{ fontWeight: 'bold',cursor:'pointer' }}>ayush21singla@gmail.com</span> or <span style={{ fontWeight: 'bold' }}>ayush21singla@gmail.com.</span>
                                </li>
                                <li>Upon approval, we will provide you with a Return Merchandise Authorization (RMA) number and instructions on how to return your items.</li>
                                <li>Securely pack the unused, unopened, and undamaged items in the original packaging, if possible</li>
                                <li>Request for returning the package on the website.</li>
                            </ul>
                        </Typography>


                        <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                            Refunds:
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <ul>
                                <li>Once we receive your returned item and verify that it meets the return criteria, we will issue a full refund for the purchase price (excluding original shipping costs) within 5 business days..
                                </li>
                                <li>Refunds will be issued to the original payment method used for the purchase</li>
                            </ul>
                        </Typography>


                        <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                            Exchanges:
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <ul>
                                <li>We currently do not offer exchanges. If you would like a different product, you may return your original item for a refund and then place a new order
                                </li>
                            </ul>
                        </Typography>


                        <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                            Please note:
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <ul>
                                <li>We reserve the right to deny any return that does not meet the above criteria
                                </li>
                            </ul>
                        </Typography>

                        <Typography variant='body2'>
                            We encourage you to review this policy carefully before making a purchase. If you have any questions, please don't hesitate to contact us.
                        </Typography>


                        {/* retur and refund */}
                       


                    </CardContent>
                </CustomCard>
            </Box>
        </Layout>
    );
}

export default ReturnRefundPolicy;
