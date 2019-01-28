import React, { Component } from "react";
import styled, { css, createGlobalStyle, ThemeProvider, keyframes } from "styled-components";

// Images
import SCStats from "../assets/SCStats.png";
import SCUSED from "../assets/SCUSED.png";
import UPSA from "../assets/whoami.png";
import PREPROC from "../assets/preproc.jpeg";
import CSSINJS from "../assets/css-in-js.png";
import BTN from "../assets/btn.png";
import BTNSTYLED from "../assets/btn-styled.png";
import HEAD from "../assets/head.png";
import PERF from "../assets/performance.png";
import BEM from '../assets/bem.png';
import cardExample from '../assets/bem-sass-example.png';
import reactNative from '../assets/react-native.png';


// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  CodePane,
  Code,
  ComponentPlayground,
  Layout,
  Fill,
  Fit,
  Image,
  Notes
} from "spectacle";
import StyledLogo from "../components/logo";
import examples from "./examples";
import snippets from "./code-snippets";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const gradient =
  "linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87))";




export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        contentHeight={800}
        contentWidth={1000}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgImageStyle={gradient}>
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Все вопросы, пожалуйста, в конце доклада</li>
              <li>Постараюсь показать вам более обширную картину</li>
              <li>Поэтому не все аспекты будут раскрыты в деталях</li>
            </ol>
          </Notes>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Intro to styled-components{" "}
            <StyledLogo
              src="https://www.styled-components.com/static/icon.png"
              alt="nails"
            />
          </Heading>
        </Slide>
        <Slide transition={["fade"]} textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Выходец из внешних курсов, а потом из лабы</li>
              <li>В продакшне уже чуть больше чем полгода</li>
              <li>Сейчас работаю в команде которая создает библиотеку компонентов на реакте</li>
              <li>И для стилизации мы используем  styled-components, с которым сегодня я постараюсь вас познакомить</li>
              <li>Для начала хочу вернуться к истокам</li>
            </ol>
          </Notes>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Whoami
          </Heading>
          <Image
            src={UPSA}
            height={327}
            width={1098}
          />
        </Slide>
        <Slide transition={["fade"]} textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>CSS это важно</li>
              <li>CSS это сложно</li>
              <li>Иногда мы хотим сделать одно, а получается совсем другое</li>
            </ol>
          </Notes>
          <Heading size={5} lineHeight={1} textColor="secondary">
            CSS IS HARD
          </Heading>
          <Image
            src="http://66.media.tumblr.com/fb7b78c039f84f6587c718d5b88db31b/tumblr_inline_o4e81fGmxK1t9bsnt_500.gif"
            height={600}
            width={900}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Почти все проблемы походят от глобального скоупа</li>
              <li>Большой проект - много мертвого кода</li>
              <li>Который сложно поддерживать</li>
              <li>Как вы думаете какие на сегодняшний день существуют варианты решения этих проблем?</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            Problems with CSS
          </Heading>
          <List>
            <Appear><ListItem>Global namespacing</ListItem></Appear>
            <Appear><ListItem>Dead code elimination</ListItem></Appear>
            <Appear><ListItem>Code maitainability</ListItem></Appear>
            <Appear><ListItem>Code readability</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Набор правил для структурирования кода</li>
              <li>Рассмотрим BEM как самый популярный в СНГ</li>
              <li>и в частности, в Епаме</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            CSS Methodologies
          </Heading>
          <Text fit caps>
            smaccs | bem | atomic | oocss
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Рассмотрим только методологию именования</li>
              <li>Бем предлагает единые правила написания кода</li>
              <li>помогает его масштабировать и повторно использовать</li>
              <li>Бем является стандартом де-факто современной разработки интерфейсов</li>
              <li>Как ни автоматизируй, многое в БЭМе приходится делать руками, и возможны конфликты.</li>
            </ol>
          </Notes>
          <Image src={BEM} width={800} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li> это программа, которая имеет свой собственный синтаксис (syntax), но может сгенерировать из него CSS код</li>
              <li>Задача: предоставление удобных синтаксических конструкций для разработчика, чтобы упростить, и тем самым, ускорить разработку и поддержу стилей в проектах.
              </li>
              <li>Для использования CSS препроцессора нужно установить CSS компилятор</li>
              <li>Большинство из них расширяет функционал чистого CSS, добавляя такие опции как: примеси, вложенные правила, селекторы наследования и др</li>
            </ol>
          </Notes>
          <Heading size={5} lineHeight={1} textColor="secondary">
            CSS preprocessors
          </Heading>
          <Image src={PREPROC} height={523} width={1200} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Example Card component</li>
            </ol>
          </Notes>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Card component
          </Heading>
          <Image src={cardExample} width={500} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane lang="html" source={examples.cardHtml} textSize="17px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <CodePane lang="css" source={examples.cardCss} textSize="17px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <CodePane lang="scss" source={examples.sass} textSize="14px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Много фич</li>
              <li>Меньше кода</li>
              <li>Легко изучить</li>
              <li>Как в один файл так и под компоненты</li>
              <li>Хорошь в паре с BEM</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            More features
          </Heading>
          <List>
            <Appear><ListItem>Nesting</ListItem></Appear>
            <Appear><ListItem>Variables</ListItem></Appear>
            <Appear><ListItem>Imports</ListItem></Appear>
            <Appear><ListItem>Mixins</ListItem></Appear>
            <Appear><ListItem>Custom logic</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Кто хоть раз писал вот так стили, или пишет?</li>
              <li>Этим людям нельзя доверять!</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary">
            Inline styles
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Не путать с CSS-In-JS</li>
              <li>В свое время было модно, но недолго</li>
              <li>Невольно вспоминается одна картника</li>
            </ol>
          </Notes>
          <ComponentPlayground code={snippets.inlineStyles} textSize="26px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Image src="http://i59.fastpic.ru/big/2015/0401/72/bdc5261feb67e644186bf8477384ea72.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Никаких</h4>
            <ol>
              <li>Медиа запросов</li>
              <li>Псевдоселекторов</li>
              <li>Автопрефикса</li>
              <li>Анимаций</li>
              <li>И дебажить это невыносимо</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            There is no:
          </Heading>
          <List>
            <Appear><ListItem>Media queries</ListItem></Appear>
            <Appear><ListItem>Pseudo selectors</ListItem></Appear>
            <Appear><ListItem>Vendor prefixes</ListItem></Appear>
            <Appear><ListItem>Animations</ListItem></Appear>
            <Appear><ListItem>Debugging</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          textColor="secondary"
        >
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Большинство похожи на инлайн стили</li>
              <li>Перед styled-compoents, рассмотрим пример другой библиотеки</li>
              <li>Прежде чем перейдем, кто знает что такое props в реакт?</li>
            </ol>
          </Notes>
          <Image src={CSSINJS} />
        </Slide>
        <Slide
          transition={["fade"]}
          textColor="secondary"
        >
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Один из основных механизмов передачи данных</li>
              <li>Работает так же как и аттрибуты у хтмл елементов</li>
              <li>Только у браузера поведение определено, а мы логику пишем внутри компоненты</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary">
            React props
        </Heading>
          <ComponentPlayground code={snippets.react} scope={{ React }} />
        </Slide>
        <Slide
          transition={["fade"]}
          textColor="secondary"
        >
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Лишь один пример из многих, сторонняя библиотека React-JSS</li>
              <li>Уже больше возможностей</li>
              <li>Но все еще костыльно</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary">
            CSS IN JS: React-JSS
          </Heading>
          <CodePane lang="javascript" source={examples.cssInJs} textSize="17px" />
        </Slide>
        <Slide
          transition={["fade"]}
          bgImageStyle={gradient}
          textColor="secondary"
        >
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Макс Штойбер и Гленн Маддэрн</li>
            </ol>
          </Notes>
          <Image src="https://www.styled-components.com/static/logo.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Image src={SCUSED} width={1000} height={240} />
          <Image src={SCStats} width={949} height={110} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary" margin="0 0 50px 0">
            Installation
          </Heading>
          <Code margin="10px 0 0 0">npm install styled-components --save</Code>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <Heading size={6} textColor="secondary">
            Your first styled component
          </Heading>
          <CodePane lang="javascript" source={examples.first} textSize="30px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <ComponentPlayground
            code={snippets.styledBase}
            scope={{ styled, keyframes, }}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <Heading size={6} textColor="secondary">
            Tagged Template Literals
          </Heading>
          <CodePane lang="javascript" source={examples.tags} textSize="21px" />
        </Slide>
        <Slide
          transition={["fade"]}
          textColor="secondary"
        >
          <Notes>
            <h4>Demo points</h4>
            <ol>
              <li>Возвращает обычный Реакт компонент</li>
            </ol>
          </Notes>
          <CodePane lang="javascript" source={examples.styled} textSize="22px" />
          <Image
            src={BTN}
          />
        </Slide>
        <Slide
          transition={["fade"]}
          textColor="secondary"
        >
          <Heading size={4} fit>How does it work?</Heading>
          <Appear>
            <Image src={BTNSTYLED} margin="0 0 50px 0" />
          </Appear>
          <Appear>
            <Image src={HEAD} />
          </Appear>
        </Slide>
        <Slide
          transition={["fade"]}
          textColor="secondary"
        >
          <CodePane lang="html" source={examples.hiw} textSize="25px" />
        </Slide>
        <Slide
          transition={["fade"]}
          textColor="secondary"
        >
          <Heading size={4}>Performance?</Heading>
          <List>
            <ListItem>Radium: 40ms</ListItem>
            <ListItem>Inline styles: 23ms</ListItem>
            <ListItem>Styled-components: 16ms</ListItem>
            <ListItem>JSS: 16ms</ListItem>
            <ListItem>CSS Modules: 14ms</ListItem>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImageStyle={gradient}
          textColor="primary"
        >
          <Heading size={4} textColor="primary">
            Features
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <Notes>
            <h4>Demo points</h4>
            <ol>
              <li>hover</li>
              <li>element selector</li>
              <li>
                @media (min-width: 768px) {'{'}
                color: green;
                {'}'}
              </li>
              <li>В документации много примеров со всем СSS</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary">
            Button example
          </Heading>
          <ComponentPlayground
            code={snippets.styledComponent}
            scope={{ styled, createGlobalStyle, css }}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <Heading size={6} textColor="secondary">
            Inherit from other components
          </Heading>
          <ComponentPlayground
            code={snippets.inheritance}
            scope={{ styled, createGlobalStyle, css }}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <Heading size={6} textColor="secondary">
            Server side rendering
          </Heading>
          <CodePane lang="javascript" source={examples.ssr} textSize="23px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <Heading size={6} textColor="secondary">
            Animations
          </Heading>
          <ComponentPlayground
            code={snippets.animation}
            scope={{ styled, keyframes, }}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <Heading size={6} textColor="secondary">
            Theming
          </Heading>
          <ComponentPlayground
            code={snippets.theming}
            scope={{ styled, createGlobalStyle, css, ThemeProvider }}
          />
        </Slide>
        {/*<Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>jest-styled-components</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary">
            Testing
          </Heading>
          <CodePane lang="javascript" source={examples.tests} textSize="19px" />
    </Slide>*/}
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Все современные редакторы</li>
              <li>Плагины для лучшего дебага, сср</li>
              <li>Плагины для типов</li>
              <li>Модуль для юнит тестирования</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            Tooling
          </Heading>
          <List>
            <Appear><ListItem>Linting(Stylelint)</ListItem></Appear>
            <Appear><ListItem>Syntax highlights</ListItem></Appear>
            <Appear><ListItem>Babel plugins</ListItem></Appear>
            <Appear><ListItem>Typescript plugin</ListItem></Appear>
            <Appear><ListItem>Unit testing package(for Jest)</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <Heading size={6} textColor="secondary">
            Semantics: HTML + CSS(BEM)
          </Heading>
          <CodePane lang="javascript" source={examples.semanticsHtml} textSize="19px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <Heading size={6} textColor="secondary">
            Semantics: styled-components
          </Heading>
          <CodePane lang="javascript" source={examples.semanticsSC} textSize="19px" />
        </Slide>
        <Slide
          transition={["fade"]}
          bgImageStyle={gradient}
          textColor="primary"
        >
          <Heading size={4} textColor="primary">
            React Native ️support
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Image src={reactNative} />
        </Slide>
        <Slide
          transition={["fade"]}
          bgImageStyle={gradient}
          textColor="primary"
        >
          <Heading size={4} textColor="primary">
            Conclusion
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImageStyle={gradient}
          textColor="primary"
        >
          <Heading size={4} textColor="primary">
            Thank you! ❤  ️
          </Heading>
          Slides: <Link href="styled-talk.surge.sh" textColor="primary" style={{ textDecoration: "underline" }}>styled-talk.surge.sh</Link>
        </Slide>
      </Deck>
    );
  }
}
