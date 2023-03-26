const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("home", {pageTitle: "Willkommen", pageImage: "/images/blueprint2.jpg"})
});

app.get("/buero", function(req, res){
  res.render("buero", {pageTitle: "Büro", pageImage: "/images/blueprint1.jpg"})
});

app.get("/leistungen", function(req, res){
  res.render("leistungen", {pageTitle: "Leistungen", pageImage: "/images/technical-drawing.jpg"})
});

app.get("/referenzen", function(req, res){
  res.render("referenzen", {pageTitle: "Referenzen", pageImage: "/images/blueprint2.jpg"})
});

app.get("/kontakt", function(req, res){
  res.render("kontakt", {pageTitle: "Kontakt", pageImage: "/images/Leipzig-map.jpg"})
});

app.get("/impressum", function(req, res){
  res.render("impressum", {pageTitle: "Impressum", pageImage: "/images/BG-img.jpg"})
});

app.get("/datenschutz", function(req, res){
  res.render("datenschutz", {pageTitle: "Datenschutz", pageImage: "/images/BG-img.jpg"})
});

app.get("/thankyou", function(req, res){
  res.render("thankyou", {pageTitle: "Datenschutz", pageImage: "/images/BG-img.jpg"})
});

app.get("/news/stellenanzeige-bereich-hls-planung", function(req, res){
  res.render("news/stellenanzeige-bereich-hls-planung", {pageTitle: "Verstärkung im Bereich HLS-Planung gesucht", pageImage: "/images/technical-drawing.jpg"})
});

app.get("/news/erster-preis-beim-architektenwettbewerb", function(req, res){
  res.render("news/erster-preis-beim-architektenwettbewerb", {pageTitle: "Erster Preis beim Architektenwettbewerb", pageImage: "/images/technical-drawing.jpg"})
});

app.get("/news/vds-zertifizierung", function(req, res){
  res.render("news/vds-zertifizierung", {pageTitle: "VdS-Zertifizierung", pageImage: "/images/blueprint1.jpg"})
});



app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running.");
});
