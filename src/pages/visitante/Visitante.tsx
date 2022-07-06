import React from 'react';
import { Grid, Box, Typography, Button, Paper, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';
import './Visitante.css';

function Visitante() {
    return (
        <>
            <Grid container padding='5rem' direction="row"
                justifyContent="center"
                alignItems="center"
                className='heroContainer'
                height='100vh'
                paddingTop='5rem'>
                <Grid item alignItems="center" md={6} className='heroContainer-left'>
                    <img src="https://imgur.com/gaVGNPl.png" height='300px' alt="Maos segurando o planeta-terra" />
                </Grid>
                <Grid item alignItems="center" md={6} className='heroContainer-right'>
                    <Box className='CTA'>
                        <Typography variant='h4'>Textinho chamativo aqui</Typography>
<<<<<<< HEAD
                        
                            <Box marginTop='1rem' textAlign='center'>
                            <Link to='/cadastro'>
                            <Button type='submit' size='large' variant='contained' color='success'>
                                Faça parte dessa rede!
                            </Button>
                        </Link>
=======
                        <Box marginTop='1rem' textAlign='center'>
                            <Link to='/cadastro'>
                                <Button type='submit' size='large' variant='contained' color='success'>
                                    Faça parte dessa rede!
                                </Button>
                            </Link>
>>>>>>> e9cf0ac9680d5a650dba571f6df9e8bca977e52e
                            <Box marginTop='4px' justifyContent='center' display='flex'>
                                <Box marginRight={1} >

                                    <Typography>Já tem uma conta?</Typography>

                                </Box>
                                <Link to='/login'>
                                    <Typography gutterBottom id='facaLogin'>Faça o login</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <hr />
            <Box className='section2Title'>
                <Typography variant='h4'>Mais de 100.000 pessoas foram beneficiadas por iniciativas que surgiram na <strong>SustentaMais!</strong></Typography>
            </Box>
            <Grid container justifyContent='center' alignItems='center' paddingRight='4rem' paddingLeft='4rem' className='section2Content' >
                <Grid item sm={7}>
                    <Box textAlign='left' width='20rem'>
                        <Typography>
                            Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est.
                            Leite de capivaris, leite de mula manquis sem cabeça.Não sou faixa preta cumpadi, sou preto inteiris,
                            inteiris.Si num tem leite então bota uma pinga aí cumpadi!
                        </Typography>
                    </Box>
                </Grid>

                <Grid justifyItems='center' alignItems='center' item sm={5}>
                    <img src="https://imgur.com/CG1yhTy.png" height='250px' alt="Pessoas levantando planeta" />
                </Grid>
            </Grid>
            <hr style={{ width: "100px" }} />
            <Box margin='auto' paddingTop='9rem' paddingBottom='9rem' width='40rem'>
                <ul>
                    <li>Garantindo habitação segura a mais de 100 famílias por dia;</li>
                    <li>Mais de 9M de usuários;</li>
                    <li>Presente em mais de 19 países;</li>
                    <li>Diminuindo significamento o impacto ambiental negativo no planeta.</li>
                </ul>
            </Box>
        </>
    )
}

export default Visitante;