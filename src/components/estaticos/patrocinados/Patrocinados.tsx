import { Box, Grid, Typography } from '@mui/material';
import react from 'react';
import { Link } from 'react-router-dom';
import './Patrocinados.css';


export default function Patrocinados() {
    return (
        <>
            <Grid sm={12} id='search' height={45}>
                <div id="busca-header">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <input type="text" id="txtBusca" placeholder="Buscar" />
                </div>
            </Grid>
            <Grid sm={12} className='cardSponsor'>
                <Box className='cardTitle'>
                    <Typography><strong>Notícias</strong></Typography>
                </Box>
                <Box className='renderSponsor'>
                    <Grid sm={8}>
                        {/* <Link to='#'> */}

                            <Box className='subtitleSponsor'>
                                <Typography variant='subtitle2'>Sustentabilidade</Typography>
                            </Box>
                            <Box className='Noticia'>
                                <Typography variant='body2'>Embraer e Raízen fecham parceria para produção de combustível de aviação sustentável</Typography>
                            </Box>
                        {/* </Link> */}
                    </Grid>
                    <Grid sm={4}>
                        <Box className='boxImgSponsor'>
                            <img src="https://i.imgur.com/Rr13uLU.jpg" className='imgSponsor' alt="" />
                        </Box>
                    </Grid>
                </Box>
            </Grid>

            <Grid className='cardSponsor'>
                <Box className='cardTitle'>
                    <Typography><strong>Produtos Sustentáveis</strong></Typography>
                </Box>
                <Box className='renderSponsor'>
                    <Grid sm={8}>
                        <Box className='subtitleSponsor'>
                            <Typography variant='subtitle2'>Sofás e Poltronas</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body2'>Poltrona cama b.y.o. solteiro</Typography>
                        </Box>
                    </Grid>
                    <Grid sm={4}>
                        <Box className='boxImgSponsor'>
                            <img src="https://i.imgur.com/HQR2bMR.jpg" className='imgSponsor' alt="" />
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}