/**
 * Created by colinjsherman on 7/18/16.
 */
//Unit 10

//Exercise 1
function Country(name){
    this.name = name;
    this.leader;
    this.continent;
    this.systemOfGovernment;
    this.GDP;
}

function Restaurant(name){
    this.name = name;
    this.menu = [];
    this.address = "USA";
    this.phone;
    this.open = new Date();
    this.close = new Date();
}

function MusicAlbum(artist){
    this.artist = artist;
    this.songlist = [];
    this.release = new Date();
    this.genre;
}

function Sports(name,city){
    this.name = name;
    this.home = city;
    this.mascot = "Hornets";
    this.players = [];
    this.starters = [];
    this.wins = 0;
    this.loses = 0;
}

function Movie(name){
    this.name = name;
    this.stars = [];
    this.director = "Steven Speilberg";
    this.release = new Date(2016,08,12);
    this.boxoffice = 0;
}




//EXERCISE 2

var Circle = function(r){
    this.radius = r;
};
Circle.prototype.area = function(){
    return Math.PI * this.radius * this.radius;
};
var c = new Circle(10);

/*
* c.constructor ===
* function (r){
 this.radius = r;
 }
*
* the enumerable properties in c include 'radius' and 'area'
* area is a method inherited from the prototype.
* */



//Exercise 22:
var reversal = function(string){
    var newString = "";
    for (i=string.length-1;i>=0;i--){
        newString = newString+string.charAt(i);
    }
    return newString;
};

//alert(reversal("Colin"));



//Exercise 23:
//(see HTML)

document.getElementById("reverse").addEventListener("click",function(){
    var input = document.getElementById("input").value;
    document.getElementById("input").value = reversal(input);
});