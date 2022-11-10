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
                projects(dataRepo)
            }

            if(dataRepo.name === "CasaCriativa"){
                projects(dataRepo)
                colorLanguage()
            }
        })
    })
}

const projects = (data) => {
    const section = document.createElement("section")
    section.classList.add("projects")
    section.innerHTML = `
    <div>
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
    
    document.querySelector("main").appendChild(section)

    id(data.name)

    section.addEventListener("click", () => {
        window.open(data.html_url, "_blank")
    })

}

const colorLanguage = () => {
    document.querySelector(".language>div").classList.add("purple")
}

const id = (name) => {
    if(name == "Mini-Projects-Js") document.querySelector(".projects").id = "project1" 
}