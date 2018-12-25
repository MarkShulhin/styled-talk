import React, { Component } from "react";
import styled, { css, createGlobalStyle, ThemeProvider } from "styled-components";

// Images
import SCStats from "../assets/SCStat.png";

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
            <li>Для начала хочу вернуться к истокам</li>
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
            <li>CSS это важно</li>
            <li>CSS это сложно</li>
            <li>Если неправильно пользоваться, то будет как слева</li>
          </ol>
          </Notes>
          <Image
            src="https://img.devrant.com/devrant/rant/r_458409_aXZph.gif"
            height={600}
            width={800}
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
            <ListItem>Global namespacing</ListItem>
            <ListItem>Dead code elimination</ListItem>
            <ListItem>Code maitainability</ListItem>
            <ListItem>Code readability</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
          <h4>Notes</h4>
          <ol>
            <li>Набор правил для структурирования кода</li>
            <li>Рассмотрим BEM как самый популярный в СНГ</li>
          </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            Code standards
          </Heading>
          <Text fit caps>
            smaccs | bem | atomic | oocss
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Notes>
          <h4>Notes</h4>
          <ol>
            <li>Создали ребята из Яндекса</li>
            <li>На примере обычная кнопка и главная</li>
          </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            BEM
          </Heading>
          <CodePane lang="javascript" source={examples.bem} textSize="25px" />
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
              <ListItem>Easy to setup</ListItem>
              <ListItem>Independent and reusable</ListItem>
              <ListItem>Classnames isolation</ListItem>
              <ListItem>Good performance</ListItem>
              <ListItem>Testing/Linting</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Notes>
              <h4>Notes</h4>
              <ol>
                <li>Как плюс так и минус</li>
                <li>Самое сложное в программировании</li>
                <li>Можно, но есть реализации и по-лучше</li>
                <li>Много кода</li>
              </ol>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            BEM Cons
          </Heading>
          <List>
              <ListItem>Strict structure</ListItem>
              <ListItem>Naming is hard</ListItem>
              <ListItem>Theming</ListItem>
              <ListItem>Bundle size</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Image src="https://psdtowp.net/modules/blog/uploads/image/css-preprocessors.jpg" />
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
              <ListItem>Variables, mixins etc.</ListItem>
              <ListItem>Less/tidier code with nesting</ListItem>
              <ListItem>Low learning curve</ListItem>
              <ListItem>Compile the way you need</ListItem>
              <ListItem>Works with BEM</ListItem>
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
              <ListItem>More dependencies</ListItem>
              <ListItem>You still have to name things</ListItem>
              <ListItem>Nesting hell</ListItem>
              <ListItem>Additional settings for components</ListItem>
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
            <ListItem>Media queries</ListItem>
            <ListItem>Pseudo selectors</ListItem>
            <ListItem>Vendor prefixes</ListItem>
            <ListItem>Animations</ListItem>
            <ListItem>Debugging</ListItem>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImageStyle={gradient}
          textColor="secondary"
        >
        <Notes>
          <h4>Notes</h4>
          <ol>
            <li>CSS-In-JS</li>
            <li>Их много и они похожи</li>
            <li>Макс Штойбер и Гленн Маддэрн</li>
          </ol>
        </Notes>
          <Image src="https://www.styled-components.com/static/logo.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Image src={SCStats} width={1380} height={380} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary" margin="0 0 50px 0">
            Installation
          </Heading>
          <Code margin="10px 0 0 0">npm install styled-components --save</Code>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" padding={0}>
          <Notes>
          <h4>Demo points</h4>
          <ol>
            <li>How it works!!</li>
            <li>hover</li>
            <li>media</li>
            <li>element selector</li>
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
            Server side rendering
          </Heading>
          <CodePane lang="javascript" source={examples.ssr} textSize="23px" />
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
              <ListItem>Linting(Stylelint)</ListItem>
              <ListItem>Syntax highlights</ListItem>
              <ListItem>Babel plugins</ListItem>
              <ListItem>Typescript plugin</ListItem>
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
              <ListItem>All of the JS magic!</ListItem>
              <ListItem>SSR support</ListItem>
              <ListItem>Theming out of the box</ListItem>
              <ListItem>Flow/Typescript support</ListItem>
              <ListItem>Autoprefix out of the box</ListItem>
              <ListItem>Newcomers friednly</ListItem>
              <ListItem>No dead code</ListItem>
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
              <ListItem>New mindset to get used to</ListItem>
              <ListItem>Another thing to teach</ListItem>
              <ListItem>Beware of NaN's</ListItem>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImageStyle={gradient}
          textColor="primary"
        >
          <Heading size={4} textColor="primary">
            Thank you!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
