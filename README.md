# READMOS

_READMOS is the solution for having your github and your web portfolio updated._

Every programmer have a Github, and every programmer have his own web portfolio (or should have). READMOS is a javascript/css library that provide you a way to show in your web page the README.md of your repositories, using the Github API and others third libraries. You can choose what repository/ies show, just need to provide your Github username and the name of the repository.

Using READMOS you save a lot of time! You only have to update de README.md of your repositories if you make any change and your web page will be always updated with the last information.  

### Features 📋
* Easy to use
* README.md styled with Github style ( if you dont want it, just delete a class )
* Supports the Github emojis syntax ( like :star: )
* Developed on Javascript, CSS and uses Github API

## Starting 🚀


### Pre-requisites 📋
It can be used in any web project!

You only need to download or clone this repository. All the code is inside the "readmos" folder.


### Setup 🔧

This is the basic template ( named "readmos.html" in this repository ). The instructions are easy, just read the comments.

```html
<!DOCTYPE html>
<html lang="en">

<head>

    <!-- Github markdown style -->
    <link rel="stylesheet" href="readmos/github-markdown.css">

</head>

<body>

    <!-- { READMOS WRAPPER } -->
    <!-- Replace the USER with your github user -->
    <div class="readmosWrapper" id="https://api.github.com/users/USER/repos">

        <!-- { READMOS BUTTONS } -->
        <!-- Replace REPONAME with the name of your repository -->
        <button class="readmosBtn" id="REPONAME">Open project 1</button>
        <button class="readmosBtn" id="REPONAME2">Open project 2</button>

    </div>

    <!-- { READMOS CONTENT } -->
    <!-- Here is displayed the content of the readme.MD -->
    <!-- If you don't want the github style, delete the class "markdown-body" -->
    <div class="markdown-body readmosContent"></div>

    <!-- =========================================================== -->
    <!-- THIRDS LIBRARIES USED FOR READMOS -->
    <script type="text/javascript" src="readmos/purify.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="readmos/emojis.js"></script>
    <!-- READMOS SCRIPT -->
    <script src="readmos/readmos.js"></script>
    
</body>

</html>
```

### Aclarations 📋

* If you want the library to work correctly, don't delete any class ( except of "markdown-body", if you don't want the github style for the content ) 
* You can put the { READMOS BUTTONS } wherever you want, it is not necessary to have them inside the { READMOS WRAPPER }. The same for the { READMOS CONTENT }.
* The { READMOS BUTTONS } does not need to be a button tag, it can be any tag you want ( like a div, a img, a span, etc. )

:star: And that's all! It should work if you read all the instructions and replace the correct items with your information. :star:

## Developed with 🛠️

READMOS is developed in Javascript Vanilla and CSS ( i use Visual Studio Code ).

I used the next third libraries and APIs:

* [Github REST API](https://docs.github.com/en/rest) - For fetching the repositories of Github user and their respective URLs
* [marked](https://github.com/markedjs/marked) - For parsing the markup to HTML
* [DOMPurify](https://github.com/cure53/DOMPurify) - For sanitisize HTML
* [Github-markdown-css](https://github.com/sindresorhus/github-markdown-css) - For styling the README.md with the Github style
* [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md
) - For the JSON with the Github emojis URLs

## Contribute 🖇️

It is my first library! So it can have errors, and there is a lot of functionalities that can be added. I will be really happy if you contribute to the project!

Please, feel free to submitting pull requests to us.

## Author ✒️

**Axel René Romero Esquivel [ arre[code] ]** - *Fullstack Web and Python Developer* - 

* [Web](https://www.arrecode.com) 
* [LinkedIn](https://www.linkedin.com/in/arrecode/)
* [Github](https://github.com/axelromero99)

Special thanks to Gaston Chifflets, Ignacio Liotti, Juan Gabriel Caceres Braun, Ivan Castellanos Saba, Valentina Sosa and Enzo Camera, all amazing developers, for the feedback.

## License 📄

This project is under the License (Your License) - see the file [LICENSE](LICENSE.md) for details.

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
Desarrollado con ❤️ por [arre[code]](https:www.arrecode.com) 
