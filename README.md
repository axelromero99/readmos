<h1 align="center" style="border-bottom: none">
    <b>
        <a href="https://github.com/axelromero99/readmos/">READMOS </a><br>
    </b>
 :collision:Show the README.md of any Github repository in your web:collision:<br>

</h1>

_The solution for having your Github and your web updated, with less effort._


READMOS is a Javascript library that provides you a way to show in your web page the README.md of any Github repositories, using the Github API and others third libraries. You can choose what repositories show, just need to provide the Github username and the name of the repositories.


Every programmer should have a Github, and every programmer should  have his own web portfolio.  Using READMOS you save a lot of time! You only have to update de README.md of your repositories if you make any change and your web page will be always updated with the last information.  

READMOS is open source! Feel free to contribute to this project.

### Live Demos 
* [Live basic template](https://codesandbox.io/s/readmosbasic-thcy5)
* [Live Bootstrap 5 template](https://codesandbox.io/s/readmosbootstrap-7ek73?file=/index.html)

### Features 📋
* Easy to use: provide Github username and the repositories names ( only public )
* You can show your repositories or anyone's repositories.
* README.md styled with Github style ( if you dont want it, just delete a class )
* Supports the Github emojis syntax ( like :star: )
* Developed on Javascript, CSS. Uses Github API and others thirds libraries.
* We provide you a basic template and a Bootstrap 5 template with more functionalities and style.

## Starting 🚀


### Pre-requisites 📋
1. Clone or download the repository 

```bash
git clone https://github.com/axelromero99/readmos.git
```

2. Change the working directory

```bash
cd readmos
```

Open **readmos.html** for the basic template or **readmos_bootstrap.html** for a more structured and styled result.


🌟 You have all the necessary! 🌟

---

### Setup with the basic template 🔧

This is the basic template ( readmos.html ). It is the best option if you want to integrate in your web the library in the most simple way and give it the style, structure and extra functionalities.

You need to provide your Github **USER** and as many repositories **REPONAME** you want to show.

_For this template, you only need to have the readmos folder and the readmos.html file. You can delete the readmos_bs_source folder and readmos_bootstrap.html_

```html
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
    
</body>

```

### Aclarations 📋

* If you want the library to work correctly, don't delete any class ( except of "markdown-body", if you don't want the github style for the content ) 
* You can put the { READMOS BUTTONS } wherever you want, it is not necessary to have them inside the { READMOS WRAPPER }. 
* The { READMOS BUTTONS } does not need to be a button tag, it can be any tag you want ( like a div, a img, a span, etc. )
* You can put the { READMOS CONTENT} wherever you want to show the README.md.


:star: And that's all! It should work if you read all the instructions and replace the correct items with your information. :star:

---

### Setup with the bootstrap template 🔧

With this template ( readmos_bootstrap.html ) you will have imported Bootstrap 5 framework with a implementation of READMOS using the [cards](https://getbootstrap.com/docs/5.0/components/card/), [modal](https://getbootstrap.com/docs/5.0/components/modal/) and [button](https://getbootstrap.com/docs/5.0/components/buttons/) components. It is a good start if you want to have an easy structure, styling and form to show the README.md in your web.

You need to provide your Github **USER** and as many repositories **REPONAME** you want to show, as well. 

In the card components, you can:

* Change the src of the img tag with an image of your project ( by default, the PATH is "./readmos_bs_source/images/yourimage.png" ).
* Change the card title with your project title.
* Change the card text with a little project description.
* Change the button text ( or the bootstrap style: [button](https://getbootstrap.com/docs/5.0/components/buttons/))

_For this template, you can delete the readmos.html. You only need to have the readmos folder , the readmos_bs_source folder and the readmos_bootstrap.html file. Inside the readmos_bs_source you have a little CSS file, for styling the display flex of the cards and a little modification for them._

```html
<!-- READMOS WRAPPER-->
<!-- Here you have to replace "USER" with your github user -->
<div class="readmosWrapper" id="https://api.github.com/users/USER/repos">

    <!-- Bootstrap Card -->
    <div class="card" style="width: 18rem;">
        <!-- Put your images inside the ./readmos_bs_source/images folder -->
        <!-- Replace the "PROJECTIMAGE" with the name of your image -->
        <img class="card-img-top" src="./readmos_bs_source/images/PROJECTIMAGE.png" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Your project name</h5>
            <p class="card-text">This is a little description of your project.</p>

            <!-- This is the button of your repository -->
            <!-- In the id, you have to replace "REPONAME" with your repository name -->
            <button type="button" class="btn btn-dark readmosBtn" data-bs-toggle="modal" data-bs-target="#exampleModal" id="REPONAME">
            Open project
            </button>
        </div>
    </div>
</div>


<!-- Bootstrap Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- { READMOS CONTENT } -->
                <!-- Here is displayed the content of the readme.MD -->
                <!-- If you don't want the github style, delete the class "markdown-body" -->
                <div class="markdown-body readmosContent"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
```

### Aclarations 📋

If you want to personalize it more, you can use all the options that Bootstrap 5 provides you and/or make your own CSS and overwrite some style. I suggest you to look at the documentation of Bootstrap and see what you can do using the framework:
* [cards](https://getbootstrap.com/docs/5.0/components/card/)
* [modal](https://getbootstrap.com/docs/5.0/components/modal/)
* [button](https://getbootstrap.com/docs/5.0/components/buttons/)

## Developed with 🛠️

READMOS is developed in Javascript Vanilla and CSS ( i use Visual Studio Code ).

I used the next third libraries and APIs:

* [Github REST API](https://docs.github.com/en/rest) - For fetching the repositories of Github user and their respective URLs
* [marked](https://github.com/markedjs/marked) - For parsing the markup to HTML
* [DOMPurify](https://github.com/cure53/DOMPurify) - For sanitisize HTML
* [Github-markdown-css](https://github.com/sindresorhus/github-markdown-css) - For styling the README.md with the Github style
* [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md
) - For the JSON with the Github emojis URLs
* [Bootstrap 5](https://getbootstrap.com/) - For readmos_bootstrap template

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

This project is under the License (MIT License) - see the file [LICENSE](LICENSE.md) for details.

## Express your gratitude 🎁

* Tell others about this project 📢
* Invite me a [Cafecito](https://cafecito.app/arrecode)
* I am already grateful that you have seen my project!


---
Developed with ❤️ by [Axel René Romero Esquivel [ arre[code] ]](https:www.arrecode.com) 
