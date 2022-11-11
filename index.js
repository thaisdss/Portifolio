fetch("https://api.github.com/users/thaisdss")
.then(response => response.json())
.then(data => {
    avatar(data.avatar_url)
    repos(data.repos_url)
})

const avatar = (url) => {
    document.querySelector("#profile>img").src = url
}

const repos = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(dataRepo => {
            if(dataRepo.name === "Mini-Projects-JS"){
                createProject(dataRepo)
            }

            if(dataRepo.name === "CasaCriativa"){
                createProject(dataRepo)
            }

            if(dataRepo.name === "Aluracord-Matrix"){
                createProject(dataRepo)
            }

            if(dataRepo.name === "Projeto-Android"){
                createProject(dataRepo)
            }
        })
    })
}

const createProject = (data) => {
    const section = document.createElement("section")
    section.classList.add("projects")
    section.innerHTML = `
    <div class="projectName">
        <img src="assets/folder.svg" alt="Imagem de Folder">
        <p class="projectName">${data.name}</p>
    </div>

    <p class="projectDescription">${data.description}</p>

    <div class="star-fork">
        <img src="assets/star.svg" alt="Imagem de Estrela">
        <p class="projectStar">${data.stargazers_count}</p>

        <img src="assets/git-branch.svg" alt="Imagem de Branch">
        <p class="projectForks">${data.forks_count}</p>
    </div>

    <div class="language">
        <div class="languageColor"></div>
        <p class="projectLanguage">${data.language}</p>
    </div>`

    insertProject(data.name, section, data.language)

    section.addEventListener("click", () => {
        window.open(data.html_url, "_blank")
    })

}

const insertProject = (name, section, language) => {
    if(name == "Mini-Projects-JS"){
        section.classList.add("project1")
        document.querySelector("main").appendChild(section)
        colorLanguage(1, language)
     }

    if(name == "CasaCriativa"){
        section.classList.add("project2")
        document.querySelector("main").appendChild(section)
        colorLanguage(2, language)
    }

    if(name == "Aluracord-Matrix"){
        section.classList.add("project3")
        document.querySelector("main").appendChild(section)
        colorLanguage(3, language)
     }

     if(name == "Projeto-Android"){
        section.classList.add("project4")
        document.querySelector("main").appendChild(section)
        colorLanguage(4, language)
     }
}

const colorLanguage = (number, language) => {
    if(language === "JavaScript"){
        document.querySelector(`.project${number}>.language>div`).classList.add("js")
    }

    if(language === "HTML"){
        document.querySelector(`.project${number}>.language>div`).classList.add("html")
    }

    if(language === "CSS"){
        document.querySelector(`.project${number}>.language>div`).classList.add("css")
    }
}