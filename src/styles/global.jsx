import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
*{
box-sizing: border-box;
margin: 0;
padding: 0;
}

body{
background-color: ${({theme})=> theme.background};
color: ${({theme})=> theme.textColor}; 
font-family: sans-serif;
transition: all 0.25s linear;
}

.canvas{
display: grid;
min-height: 100vh;
grid-auto-flow: row;
grid-template-row: auto 1fr auto;
gap: 0.5rem;
width: 100vw;
padding: 2rem;
align-items: center;
text-align: center;
}

.type-box{
display: block;
max-width: 1000px;
height: 140px;
margin-left: auto;
margin-right: auto;
overflow: hidden;
}

.words{
font-size: 32px;
display: flex;
flex-wrap: wrap; 
color: ${({theme})=> theme.typeBoxText};
}

.word{
padding-right: 2px;
margin: 5px;
}

.hidden-input{
opacity: 0;
}

.current{
border-left: 1px solid;
animation: blinking 2s infinite; 

@keyframes blinking{
0% {border-left-color: ${({theme})=> theme.background};}
25% {border-left-color: ${({theme})=> theme.textColor};}
50% {border-left-color: ${({theme})=> theme.background};}
75% {border-left-color: ${({theme})=> theme.textColor};}
100% {border-left-color: ${({theme})=> theme.background};}
}
}

.current-right{
border-right: 1px solid;
animation: blinkingRight 2s infinite; 

@keyframes blinkingRight{
0% {border-left-color: ${({theme})=> theme.background};}
25% {border-left-color: ${({theme})=> theme.textColor};}
50% {border-left-color: ${({theme})=> theme.background};}
75% {border-left-color: ${({theme})=> theme.textColor};}
100% {border-left-color: ${({theme})=> theme.background};}
}
}

.incorrect{
color: red;
}

.correct{
color: ${({theme})=> theme.textColor};
}

.upper-menu{
display: flex;
width: 1000px;
margin-left: auto;
margin-right: auto;
font-size: 1.35rem;
justify-content: space-between;

}

.modes{
display: flex;
gap: 0.4rem;
}

.time-mode:hover{
color: ${({theme})=> theme.typeBoxText};
cursor: pointer;
transition: 0.3s ease-in-out;
}

.footer{
width: 1000px;
display: flex;
justify-content: space-between;
margin-left: auto;
margin-right: auto;
}

.stats-box{
display: flex;
width: 1000px;
height: auto;
margin-left: auto;
margin-right: auto;
}

.left-stats{
width: 30%;
padding: 30px;
}

.right-stats{
width: 70%;
}

.title{
font-size: 20px;
color: ${({theme})=> theme.typeBoxText};
}

.sub-title{
font-size: 30px;
}

:root {
  --logo-color: #000000; /* Default color */
}

.header {
 width: 1000px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo svg {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  fill: var(--logo-color);
  background-color: 
}

.user-profile{
width: 1000px;
margin: auto;
display: flex;
height: 15rem;
background: ${({theme})=> theme.typeBoxText};
border-radius: 20px;
justify-content: center;
align-items: center;
}

.user{
width: 50%;
display: flex;
margin-bottom: 30px;
font-size: 1.5rem;
padding: 1rem;
border-right: 3px solid;
}

.info{
width: 60%;
padding: 1rem;
}

.pic{
width: 40%;
}

.total-tests{
width: 50%;
height: 100%;
font-size: 3rem;
display: flex;
align-itmes: center;
justify-content: center;
transform: translateY(30%)
}

.table, .graph-user-page{
width: 1000px;
margin: auto;
}

.center-of-screen{
display: flex;
align-itmes: center;
justify-content: center;
min-height: 100vh;
transform: translateY(50%)
}
`;
