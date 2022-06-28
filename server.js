const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function (req, res) {
  const about = {
    avatar_url: "C:\Users\Daniela Firma Paz\Documents\Bootcamp\works\Modulo03\Views\assets\img\Lumii_20220622_222203328.jpg",
    name: "Daniela Firma Paz",
    role: "Estudiante de programación e idiomas. Estudante de programacao e linguas. Programming and languages student. Studente di programmazione e linguaggi.",
    description: "Currently studying to be a developer and inscreasing the languages skills to be a polyglot.",
    links: [
      { name: "Instagram", url: "https://www.instagram.com/daniifirmapaz" },
      { name: "GitHub", url: "https://github.com/Dani-Firma-Paz" },
      { name: "Linkedin", url: "/" },
      { name: "Facebook", url: "https://www.facebook.com/dani.firmapaz" }
    ]
  }

  return res.render("about", { about })
})

server.get("/musica", function (req, res) {
  return res.render("musica", { items: videos })
})

server.listen(5000, function() {
console.log('server is running')
})