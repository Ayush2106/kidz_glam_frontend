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

function PrivacyPolicy() {
    return (
        <Layout title={'PrivacyPolicy-KidzGlam Corner'}>
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
                            Privacy Policy
                        </Typography>
                        <hr style={{color:'#231B44'}} />

                        {/* agdhslkfdmdl */}
                        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                        KidzGlam Corner Privacy Policy                        </Typography>
                        <Typography variant='body2' style={{}}>
                        KidzGlam Corner ("we," "us," or "our") respects your privacy and is committed to protecting your personal information.
                        </Typography>
                        {/* ad */}
                        <Typography variant="body2" component="div">
                            <ol>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                        Information We Collect:                                    </Typography>
                                    <Typography variant="body2">
                                    We collect several types of information when you use our website or services to explore and purchase kids' toys and makeup items.

                                        <Typography variant="body2" gutterBottom>
                                            <ul>
                                                <li><span style={{ fontWeight: 'bold' }}>Information You Provide:</span> We collect information that you voluntarily provide to us, such as your name, email address, billing address, shipping address, and phone number when you create an account, place an order, subscribe to our newsletter, or contact customer service.
                                                </li>
                                                <li><span style={{ fontWeight: 'bold' }}>Information We Collect Automatically:</span> When you visit the Site, we may automatically collect certain information about your device, such as your IP address, browser type, operating system, and browsing activity. We may also collect information about your interaction with the Site, such as the pages you visit and the products you view.
                                                </li>
                                                <li><span style={{ fontWeight: 'bold' }}>Cookies and Tracking Technologies:</span> We may use cookies and other tracking technologies to collect information about your activity on the Site. Cookies are small data files that are stored on your device when you visit a website. They can be used to remember your preferences, track your browsing activity, and target advertising to you.
                                                </li>
                                            </ul>
                                        </Typography>
                                    </Typography>
                                </li>

                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                    Use of Your Information:                                  </Typography>
                                    <Typography variant="body2">
                                    We use the information we collect for the following purposes:
                                        <Typography variant="body2" gutterBottom>
                                            <ul>
                                                <li>To process your orders and fulfill your requests </li>
                                                <li>To provide you with customer service. </li>
                                                <li>To personalize your experience on the Site and Services </li>
                                                <li>To send you marketing communications, such as newsletters and promotional offers. </li>
                                                <li>To analyze how you use the Site and Services in order to improve them. </li>
                                                <li>To comply with the law</li>
                                            </ul>
                                        </Typography>
                                    </Typography>
                                </li>

                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                    Sharing Your Information:                                   </Typography>
                                    <Typography variant="body2">
                                    We may share your information with third-party service providers who help us operate the Site and Services, such as payment processors, shipping companies, and marketing agencies. These third-party service providers are obligated to use your information only for the purposes we have disclosed to them.
                                    </Typography>
                                    <Typography variant="body2">
                                    We may also disclose your information if we are required to do so by law or in the good faith belief that such disclosure is necessary to protect our rights or the rights of others.
                                    </Typography>
                                </li>

                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                    Your Choices:                                   </Typography>
                                    <Typography variant="body2">
                                    You have the following choices regarding your information:
                                        <Typography variant="body2" gutterBottom>
                                            <ul>
                                                <li>You can opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails.
                                                </li>
                                                <li>You can control cookies by changing the settings in your browser. Please note that disabling cookies may limit your ability to use certain features of the Site.
                                                </li>
                                            </ul>
                                        </Typography>
                                    </Typography>
                                </li>
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                    Data Security:                                 </Typography>
                                    <Typography variant="body2">
                                    We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure. We cannot guarantee the security of your information.
                                    </Typography>
                                  
                                </li>

                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                    Changes to this Privacy Policy:                               </Typography>
                                    <Typography variant="body2">
                                    We may update this Privacy Policy from time to time. We will post any changes to this Privacy Policy on the Site. We encourage you to review this Privacy Policy periodically for changes.
                                    </Typography>
                                </li>

                                
                                <li>
                                <Typography variant="body1" style={{fontWeight:550,lineHeight:0.5}} gutterBottom>
                                    Contact Us:
                                  </Typography>
                                    <Typography variant="body2">
                                    If you have any questions about this Privacy Policy, please contact us by email at <span style={{ fontWeight: 'bold',cursor:'pointer' }}>ayush21singla@gmail.com</span> or by phone at <span style={{ fontWeight: 'bold',cursor:'pointer' }}>91-9817674090</span>.
                                    </Typography>
                                </li>


                            </ol>
                        </Typography>


                    </CardContent>
                </CustomCard>
            </Box>
        </Layout>
    );
}

export default PrivacyPolicy;
