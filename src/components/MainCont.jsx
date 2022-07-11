import { Box, CardActionArea, Stack, Tooltip } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import a1 from "../images/pic1.jpg"
import a2 from "../images/pic2.jpg"
import a3 from "../images/pic3.jpg"
import a4 from "../images/pic4.jpg"
import a5 from "../images/pic5.jpg"
import { useTheme } from '@mui/material/styles';




const MainCont = () => {



    return (
        <>
            <Box flex={4} p={2} style={{ paddingTop: "6%" }}  >
                <Box position="fixed">
                    <FavoriteBorderIcon />
                </Box>
                <Card sx={{ maxWidth: "100%" }}>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={a1}
                        alt="green iguana"
                    />
                    <Stack direction="row" spacing={1} justifyContent="space-between">
                        <CardMedia
                            component="img"
                            height="342px"
                            width="258px"
                            image={a2}
                            alt="green iguana"
                        />
                        <CardMedia
                            component="img"
                            height="342px"
                            width="258px"
                            image={a3}
                            alt="green iguana"
                        />
                    </Stack>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={a4}
                        alt="green iguana"
                    />
                    <CardMedia
                        component="img"
                        height="100%"
                        image={a5}
                        alt="green iguana"
                    />
                </Card>


            </Box>

            <Box sx={{ display: { sm: "block", md: "none", lg: "none", paddingTop: "6%" } }} >
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={a1} class="d-block w-100" alt="a" />
                        </div>
                        <div class="carousel-item">
                            <img src={a2} class="d-block w-100" alt="b" />
                        </div>
                        <div class="carousel-item">
                            <img src={a3} class="d-block w-100" alt="c" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </Box>

        </>
    )
}


export default MainCont