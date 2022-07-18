import React from 'react';
import { Grid, Box, Typography, Button, Paper, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';
import './Visitante.css';
import cardsExpanciso from './cards';

function Visitante() {
    return (
        <>
            <Grid  container padding='5rem' direction="row"
                justifyContent="center"
                alignItems="center"
                className='heroContainer'
                
                >
                <Grid item alignItems="center" md={6} className='heroContainer-left'>
                    {/* <img src="https://imgur.com/gaVGNPl.png" height='300px' alt="Maos segurando o planeta-terra" /> */}
                </Grid>
                <Grid item alignItems="center" md={6} className='heroContainer-right'>
                    <Box className='CTA'>
                        <Typography variant='h4'>Junte-se a nós nessa missão de mudar a vida de milhares de pessoas.</Typography>
                        <Box marginTop='1rem' textAlign='center'>
                            <Link to='/cadastro'>
                                <Button type='submit' size='large' variant='contained' color='success' id='botaoVerde'>
                                    Faça parte dessa rede!
                                </Button>
                            </Link>
                            <Box  justifyContent='center' display='flex'>
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
                <Typography variant='h3' >Mais de 100.000 pessoas foram beneficiadas por iniciativas que surgiram na <strong>SustentaMais!</strong></Typography>
            </Box>
            <Grid container justifyContent='center' alignItems='center' paddingRight='4rem' paddingLeft='4rem' className='section2Content' >
                <Grid item sm={7}>
                    <Box textAlign='left' width='20rem'>
                        <Typography>
                        Nossa rede social tem o intuito de tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentável, apresentando soluções para a falta de habilitação segura, inspirar a sustentabilidade e realizar interações com usuários, pessoas ou empresas interessadas em ajudar alcançarmos essa causa.
                        </Typography>
                    </Box>
                </Grid>

                <Grid justifyItems='center' alignItems='center' item sm={5}>
                    <img src="https://imgur.com/CG1yhTy.png" height='250px' alt="Pessoas levantando planeta" />
                </Grid>
            </Grid>
            <hr style={{ width: "100px" }} />
            <Box margin='auto' paddingTop='9rem' paddingBottom='9rem' width='40rem' id='liEstrelinhas'>
                <ul>
                    <li>Garantindo habitação segura a mais de 100 famílias por dia;</li>
                    <li>Mais de 9M de usuários;</li>
                    <li>Presente em mais de 19 países;</li>
                    <li>Diminuindo significamento o impacto ambiental negativo no planeta.</li>
                </ul>
            </Box>
            <Typography className='equipedev' >Equipe Desenvolvedora</Typography>
            <hr style={{ width: "500px" }} />
            
            <Grid className='container'>
                <Grid >
                    <Box className='cards'>
                        <button onClick={cardsExpanciso} className='cartao-expansivel'><img src='https://avatars.githubusercontent.com/u/93235011?v=4' />  </button>
                        <Box className='conteudo'>
                            <h4>João Lucas</h4>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at, nemo eum cum, excepturi non laborum qui mollitia, consequuntur natus quia nam. Quisquam atque ex et voluptates incidunt minus! Quo?
                            </Typography>

                        <a href="https://github.com/Joaolucas398" target="_blank"> 
                            <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png" alt="" />
                        </a>

                            <a href="https://www.linkedin.com/in/jlsouzapaz" target="_blank">
                            <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png" alt="" />
                            </a>
                        </Box>

                    </Box>
                </Grid>

                <Grid>
                    <Box className='cards'>
                    <button onClick={cardsExpanciso} className='cartao-expansivel'><img src='https://avatars.githubusercontent.com/u/93235011?v=4' />  </button>
                        <Box className='conteudo'>
                        <h4>João Lucas</h4>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at, nemo eum cum, excepturi non laborum qui mollitia, consequuntur natus quia nam. Quisquam atque ex et voluptates incidunt minus! Quo?
                            </Typography>

                        <a href="https://github.com/Joaolucas398" target="_blank"> 
                            <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png" alt="" />
                        </a>

                            <a href="https://www.linkedin.com/in/jlsouzapaz" target="_blank">
                            <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png" alt="" />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid>
                    <Box className='cards'>
                    <button onClick={cardsExpanciso} className='cartao-expansivel'><img src='https://avatars.githubusercontent.com/u/93235011?v=4' />  </button>
                        <Box className='conteudo'>
                        <h4>João Lucas</h4>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at, nemo eum cum, excepturi non laborum qui mollitia, consequuntur natus quia nam. Quisquam atque ex et voluptates incidunt minus! Quo?
                            </Typography>

                        <a href="https://github.com/Joaolucas398" target="_blank"> 
                            <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png" alt="" />
                        </a>

                            <a href="https://www.linkedin.com/in/jlsouzapaz" target="_blank">
                            <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png" alt="" />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid>
                    <Box className='cards'>
                    <button onClick={cardsExpanciso} className='cartao-expansivel'><img src='https://avatars.githubusercontent.com/u/93235011?v=4' />  </button>
                        <Box className='conteudo'>
                        <h4>João Lucas</h4>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at, nemo eum cum, excepturi non laborum qui mollitia, consequuntur natus quia nam. Quisquam atque ex et voluptates incidunt minus! Quo?
                            </Typography>

                        <a href="https://github.com/Joaolucas398" target="_blank"> 
                            <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png" alt="" />
                        </a>

                            <a href="https://www.linkedin.com/in/jlsouzapaz" target="_blank">
                            <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png" alt="" />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid>
                    <Box className='cards'>
                    <button onClick={cardsExpanciso} className='cartao-expansivel'><img src='https://avatars.githubusercontent.com/u/93235011?v=4' />  </button>
                        <Box className='conteudo'>
                        <h4>João Lucas</h4>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at, nemo eum cum, excepturi non laborum qui mollitia, consequuntur natus quia nam. Quisquam atque ex et voluptates incidunt minus! Quo?
                            </Typography>

                        <a href="https://github.com/Joaolucas398" target="_blank"> 
                            <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png" alt="" />
                        </a>
                       

                            <a href="https://www.linkedin.com/in/jlsouzapaz" target="_blank">
                            <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png" alt="" />
                            </a>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Visitante;