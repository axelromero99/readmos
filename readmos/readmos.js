// READMOS LIBRARY
// *******************************************************
// Author: Axel René Romero Esquivel
// Emilio Furrer
// Web: https://www.arrecode.com
// Github: https://github.com/axelromero99
// Linkedin: https://www.linkedin.com/in/arrecode/
// *******************************************************


// Only runs when the DOM is ready to receive actions
document.addEventListener("DOMContentLoaded", function() {
    //  Github emojis object from the emojis.js script
    var emojisObject = emojis;

    // Element of github user API URL
    const userURL = document.getElementsByClassName("readmosWrapper")[0].id;
    // Elements of readmosBtn
    const readmosBtn = document.getElementsByClassName("readmosBtn");
    // Initialization of array for repos name
    const listOfReposBtn = [];
    // Creating an array from all the buttons, with the name of the repo
    for (let item of readmosBtn) {
        listOfReposBtn.push(item.id);
    }

    // Executing the principal function
    getRepos(userURL);

    //===================================================================//
    // Definition of functions
    async function getRepos(userURL) {
        const response = await fetch(userURL);

        const result = await response.json();

        // Initialization of repositories object
        let reposObject = new Object();
        // Initialization of set for keys
        let reposNameSet = new Set();

        // Recorring all the repositories and creating the object
        // key = repoName || value = rawURL
        for (let i = 0; i < result.length; i++) {
            //console.log(result[i])

            repoName = result[i].name;
            //console.log(repoName)

            // Modifying the URL to for accessing to the raw content of the README.md
            rawURL = result[i].html_url + "/master/README.md";
            rawURL = [rawURL.slice(0, 8), "raw.", rawURL.slice(8)].join("");
            rawURL = rawURL.replace("github", "githubusercontent");
            //console.log(rawURL)

            reposObject[repoName] = rawURL;
            reposNameSet.add(repoName);
        }

        // Comprobate if each element on listOfReposBtn is in the reposNameSet
        for (let item of listOfReposBtn) {
            if (reposNameSet.has(item)) {
                //  if is in, add the onClick function to the fetchReadme
                document.getElementById(item).addEventListener("click", () => {
                    fetchReadme(reposObject[item]);
                });
            } else {
                console.log(`The "${item}" does not exist in your github profile`);
            }
        }
    }

    async function fetchReadme(url) {
        const response = await fetch(url);

        response.text().then(function(text) {
            // In this line we use marked library to parse the MD to HTML
            let dirty = marked.parse(text);
            // Calling function to replace all the icon syntax of github with the respective icon image
            dirty = replaceIcons(dirty);
            // In this line we use DOMPurify library to purify the HTML and show it correctly
            let clean = DOMPurify.sanitize(dirty);
            document.getElementsByClassName("readmosContent")[0].innerHTML = clean;
        });
    }

    function replaceIcons(dirty) {
        const regexp = RegExp(":[a-zA-Z1-9_+-]*:", "g");
        let dirtyCopy = dirty;
        let word;
        let ocurrency;

        while ((ocurrency = regexp.exec(dirty)) !== null) {
            //console.log(`Found ${ocurrency[0]} start=${ocurrencia.index} end=${regexp.lastIndex}.`);

            // Delete the : of the word
            word = ocurrency[0].slice(1, -1);
            // Compare if the emoji syntax is on the emojisObject
            if (Object.keys(emojisObject).includes(word)) {
                let emojiHTML = `<img class="githubEmoji" src="${emojisObject[word]}"></img>`;

                dirtyCopy = dirtyCopy.replace(/\:[a-zA-Z_]*\:/, emojiHTML);
            }
        }

        return dirtyCopy;
    }
});