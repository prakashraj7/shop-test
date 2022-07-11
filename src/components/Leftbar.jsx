import { Box, Container, makeStyles } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Leftbar = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block", paddingTop: "6%" } }}  >
            <Box position="sticky" sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", top: 0 } }} >
                <Box sx={{ display: "flex", flexWrap: 'wrap', maxWidth: 360, }} >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: 300, }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="DETAILS" {...a11yProps(0)} />
                            <Tab label="DELEVERY" {...a11yProps(1)} />
                            <Tab label="FIT" {...a11yProps(2)} />
                            <Tab label="SHARE" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0} sx={{ fontSize: "10px" }}>
                        <Typography sx={{ fontSize: 11 }} >
                            Lurex Linen Viscoses jacket in Conchiglia
                            The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.
                            <br />
                            <br />
                            See the <span style={{ textDecoration: "underline" }}>EDITOR’S NOTE</span>
                            <br />
                            <br />
                            Learn about the DESIGNER
                        </Typography>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Delevery Details...
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Fittings
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Sharing
                    </TabPanel>
                </Box>

            </Box>
        </Box >
    )
}

export default Leftbar