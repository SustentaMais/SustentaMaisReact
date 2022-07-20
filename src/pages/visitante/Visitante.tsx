import React from 'react';
import { Grid, Box, Typography, Button, Paper, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';
import './Visitante.css';
import cardsExpanciso from './cards';
import Navbar from '../../components/estaticos/navbar/Navbar';


function Visitante() {
    return (
        <>
            <Grid container padding='5rem' direction="row"
                justifyContent="center"
                alignItems="center"
                className='heroContainer'
            >
                <Navbar/>
                <Grid item alignItems="center" md={6} className='heroContainer-left'>
                    <img src="https://i.imgur.com/8DLGZnf.gif" height='300px' alt="Maos segurando o planeta-terra" />
                </Grid>
                <Grid item alignItems="center" md={6} className='heroContainer-right'>
                    <Box className='CTA'>
                        <Typography variant='h4'>Construa uma <strong>comunidade</strong> e torne o mundo melhor.</Typography>
                        <Box marginTop='1rem' textAlign='center'>
                            <Link to='/cadastro' className='linkVisitante'>
                                <Button type='submit' size='large' variant='contained' color='success' id='botaoVerde'>
                                    Faça parte dessa rede!
                                </Button>
                            </Link>
                            <Box justifyContent='center' display='flex'>
                                <Box marginRight={1} >

                                    <Typography id='jaTemConta'>Já tem uma conta?</Typography>

                                </Box>
                                <Link to='/login' className='linkVisitante'>
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
                    <Box textAlign='left' width='20rem' paddingLeft='60px'>
                        <Typography className='text'>
                            Nossa rede social tem o intuito de tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentável, apresentando soluções para a falta de habilitação segura, inspirar a sustentabilidade e realizar interações com usuários, pessoas ou empresas interessadas em ajudar alcançarmos essa causa.
                        </Typography>
                    </Box>
                </Grid>

                <Grid justifyItems='center' alignItems='center' item sm={5}>
                    <img src="https://imgur.com/CG1yhTy.png" height='250px' alt="Pessoas levantando planeta" />
                </Grid>
            </Grid>
            <hr style={{ width: "100px" }} />
            <Box id='liEstrelinhas'>
                <ul>
                    <li>Garantindo <strong>habitação segura</strong> a mais de 100 famílias por dia;</li>
                    <li>Mais de <strong>9M</strong> de usuários;</li>
                    <li>Presente em mais de <strong>19 países</strong>;</li>
                    <li>Diminuindo significamente o <strong>impacto ambiental </strong>negativo no planeta.</li>
                </ul>
            </Box>
            <Typography id='equipedev' variant='h4'>Equipe Desenvolvedora</Typography>
            {/* <hr style={{ width: "500px" }} /> */}

            <Grid className='container'>
                <Grid >
                    <Box className='cards'>
                        <button onClick={cardsExpanciso} className='cartao-expansivel'><img src='https://avatars.githubusercontent.com/u/93235011?v=4' />  </button>
                        <Box className='conteudo'>
                            <h4>João paz</h4>
                            <Typography>
                                Desenvolvedor Full stack java
                            </Typography>

                            <a className='linkVisitante' href="https://github.com/Joaolucas398" target="_blank">
                                <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png" alt="" />
                            </a>

                            <a className='linkVisitante' href="https://www.linkedin.com/in/jlsouzapaz" target="_blank">
                                <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png" alt="" />
                            </a>
                        </Box>

                    </Box>
                </Grid>

                <Grid>
                    <Box className='cards'>
                        <button onClick={cardsExpanciso} className='cartao-expansivel'><img src='https://avatars.githubusercontent.com/u/100284708?v=4' />  </button>
                        <Box className='conteudo'>
                            <h4>Jennifer Sicherolli</h4>
                            <Typography>
                                Desenvolvedora Full stack java
                            </Typography>

                            <a className='linkVisitante' href="https://github.com/Joaolucas398" target="_blank">
                                <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png" alt="" />
                            </a>

                            <a className='linkVisitante' href="https://www.linkedin.com/in/jlsouzapaz" target="_blank">
                                <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png" alt="" />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid>
                    <Box className='cards'>
                        <button onClick={cardsExpanciso} className='cartao-expansivel'><img src='https://avatars.githubusercontent.com/u/93798476?v=4' />  </button>
                        <Box className='conteudo'>
                            <h4>Gabriele Sá</h4>
                            <Typography>
                                Desenvolvedora Full stack java
                            </Typography>

                            <a className='linkVisitante' href="https://github.com/Joaolucas398" target="_blank">
                                <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png" alt="" />
                            </a>

                            <a className='linkVisitante' href="https://www.linkedin.com/in/jlsouzapaz" target="_blank">
                                <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png" alt="" />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid>
                    <Box className='cards'>
                        <button onClick={cardsExpanciso} className='cartao-expansivel'><img src='https://avatars.githubusercontent.com/u/92693153?v=4' />  </button>
                        <Box className='conteudo'>
                            <h4>Fabyola Campos</h4>
                            <Typography>
                                Desenvolvedora Full stack java
                            </Typography>

                            <a className='linkVisitante' href="https://github.com/Joaolucas398" target="_blank">
                                <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png" alt="" />
                            </a>

                            <a className='linkVisitante' href="https://www.linkedin.com/in/jlsouzapaz" target="_blank">
                                <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png" alt="" />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid>
                    <Box className='cards'>
                        <button onClick={cardsExpanciso} className='cartao-expansivel'><img src='https://avatars.githubusercontent.com/u/94026401?v=4' />  </button>
                        <Box className='conteudo'>
                            <h4>Ruan Pablo</h4>
                            <Typography>
                                Desenvolvedor Full stack java
                            </Typography>

                            <a className='linkVisitante' href="https://github.com/Joaolucas398" target="_blank">
                                <img src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png" alt="" />
                            </a>


                            <a className='linkVisitante' href="https://www.linkedin.com/in/jlsouzapaz" target="_blank">
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