import * as React from 'react';
import { Typography, TextField, Button } from "@material-ui/core";
import './Sobre.css';
import { Box } from '@mui/material';


function Sobre() {
    return (
        <>

        <Box >
            
            <section className='containerE2'  >
                <Typography >
                <p className='titulos'>Quem somos</p>
                Somos uma rede social sem fins lucrativos, nosso projeto Sustenta+ tem como medida apresentar soluções para a falta de moradia segura e sustentável para moradores em situação vulnerável. Com o principal objetivo de tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis. Seguindo as metas da ODS 11 da ONU.
                </Typography>

                <img className='img' src="https://media.discordapp.net/attachments/992082604792750240/992082726075256963/Sustentamaiscfundo.png?width=385&height=385"
                alt=""/>
            </section>

        </Box>


         <Box >
            
            <section className='containerD'>

            <img className='img' src="https://media.discordapp.net/attachments/992082604792750240/992082726075256963/Sustentamaiscfundo.png?width=385&height=385"alt=""/>
                <Typography  >
                <p className='titulos'>Porque fazer parte do Sustenta+?</p>
                O grupo enxerga como resolução desse problema, a possibilidade de poder ajudar as pessoas, além de permitir que as mesmas se ajudem dentro da rede social visando a participação de pessoas e empresas em prol de um objetivo em comum. 
                Acreditamos que essa ODS pode trazer moradias mais dignas para comunidades mais carentes, bem como ajudar a fiscalizar os espaços que esses cidadãos residem, levando mais conforto e segurança para os mesmos.

                </Typography>

            </section>

        </Box>

        <Box >
            
            <section className='containerE'>
                <Typography  >
                <p className='titulos'>Como surgiu essa ideia?</p>
                Como surgiu essa ideia?
                O surgimento do Sustenta+ se deu durante o bootcamp da Generation, apartir das ideias dos integrantes em construir uma rede socias em prol das pessoas carentes visando sanar as necessidades da ODS 11 da ONU. 

                </Typography>

                <img className='img' src="https://media.discordapp.net/attachments/992082604792750240/992082726075256963/Sustentamaiscfundo.png?width=385&height=385"
                alt=""/>
            </section>

        </Box>

        </>




    );
}

export default Sobre;