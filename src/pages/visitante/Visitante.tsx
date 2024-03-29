import React from "react";
import { Grid, Box, Typography, Button, Paper, Hidden } from "@mui/material";
import { Link } from "react-router-dom";
import "./Visitante.css";
import cardsExpanciso from "./cards";
import Navbar from "../../components/estaticos/navbar/Navbar";

function Visitante() {
  return (
    <>
      <Grid
        container
        id="renderHero"
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="heroContainer"
      >
        <Navbar />
        <Grid
          item
          alignItems="center"
          md={6}
          xs={12}
          className="heroContainer-left"
        >
          <img
            src="https://i.imgur.com/8DLGZnf.gif"
            height="300px"
            alt="Maos segurando o planeta-terra"
          />
        </Grid>
        <Grid
          item
          alignItems="center"
          md={6}
          xs={12}
          className="heroContainer-right"
        >
          <Box className="CTA">
            <Box id="ctaText">
              <Typography variant="h4">
                Construa uma <strong>comunidade</strong> e torne o mundo melhor.
              </Typography>
            </Box>

            <Box marginTop="1rem">
              <Link to="/cadastro" className="linkVisitante">
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="success"
                  id="botaoVerde"
                >
                  Faça parte dessa rede!
                </Button>
              </Link>
              <Box justifyContent="center" display="flex">
                <Box marginRight={1}>
                  <Typography id="jaTemConta">Já tem uma conta?</Typography>
                </Box>
                <Link to="/login" className="linkVisitante">
                  <Typography gutterBottom id="facaLogin">
                    Faça o login
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <hr />
      <Box className="section2Title">
        <Typography variant="h3">
          Mais de 100.000 pessoas foram beneficiadas por iniciativas que
          surgiram na <strong>SustentaMais!</strong>
        </Typography>
      </Box>
      <Grid
        container
        justifyContent="center"
        spacing={1}
        alignItems="center"
        paddingRight="4rem"
        paddingLeft="4rem"
        className="section2Content"
      >
        <Grid item sm={7} xs={12}>
          <Box
            textAlign="left"
            width="320px"
            id="boxTxtSection2"
            paddingLeft="60px"
          >
            <Typography className="text">
              Nossa rede social tem o intuito de tornar as cidades e comunidades
              mais inclusivas, seguras, resilientes e sustentável, apresentando
              soluções para a falta de habilitação segura, inspirar a
              sustentabilidade e realizar interações com usuários, pessoas ou
              empresas interessadas em ajudar alcançarmos essa causa.
            </Typography>
          </Box>
        </Grid>

        <Grid
          justifyItems="center"
          alignItems="center"
          id="imgSection2"
          item
          sm={5}
          xs={12}
        >
          <img
            src="https://imgur.com/CG1yhTy.png" 
            height="250px"
            alt="Pessoas levantando planeta"
          />
        </Grid>
      </Grid>
      <hr style={{ width: "100px" }} />
      <Box id="liEstrelinhas">
        <ul>
          <li>
            Garantindo <strong>habitação segura</strong> a mais de 100 famílias
            por dia;
          </li>
          <li>
            Mais de <strong>9M</strong> de usuários;
          </li>
          <li>
            Presente em mais de <strong>19 países</strong>;
          </li>
          <li>
            Diminuindo significamente o <strong>impacto ambiental </strong>
            negativo no planeta.
          </li>
        </ul>
      </Box>
      <Typography id="equipedev" variant="h4">
        Equipe Desenvolvedora
      </Typography>

      <Grid className="container">
        <Grid>
          <div className="flip-card cards">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://avatars.githubusercontent.com/u/93235011?v=4" />
                <h4>João Paz</h4>
              </div>
              <div className="flip-card-back">
                <h4>João Paz</h4>
                <p>
                  {" "}
                  Olá, meu nome João! Tenho 22 anos e sou um desenvolvedor
                  nordestino que adora desafios. Fazer parte do time Sustenta+
                  acendeu ainda mais a chama Dev dentro de mim.
                </p>

                <a href="https://github.com/Joaolucas398" target="_blank">
                  <img
                    src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/jlsouzapaz"
                  target="_blank"
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.instagram.com/lucasbreckgm"
                  target="_blank"
                >
                  <img
                    src="https://media.discordapp.net/attachments/992082604792750240/998753481299071016/instagram.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </Grid>

        <Grid>
          <div className="flip-card cards">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://avatars.githubusercontent.com/u/94026401?v=4"/>
                <h4>Ruan Pablo</h4>
              </div>
              <div className="flip-card-back">
                <h4>Ruan Pablo</h4>
                <p>
                  {" "}
                  Olá, eu sou o Ruan! Desenvolvedor FullStack, apaixonado por
                  arte, tecnologia e esportes. O Sus+ é parte da minha jornada
                  como desenvolvedor, resultado de meses de estudo e trabalho.
                  Espero que gostem!
                </p>

                <a href="https://github.com/Rpablo4" target="_blank">
                  <img
                    src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/ruan-pablo-38533520b"
                  target="_blank"
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png"
                    alt=""
                  />
                </a>

                <a href="https://www.instagram.com/rpablo_4" target="_blank">
                  <img
                    src="https://media.discordapp.net/attachments/992082604792750240/998753481299071016/instagram.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </Grid>

        <Grid>
          <div className="flip-card cards">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://avatars.githubusercontent.com/u/100284708?v=4" />
                <h4>Jennifer Sicherolli</h4>
              </div>
              <div className="flip-card-back">
                <h4>Jennifer Sicherolli</h4>
                <p>
                  Oii!! Sou a Jenny, uma garota apaixonada por tecnologia e
                  aprendizagem. Graças ao Sustenta+ pude conhecer a fundo esse
                  mundo, um projeto incrível que me tornou a desenvolvedora web
                  java que sou hoje.
                </p>

                <a href="https://github.com/jheesicherolli" target="_blank">
                  <img
                    src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/jennifer-sicherolli"
                  target="_blank"
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.instagram.com/jhee_sicherolli"
                  target="_blank"
                >
                  <img
                    src="https://media.discordapp.net/attachments/992082604792750240/998753481299071016/instagram.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </Grid>

        <Grid>
          <div className="flip-card cards">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://avatars.githubusercontent.com/u/93798476?v=4" />
                <h4>Gabriele Sá</h4>
              </div>
              <div className="flip-card-back">
                <h4>Gabriele Sá</h4>
                <p>
                  Olá, eu sou a Gabi! Tenho 18 anos, sou mineira e uma
                  desenvolvedora em constante aprendizado. Fazer parte do time
                  do Sustenta+ me contribuiu como profissional e como pessoa, e
                  é um orgulho que vou carregar para sempre.
                </p>

                <a href="https://github.com/psgabriele" target="_blank">
                  <img
                    src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/gabriele-s%C3%A1"
                  target="_blank"
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png"
                    alt=""
                  />
                </a>

                <a href="https://www.instagram.com/psgab" target="_blank">
                  <img
                    src="https://media.discordapp.net/attachments/992082604792750240/998753481299071016/instagram.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </Grid>

        <Grid>
          <div className="flip-card cards">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://avatars.githubusercontent.com/u/92693153?v=4" />
                <h4>Fabyola Campos</h4>
              </div>
              <div className="flip-card-back">
                <h4>Fabyola Campos</h4>
                <p>
                  {" "}
                  Olá, meu nome é Fabyola, Sou uma Desenvolvedora Fullstack
                  Java. A minha paixão pela tecnologia veio através do curso do
                  #OTechTaOn. Gosto de novas experiências e de novos desafios,
                  conhecimento é a minha chave para o sucesso!
                </p>

                <a href="https://github.com/fabyolafc" target="_blank">
                  <img
                    src="https://cdn.discordapp.com/attachments/992082604792750240/997300578617135204/github.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/fabyola-campos"
                  target="_blank"
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/992082604792750240/997300578986246154/linkedin.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.instagram.com/fabyolacampos/?hl=pt-br"
                  target="_blank"
                >
                  <img
                    src="https://media.discordapp.net/attachments/992082604792750240/998753481299071016/instagram.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Visitante;
