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

function TermsCondition() {
    return (
        <Layout title={'Terms&Condition-KidzGlam Corner'}>
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
                            Terms And Conditions 
                        </Typography>
                        <hr style={{color:'#231B44'}} />
                           {/* retur and refund */}
                        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                        KidzGlam Corner Terms & Conditions
                        </Typography>
                        <Typography variant='body2'>
                            Thank you for visiting the KidzGlam Corner website (KidzGlam Corner.com). By accessing or using the Site, you agree to be bound by the following terms and conditions. These Terms govern your access to and use of the Site, and all content, services, and products available through the Site.
                        </Typography>

                        <Typography component="div">
                            <ol>
                                <li>
                                    {/* <Typography component="span"> */}
                                    <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Acceptance of Terms:
                                    </Typography>
                                    <Typography variant="body2">
                                        Your access to and use of the Services constitutes your acceptance of these Terms. If you do not agree with all of these Terms, you are prohibited from using the Services. These Terms apply to all users of the Services, including without limitation, users who are browsers, vendors, customers, merchants, and/or contributors of content.
                                    </Typography>
                                </li>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Changes to Terms:
                                    </Typography>
                                    <Typography variant="body2">
                                        We reserve the right to update, modify or replace any part of these Terms at any time without prior notice. It is your responsibility to check these Terms periodically for changes. Your continued use of or access to the Services following the posting of any changes to these Terms constitutes acceptance of those changes.            </Typography>
                                </li>

                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        User Accounts:
                                    </Typography>
                                    <Typography variant="body2">
                                        You may be required to create an account to access certain features of the Services. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account or any other security breach. KidzGlam Corner shall not be liable for any loss or damage arising from your failure to comply with these security obligations            </Typography>
                                </li>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Orders and Payment:
                                    </Typography>
                                    <Typography variant="body2">
                                        If you wish to purchase any product or service made available through the Services ("Product"), you may be asked to provide certain information relevant to your purchase, including your credit card information, billing address, and shipping information. You represent and warrant that you have the right to use any credit card or other payment method used in connection with any order. The price of all products are displayed on the site. We reserve the right to change our prices at any time.            </Typography>
                                </li>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Shipping:            </Typography>
                                    <Typography variant="body2">
                                        We will ship your Products to the address you specify during the checkout process. Shipping times may vary depending on your location and the shipping method you select. Shipping costs are calculated at checkout.            </Typography>
                                </li>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Returns and Refunds:          </Typography>
                                    <Typography variant="body2">
                                        Please refer to our separate Return & Refund Policy for information on our return and refund procedures.            </Typography>
                                </li>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Intellectual Property:         </Typography>
                                    <Typography variant="body2">
                                        The Site and all content, materials, and other intellectual property on the Site, including, without limitation, logos, trademarks, copyrights, trade secrets, and patents (collectively, the "Intellectual Property"), are owned by KidzGlam Corner or its licensors. You agree not to use, reproduce, modify, distribute, transmit, display, publish, sell, license, or create derivative works from the Intellectual Property without the prior written consent of KidzGlam Corner.
                                    </Typography>
                                </li>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Third-Party Links:          </Typography>
                                    <Typography variant="body2">
                                        The Site may contain links to third-party websites or services that are not owned or controlled by KidzGlam Corner. KidzGlam Corner has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You access and use such third-party websites or services at your own risk.            </Typography>
                                </li>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Disclaimer:           </Typography>
                                    <Typography variant="body2">
                                        The Services are provided on an "as is" and "as available" basis. KidzGlam Corner makes no representations or warranties of any kind, express or implied, with respect to the operation of the Services, or the information, content, materials, or products included on the Site. You expressly agree that your use of the Services is at your own risk.            </Typography>
                                </li>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Limitation of Liability:         </Typography>
                                    <Typography variant="body2">
                                        To the extent permitted by applicable law, KidzGlam Corner shall not be liable for any damages whatsoever, and in particular KidzGlam Corner shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including, without limitation, damages for loss of profits, loss of revenue, loss of data, business interruption, or personal injury, arising out of or in connection with the use of the Services or the Products, even if KidzGlam Corner has been advised of the possibility of such damages.            </Typography>
                                </li>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Termination:           </Typography>
                                    <Typography variant="body2">
                                        We may terminate or suspend your access to the Services at any time, without notice or reason. You may also terminate these Terms at any time by discontinuing your use of the Services.            </Typography>
                                </li>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Governing Law:            </Typography>
                                    <Typography variant="body2">
                                        These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions            </Typography>
                                </li>


                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Entire Agreement:            </Typography>
                                    <Typography variant="body2">
                                        These Terms constitute the entire agreement between you and KidzGlam Corner with respect to your use of the Services and supersede all prior or contemporaneous communications and proposals, whether oral or written.            </Typography>
                                </li>
                            </ol>
                        </Typography>
                    </CardContent>
                </CustomCard>
            </Box>
        </Layout>
    );
}

export default TermsCondition;
