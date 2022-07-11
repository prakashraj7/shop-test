import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}> */}
            <Container>
                <Grid container spacing={3} sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>
                    <Grid item xs >
                    </Grid>
                    <Grid item xs={8} sx={{ alignItem: "center", textAlign: "center" }}>
                        <Typography p={5}  >
                            <span style={{ padding: "0px 5px", textDecoration: "underline" }}>Jonathan Simkhai</span>
                            <span style={{ padding: "0px 5px", textDecoration: "underline" }}>Blazers</span>
                            <span style={{ padding: "0px 5px", textDecoration: "underline" }}>Viscose</span>

                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div" p={3} sx={{ fontSize: "15px" }} >
                            <b> A NOTE FROM THE EDITOR</b>
                        </Typography>
                        <Box >
                            <Typography variant="subtitle2" gutterBottom component="div" sx={{ fontSize: "25px" }} >
                                The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.
                            </Typography>
                        </Box>

                        <Typography p={1} sx={{ paddingBottom: "15%" }}  >
                            <span >By MINNA SHIM, Fashion Editor</span>
                        </Typography>
                    </Grid>
                    <Grid item xs >
                    </Grid>
                </Grid>



                <Grid sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}>

                    <Grid item xs={8} sx={{ alignItem: "center", textAlign: "center" }}>

                        <Typography p={5}  >
                            <span style={{ padding: "0px 5px", textDecoration: "underline" }}>Jonathan Simkhai</span>
                            <span style={{ padding: "0px 5px", textDecoration: "underline" }}>Blazers</span>
                            <span style={{ padding: "0px 5px", textDecoration: "underline" }}>Viscose</span>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div" p={3} sx={{ fontSize: "15px" }} >
                            <b> A NOTE FROM THE EDITOR</b>
                        </Typography>

                        <Box  >
                            <Typography variant="subtitle3" gutterBottom component="div" style={{ fontSize: "15px" }} >
                                The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.
                            </Typography>
                        </Box>

                        <Typography p={1} sx={{ paddingBottom: "15%" }}  >
                            <span >By MINNA SHIM, Fashion Editor</span>
                        </Typography>
                    </Grid>
                </Grid>

            </Container>

        </div >
    )
}

export default Footer