import * as React from 'react';
import './Sobre.css';
import { Box, Grid, Typography } from '@mui/material';


function Sobre() {
    var sobrenosComponent;
    sobrenosComponent = <Grid sm={12} className='bigContainerSobre'>
        <Box className='tituloSobre'>
            <p className='titulos'>Quem somos?</p>
        </Box>
        <Grid container display='flex' className='containerSobre'>
            <Grid sm={7} justifyContent='center' >
                <Box className='sobrenosLeft'>
                    <Typography >
                        Somos uma rede social sem fins lucrativos, nosso projeto Sustenta+ tem como medida apresentar soluções para a falta de moradia segura e sustentável para moradores em situação vulnerável. Com o principal objetivo de tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis. Seguindo as metas da ODS 11 da ONU.
                    </Typography>
                </Box>

            </Grid>
            <Grid sm={5} className='centralizaSobre'>
                <img className='imgSobre' src="https://i.imgur.com/xO27eeq.png"
                    alt="" />
            </Grid>

        </Grid>

        <Box className='tituloSobre'>
            <p className='titulos'>Porque fazer parte do Sustenta+?</p>
        </Box>
        <Grid container display='flex' className='containerSobre'>
            <Grid sm={5} className='centralizaSobre' >
                <img className='imgSobre' src="https://i.imgur.com/rwOANLx.png" alt="" />
            </Grid>
            <Grid sm={7} justifyContent='center' >
                <Box className='sobrenosRight'>
                    <Typography   id='ultimoSobre'>
                        O grupo enxerga como resolução desse problema, a possibilidade de poder ajudar as pessoas, além de permitir que as mesmas se ajudem dentro da rede social visando a participação de pessoas e empresas em prol de um objetivo em comum.
                        Acreditamos que essa ODS pode trazer moradias mais dignas para comunidades mais carentes, bem como ajudar a fiscalizar os espaços que esses cidadãos residem, levando mais conforto e segurança para os mesmos.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        <Box className='tituloSobre'>
            <p className='titulos'>Como surgiu essa ideia?</p>
        </Box>
        <Grid container display='flex' className='containerSobre'>
            <Grid sm={7} justifyContent='center' >
                <Box className='sobrenosLeft'>
                    < Typography  >
                        O surgimento do Sustenta+ se deu durante o bootcamp da Generation, apartir das ideias dos integrantes em construir uma rede socias em prol das pessoas carentes visando sanar as necessidades da ODS 11 da ONU.
                    </Typography>
                </Box>

            </Grid>
            <Grid sm={5} className='centralizaSobre'>
                <img className='imgSobre' src="https://i.imgur.com/CG1yhTy.png"
                    alt="" />
            </Grid>
        </Grid>

    </Grid>



    return (

        <Grid container display='flex'>
            <Grid item sm={3}>

            </Grid>
            <Grid item sm={9}>
                {sobrenosComponent}
            </Grid>
        </Grid>




    );
}

export default Sobre;