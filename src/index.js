import styled, { keyframes } from 'styled-components';
import is from 'styled-is';

const Loading = styled.div`
  font-family: Cousine, Menlo, Lucida Console, Courier New, monospace;

  display: inline-block;
  overflow: hidden;
  height: 1.3em;
  margin-top: -0.3em;
  line-height: 1.5em;
  vertical-align: text-bottom;

  &::after {
    display: inline-table;
    white-space: pre;
    text-align: left;
  }

  ${is('cousine')`
    font-family: Cousine;
  `};

  ${is('helvetica')`
    font-family: Helvetica;
  `};

  ${is('verdana')`
    font-family: Verdana;
  `};

  ${is('monospace')`
    font-family: monospace;
  `};

  ${is('sansSerif')`
    font-family: sans-serif;
  `};

  ${is('serif')`
    font-family: serif;
  `};
`;

const spin2 = keyframes`
  to {
    transform: translateY(-3.0em);
  }
`;

const spin3 = keyframes`
  to {
    transform: translateY(-4.5em);
  }
`;

const spin4 = keyframes`
  to {
    transform: translateY(-6.0em);
  }
`;

const spin5 = keyframes`
  to {
    transform: translateY(-7.5em);
  }
`;

const spin6 = keyframes`
  to {
    transform: translateY(-9.0em);
  }
`;

const spin7 = keyframes`
  to {
    transform: translateY(-10.5em);
  }
`;

const spin8 = keyframes`
  to {
    transform: translateY(-12.0em);
  }
`;

const spin9 = keyframes`
  to {
    transform: translateY(-13.5em);
  }
`;

const spin10 = keyframes`
  to {
    transform: translateY(-15.0em);
  }
`;

const spin12 = keyframes`
  to {
    transform: translateY(-18.0em);
  }
`;

export const Arrow = Loading.extend`
  &::after {
    content: "←\\A↖\\A↑\\A↗\\A→\\A↘\\A↓\\A↙";
    animation: ${spin8} 1s steps(8) infinite;
  }
`;

export const Bar = Loading.extend`
  &::after {
    content: "▏\\A▎\\A▍\\A▌\\A▋\\A▊\\A▉";
    animation: ${spin7} 1s steps(7) infinite alternate;
  }
`;

export const Bar2 = Loading.extend`
  &::after {
    content: "▁\\A▂\\A▃\\A▄\\A▅\\A▆\\A▇\\A█";
    animation: ${spin8} 2s steps(8) infinite alternate;
  }
`;

export const Beam = Loading.extend`
  &::after {
    content: "\\A=   \\A ==  \\A === \\A ====\\A  ===\\A   ==\\A    =\\A";
    animation: ${spin9} 1.2s steps(9) infinite;
    font-family: monospace;
  }
`;

export const BoxBounce = Loading.extend`
  &::after {
    content:"▖\\A▘\\A▝\\A▗";
    animation: ${spin4} 1s steps(4) infinite;
  }
`;

export const Bullet = Loading.extend`
  &::after {
    content: " ●    \\A   ●   \\A    ●  \\A     ● \\A      ●\\A     ● \\A    ●  \\A   ●   \\A  ●    \\A ●     ";
    animation: ${spin10} 1s steps(10) infinite;
  }
`;

export const Bullseye = Loading.extend`
  &::after {
    content: "◎◎◎\\A◉◎◎\\A◎◉◎\\A◎◎◉";
    animation: ${spin4} 1s steps(4) infinite;
  }
`;

export const Circle = Loading.extend`
  &::after {
    content: "◴\\A◷\\A◶\\A◵";
    animation: ${spin4} 1s steps(4) infinite;
  }
`;

export const Countdown = Loading.extend`
  &::after {
    content: "0\\A 1\\A 2\\A 3\\A 4\\A 5\\A 6\\A 7\\A 8\\A 9";
    animation: ${spin10} 10s steps(10) reverse;
  }
`;

export const Dots = Loading.extend`
  &::after {
    content: "⠋\\A⠙\\A⠹\\A⠸\\A⠼\\A⠴\\A⠦\\A⠧\\A⠇\\A⠏";
    animation: ${spin10} 1s steps(10) infinite;
  }
`;

export const Dots2 = Loading.extend`
  &::after {
    content: "⠋\\A⠙\\A⠚\\A⠞\\A⠖\\A⠦\\A⠴\\A⠲\\A⠳";
    animation: ${spin9} 1s steps(9) infinite;
  }
`;

export const Dots3 = Loading.extend`
  &::after {
    content: "⋮\\A⋰\\A⋯\\A⋱";
    text-align: center;
    animation: ${spin4} 1s steps(4) infinite;
  }
`;

export const Earth = Loading.extend`
  &::after {
    content: "🌍\\A🌎\\A🌏";
    animation: ${spin3} 1s steps(3) infinite;
    width: 1.3em;
  }
`;

export const Ellip = Loading.extend`
  &::after {
    content: "\\A.\\A..\\A...";
    animation: ${spin4} 2s steps(4) infinite;
  }
`;

export const Fish = Loading.extend`
  &::after {
    content: ">))'>\\A  >))'>\\A   >))'>\\A    >))'>\\A     >))'>\\A     <'((<\\A    <'((<\\A   <'((<\\A  <'((<\\A <'((<\\A";
    animation: ${spin10} 5s steps(10) infinite;
  }
`;

export const Hamburger = Loading.extend`
  &::after {
    content: "☱\\A☲\\A☴";
    animation: ${spin3} .3s steps(3) infinite alternate;
  }
`;

export const Hearts = Loading.extend`
  &::after {
    content: "💛\\A💙\\A💜\\A💚";
    animation: ${spin4} 2s steps(4) infinite;
    width: 1.3em;
  }
`;

export const Lifting = Loading.extend`
  &::after {
    content: "⋮\\A⋰\\A⋯\\A⋱";
    text-align: center;
    animation: ${spin5} 1s steps(4) infinite;
  }
`;

export const Line = Loading.extend`
  &::after {
    content: "/\\A–\\A\\\\\\A|";
    text-align: center;
    animation: ${spin4} 1s steps(4) infinite;
  }
`;

export const Line2 = Loading.extend`
  &::after {
    content: "╲\\A│\\A╱\\A─";
    text-align: center;
    animation: ${spin4} 1s steps(4) infinite;
  }
`;

export const Matrix = Loading.extend`
  &::after {
    content:"░ ░░░░\\A░░ ░░░\\A░░░ ░░\\A░░░░ ░";
    animation: ${spin4} .5s steps(4) infinite alternate;
  }
`;

export const Monkey = Loading.extend`
  &::after {
    content: "🙈\\A🙉\\A🙊";
    animation: ${spin3} 1.5s steps(3) infinite;
    width: 1.3em;
  }
`;

export const Moon = Loading.extend`
  &::after {
    content: "🌑\\A🌒\\A🌓\\A🌔\\A🌕\\A🌖\\A🌗\\A🌘";
    animation: ${spin8} 2s steps(8) infinite;
    width: 1.3em;
  }
`;

export const OpenCircle = Loading.extend`
  &::after {
    content: "◜\\A◠\\A◝\\A◞\\A◡\\A◟";
    animation: ${spin6} .6s steps(6) infinite;
  }
`;

export const Plus = Loading.extend`
  &::after {
    content: "┽\\A╀\\A┾\\A╁";
    animation: ${spin4} 1s steps(4) infinite;
  }
`;

export const Rhomb = Loading.extend`
  &::after {
    content: "◇◇◇\\A◈◇◇\\A◇◈◇\\A◇◇◈";
    animation: ${spin4} 1s steps(4) infinite;
  }
`;

export const Runner = Loading.extend`
  &::after {
    content: "🚶\\A🏃";
    animation: ${spin2} 1s steps(2) infinite;
    width: 1.3em;
  }
`;

export const Square = Loading.extend`
  &::after {
    content: "◰\\A◳\\A◲\\A◱";
    animation: ${spin4} 1s steps(4) infinite;
  }
`;

export const Star = Loading.extend`
  &::after {
    content:"✶\\A✸\\A✹\\A✺\\A✹\\A✷";
    animation: ${spin6} 1s steps(6) infinite;
  }
`;

export const Time = Loading.extend`
  &::after {
    content: "🕐\\A🕑\\A🕒\\A🕓\\A🕔\\A🕕\\A🕖\\A🕗\\A🕘\\A🕙\\A🕚\\A🕛";
    animation: ${spin12} 3s steps(12) infinite;
    width: 1.3em;
  }
`;

export const Toggle = Loading.extend`
  &::after {
    content: "⊶\\A⊷";
    animation: ${spin2} 1s steps(2) infinite;
  }
`;

export const Triangle = Loading.extend`
  &::after {
    content: "◢\\A◣\\A◤\\A◥";
    animation: ${spin4} 1s steps(4) infinite;
  }
`;

export const Triangles = Loading.extend`
  &::after {
    content: "▹▹▹▹▹\\A ▸▹▹▹▹\\A ▹▸▹▹▹\\A ▹▹▸▹▹\\A ▹▹▹▸▹\\A ▹▹▹▹▸";
    animation: ${spin6} 1s steps(6) infinite;
  }
`;

export const Words = Loading.extend`
  &::after {
    content: "Loading\\A Still loading\\A Mostly done\\A A bit more \\A Almost done\\A Ready-ish";
    animation: ${spin6} 12s steps(6) infinite;
  }
`;
