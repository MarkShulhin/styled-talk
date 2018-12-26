import React, { Component } from "react";
import styled, { css, createGlobalStyle, ThemeProvider, keyframes } from "styled-components";

// Images
import SCStats from "../assets/SCStats.png";
import SCUSED from "../assets/SCUSED.png";
import UPSA from "../assets/whoami.png";
import PREPROC from "../assets/preproc.png";
import CSSINJS from "../assets/css-in-js.png";
import BTN from "../assets/btn.png";
import BTNSTYLED from "../assets/btn-styled.png";
import HEAD from "../assets/head.png";
import PERF from "../assets/performance.png";
import BEM from '../assets/bem1.png';

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
              <li>Hello words</li>
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
              <li>Как вы думаете какие решения помогут решить эти проблемы?</li>
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
          <Image src={BEM} width={800} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Просто берем и пишем</li>
              <li>Можно переносить из проекта в проект</li>
              <li>Решается проблема глобал скоупа</li>
              <li>Большая экосистема инструментов</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            BEM Pros
          </Heading>
          <List>
            <Appear><ListItem>Easy to setup</ListItem></Appear>
            <Appear><ListItem>Independent and reusable</ListItem></Appear>
            <Appear><ListItem>Classnames isolation</ListItem></Appear>
            <Appear><ListItem>Good performance</ListItem></Appear>
            <Appear><ListItem>Testing/Linting</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Как плюс так и минус</li>
              <li>Самое сложное все таки осталось и это нужно делать</li>
              <li>Можно, но есть реализации и по-лучше</li>
              <li>Много кода</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            BEM Cons
          </Heading>
          <List>
            <Appear><ListItem>Strict structure</ListItem></Appear>
            <Appear><ListItem>Naming is hard</ListItem></Appear>
            <Appear><ListItem>Theming</ListItem></Appear>
            <Appear><ListItem>A lot of code</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Image src={PREPROC} height={312} width={732} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Все те же две кнопки</li>
              <li>Логика отображения в компоненте</li>
              <li>Nesting классов</li>
            </ol>
          </Notes>
          <CodePane lang="javascript" source={examples.sass} textSize="17px" />
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
            Pros
          </Heading>
          <List>
            <Appear><ListItem>Variables, mixins etc.</ListItem></Appear>
            <Appear><ListItem>Less/tidier code with nesting</ListItem></Appear>
            <Appear><ListItem>Low learning curve</ListItem></Appear>
            <Appear><ListItem>Compile the way you need</ListItem></Appear>
            <Appear><ListItem>Works with BEM</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Поднастроить вебпак</li>
              <li>Подключить пару-пар лоадеров</li>
              <li>В плохих руках вложенность улетает на дно</li>
              <li>Еще немного вебпака для компонентов</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            Cons
          </Heading>
          <List>
            <Appear><ListItem>More dependencies</ListItem></Appear>
            <Appear><ListItem>You still have to name things</ListItem></Appear>
            <Appear><ListItem>Nesting hell</ListItem></Appear>
            <Appear><ListItem>Additional settings for components</ListItem></Appear>
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
              <li>Уже больше возможностей</li>
              <li>Но все еще костыльно</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary">
            React-JSS
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
          <Heading size={4} >Performance?</Heading>
          <Image src={PERF} />
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
            CSS function
          </Heading>
          <CodePane lang="javascript" source={examples.mixins} textSize="19px" />
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
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
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
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Все современные редакторы</li>
              <li>Плагины для лучшего дебага, сср</li>
              <li>Плагины для типов</li>
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
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Огромное множество возможностей</li>
              <li>Много фич из коробки</li>
              <li>Легче втянуться новому члену команды</li>
              <li>Удаляем компонент - удаляем CSS</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            Pros
          </Heading>
          <List>
            <Appear><ListItem>All of the JS magic!</ListItem></Appear>
            <Appear><ListItem>SSR support</ListItem></Appear>
            <Appear><ListItem>Theming out of the box</ListItem></Appear>
            <Appear><ListItem>Flow/Typescript support</ListItem></Appear>
            <Appear><ListItem>Autoprefix out of the box</ListItem></Appear>
            <Appear><ListItem>No dead code</ListItem></Appear>
            <Appear><ListItem>Namings is not that hard anymore</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Это как jsx в свое время</li>
              <li>Нужно время на обучение</li>
              <li>Нужно быть осторожным с входящими данными</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            Cons
          </Heading>
          <List>
            <Appear><ListItem>New mindset to get used to</ListItem></Appear>
            <Appear><ListItem>Another thing to teach</ListItem></Appear>
            <Appear><ListItem>Beware of NaN's</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImageStyle={gradient}
          textColor="primary"
        >
          <Heading size={4} textColor="primary">
            Thank you! ❤  ️
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
