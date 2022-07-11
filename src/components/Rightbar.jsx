import { Box, Card, CardMedia, Container, Grid } from '@mui/material'
import PropTypes from 'prop-types';
import React from 'react'
// import "../components/btn.css";

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import a7 from "../images/pic6.jpg"
import a1 from "../images/pic1.jpg"
import { red } from '@mui/material/colors';

const color = red[500];



function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Rightbar = () => {
    return (
        <>

            <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" }, paddingTop: "6%" }} >
                <Box position="sticky" sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", flexWrap: 'wrap', top: "40px" } }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            maxWidth: 300,
                            borderRadius: 1,
                        }}
                    >
                        <Card sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}>
                            <CardContent>

                                <Typography variant="h4" component="div">
                                    JONATHAN SIMKHAI
                                </Typography>
                                <Typography sx={{ fontSize: 13 }} color="text.primary" gutterBottom>
                                    Lurex Linen Viscoses jacket in Conchiglia
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} >
                                    <b>$225</b>
                                </Typography>
                                <Typography variant="body2">
                                    <b>COLOR</b> CONCHIGLIA
                                    <br />
                                    <Stack direction="row" spacing={2}>
                                        <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                                            <CardMedia
                                                component="img"
                                                height="63.42px"
                                                width="52.85px"
                                                image={a1}
                                                alt="green iguana"
                                            />
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                                            <CardMedia
                                                component="img"
                                                height="63.42px"
                                                width="52.85px"
                                                image={a7}
                                                alt="green iguana"
                                            />
                                        </Avatar>
                                    </Stack>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>


                            </CardActions>


                        </Card>

                        <Box style={{ padding: "15px" }} gap={4}>
                            <button type="button" style={{ padding: "2px 20px", marginRight: "5px", marginBottom: "10px", borderRadius: "25px" }} class="btn-outline-dark">XS</button>
                            <button type="button" style={{ padding: "2px 20px", marginRight: "5px", marginBottom: "10px", borderRadius: "25px" }} class="btn-outline-dark">S</button>
                            <button type="button" style={{ padding: "2px 20px", marginRight: "5px", marginBottom: "10px", borderRadius: "25px" }} class="btn-outline-dark">M</button>
                            <button type="button" style={{ padding: "2px 20px", marginRight: "5px", marginBottom: "10px", borderRadius: "25px" }} class="btn-dark">L</button>
                            <button type="button" style={{ padding: "2px 20px", marginRight: "5px", borderRadius: "25px" }} class="btn-outline-dark">XXL</button>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                        <button type="button" class=" btn-dark" style={{ padding: "5px 90px", borderRadius: "25px" }} >ADD TO BAG</button>
                    </Box>
                    <Typography sx={{ fontSize: 13, marginTop: "10px" }} color="text.primary" gutterBottom>
                        Get 4 interest-free payments of $196.25 with Klarna <b>LEARN MORE</b>
                    </Typography>
                    <Typography sx={{ fontSize: 13 }} color="text.primary" gutterBottom>
                        Lurex Linen Viscoses jacket in Conchiglia
                    </Typography>
                </Box>

            </Box>
            
        </>
    )
}

export default Rightbar