
var niveau = 301;
var capital = 1415;
// carac: pt de competence utilisé par competence
// min: minimum en pt de compétence,
// pt: nb de pt de compétence,
// capital: point de capital utilisé
var caractere = {"Vie":{"min":100, "pt":1200, "capital":50},
                 "Force":{"min":0, "pt":0, "capital":0},
                 "Sagesse":{"min":0, "pt":0, "capital":0},
                 "Agilite":{"min":0, "pt":0, "capital":0},
                 "Resistance":{"min":0, "pt":0, "capital":0},
                 "Science":{"min":0, "pt":600, "capital":700},
                 "Magie":{"min":0, "pt":0, "capital":0},
                 "Frequence":{"min":100, "pt":100, "capital":0},
                 "TP":{"min":10, "pt":20, "capital":525},
                 "MP":{"min":3, "pt":7, "capital":140}};


weapons["0"] = {"name":"--", "level":0};
var selectedWeapons = [0,0,0,0];
var index2weapon = new Array();

chips["0"] = {"name":"--", "level":0, "effects":[{"type":0}]};
chips["-1"] = {"name":"##### Degats #####", "level":0, "effects":[{"type":1}]};
chips["-2"] = {"name":"##### Soins #####", "level":0, "effects":[{"type":2}]};
chips["-3"] = {"name":"##### Boosts #####", "level":0, "effects":[{"type":3}]};
chips["-4"] = {"name":"##### Boucliers #####", "level":0, "effects":[{"type":4}]};
chips["-5"] = {"name":"##### Tactique #####", "level":0, "effects":[{"type":5}]};
chips["-6"] = {"name":"##### Renvois #####", "level":0, "effects":[{"type":6}]};
chips["-7"] = {"name":"##### Poisons #####", "level":0, "effects":[{"type":7}]};
chips["-8"] = {"name":"##### Bulbes #####", "level":0, "effects":[{"type":8}]};
chips["-9"] = {"name":"##### Entraves #####", "level":0, "effects":[{"type":9}]};
var selectedChips = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var index2chip = new Array();

function sauvegarder() {
    console.log(selectedChips);
    localStorage.setItem('niveau', JSON.stringify(niveau));
    localStorage.setItem('caractere', JSON.stringify(caractere));
    localStorage.setItem('selectedChips', JSON.stringify(selectedChips));
    localStorage.setItem('selectedWeapons', JSON.stringify(selectedWeapons));
    console.log(JSON.stringify(selectedWeapons));
}

function charger() {
    if(localStorage.getItem('niveau')) {
        niveau = JSON.parse(localStorage.getItem('niveau'));
        caractere = JSON.parse(localStorage.getItem('caractere'));
        selectedChips = JSON.parse(localStorage.getItem('selectedChips'));
        selectedWeapons = JSON.parse(localStorage.getItem('selectedWeapons'));   
        setItems();     
        majNiveau(0);
        majCapital();
        majToutesCaracteristiques();
        majToutesArmes(-1);
        majToutesPuces(-1);
    }
}

function setItems(){
    console.log(selectedChips);
    for (const [index, value] of selectedChips.entries()) {
        console.log(index + " : " + value);
        document.getElementById("puce" + index).value=value;
    }
    for (const [index, value] of selectedWeapons.entries()) {
        console.log(index + " : " + value);
        document.getElementById("arme" + index).value=value;
    }
}

/*
 * Initialisation du Niveau
 */
function initNiveau() {
    //console.log("init: niveau");
    let lediv = "<div>";
    lediv += "<label id=\"niveaulabel\">Niveau  : " + niveau + "</label>";
    lediv += "<button id=\"niveauplusun\" onclick='majNiveau(1)'>+1</button>";
    lediv += "<button id=\"niveaumoinsun\" disabled onclick='majNiveau(-1)'>-1</button>";
    lediv += "<button id=\"niveauplusdix\" onclick='majNiveau(10)'>+10</button>";
    lediv += "<button id=\"niveaumoinsdix\" disabled onclick='majNiveau(-10)'>-10</button>";
    lediv += "<button id=\"niveaupluscent\" onclick='majNiveau(100)'>+100</button>";
    lediv += "<button id=\"niveaumoinscent\" disabled onclick='majNiveau(-100)'>-100</button>";
    lediv += "</div>";
    document.getElementById("niveau").innerHTML += lediv;
    majCapital();
}


/*
 * Initialisation des Caracteres
 */
function initCaracteres() {
    //console.log("init: caracteres");
    let lediv = "";
    for (let car in caractere) {
        lediv += "<div>";
        lediv += "<label id=\"" + car + "label\">" + car + " : " + caractere[car]["pt"] + "</label>";
        lediv += "<button id=\"" + car + "plusun\" onclick='majCaracteristique(\"" + car + "\", 1)'>+1</button>";
        lediv += "<button id=\"" + car + "moinsun\" disabled onclick='majCaracteristique(\"" + car + "\", -1)'>-1</button>";
        lediv += "<button id=\"" + car + "plusdix\" onclick='majCaracteristique(\"" + car + "\", 10)'>+10</button>";
        lediv += "<button id=\"" + car + "moinsdix\" disabled onclick='majCaracteristique(\"" + car + "\", -10)'>-10</button>";
        lediv += "<button id=\"" + car + "pluscent\" onclick='majCaracteristique(\"" + car + "\", 100)'>+100</button>";
        lediv += "<button id=\"" + car + "moinscent\" disabled onclick='majCaracteristique(\"" + car + "\", -100)'>-100</button>";
        lediv += "<label id=\"" + car + "capitallabel\">(0)</label>";
        lediv += "</div>";
    }
    document.getElementById("caracteres").innerHTML += lediv;
}



/*
 * Initialisation des Armes
 */
function initArmes() {
    //console.log("init: armes");
    for (let weap in weapons) index2weapon.push(weap);
    // par ordre alphabetique
    /*
    index2weapon.sort(function (a,b) {
        if (a == b) return 0;
        if (a == "--") return -1;
        if (b == "--") return 1;
        if (weapons[a]["name"] < weapons[b]["name"]) return -1
        return 1;
    });
    */
    // par ordre de niveau
    index2weapon.sort(function (a,b) {
        return weapons[a]["level"] - weapons[b]["level"];
    });
    
    
    let laligne = `
        <tr>
        <th>Nom</th>
        <th>Degats</th>
        <th>Poison</th>
        <th>Entrave</th>
        <th>Boost</th>
        <th>Soin</th>
        <th>Bouclier</th>
        <th>Renvoi</th>
        <th>Portée</th>
        <th>Zone</th>
        <th>Coût</th>
        </tr>`;
    //        <!--<th>Cooldown</th>-->
    for (let k=0; k<4; k++) {
        laligne += "<tr><td>";
        laligne += "<select id=\"arme" + k + "\" name=\"arme" + k + "\" onchange='majArme(" + k + ")'>";
        for (let j=0; j<index2weapon.length; j++) {
            let ind = index2weapon[j];
            laligne += "<option id=\"arme" + k + "-" + ind + "\" value=\"" + ind + "\">" + weapons[ind]["name"];
            if (j>0)
                laligne += " ("+weapons[ind]["level"]+")";
        }
        laligne += `</select></td>
            <td id="adamage` + k + `"></td>
            <td id="apoison` + k + `"></td>
            <td id="anerf` + k + `"></td>
            <td id="aboost` + k + `"></td>
            <td id="asoin` + k + `"></td>
            <td id="ashield` + k + `"></td>
            <td id="areturn` + k + `"></td>
            <td id="aportee` + k + `"></td>
            <td id="azone` + k + `"></td>
            <td id="acost` + k + `"></td></tr>`;
    }
    document.getElementById("armetable").innerHTML += laligne;
    majToutesArmes(-1);
}



/*
 * Initialisation des Puces
 */
function initPuces() {
    //console.log("init: puces");
    for (let chip in chips) index2chip.push(chip);
    // par ordre alphabetique
    /*
    index2weapon.sort(function (a,b) {
        if (a == b) return 0;
        if (a == "--") return -1;
        if (b == "--") return 1;
        if (weapons[a]["name"] < weapons[b]["name"]) return -1
        return 1;
    });
    */
    // par ordre de niveau
    /*
    index2chip.sort(function (a,b) {
        return chips[a]["level"] - chips[b]["level"];
    });
    */
    // par genre puis par niveau
    index2chip.sort(function (a,b) {
        if (chips[a]["effects"][0]["type"] != chips[b]["effects"][0]["type"])
            return chips[a]["effects"][0]["type"] - chips[b]["effects"][0]["type"];
        return chips[a]["level"] - chips[b]["level"];
    });
    
    
    let laligne = `
        <tr>
        <th>Nom</th>
        <th>Degats</th>
        <th>Poison</th>
        <th>Entrave</th>
        <th>Boost</th>
        <th>Soin</th>
        <th>Bouclier</th>
        <th>Renvoi</th>
        <th>Portée</th>
        <th>Zone</th>
        <th>Coût</th>
        <th>Cooldown</th>
        </tr>`;
    for (let k=0; k<15; k++) {
        laligne += "<tr><td>";
        laligne += "<select id=\"puce" + k + "\" name=\"puce" + k + "\" onchange='majPuce(" + k + ")'>";
        for (let j=0; j<index2chip.length; j++) {
            let ind = index2chip[j];
            laligne += "<option id=\"chip" + k + "-" + ind + "\" value=\"" + ind + "\"";
            if (ind < 0)
                laligne += " disabled";
            laligne += ">" + chips[ind]["name"];
            if (ind > 0)
                laligne += " ("+chips[ind]["level"]+")";
        }
        laligne += `</select></td>
            <td id="pdamage` + k + `"></td>
            <td id="ppoison` + k + `"></td>
            <td id="pnerf` + k + `"></td>
            <td id="pboost` + k + `"></td>
            <td id="psoin` + k + `"></td>
            <td id="pshield` + k + `"></td>
            <td id="preturn` + k + `"></td>
            <td id="pportee` + k + `"></td>
            <td id="pzone` + k + `"></td>
            <td id="pcost` + k + `"></td>
            <td id="pcooldown` + k + `"></td>
            </tr>`;
    }
    document.getElementById("pucetable").innerHTML += laligne;
    majToutesPuces(-1);
}





/*
 * MaJ du Niveau
 */
function majNiveau(add) {
    //console.log("maj niveau: " + add);
    if (niveau + add < 1) return;
    if (niveau + add > 301) return;
    niveau += add;
    document.getElementById("niveauplusun").disabled = (niveau == 301);
    document.getElementById("niveaumoinsun").disabled = (niveau == 1 || getMaxCapitalPt(niveau-1) < capital);
    document.getElementById("niveauplusdix").disabled = (niveau > 291);
    document.getElementById("niveaumoinsdix").disabled = (niveau < 10 || getMaxCapitalPt(niveau-10) < capital);
    document.getElementById("niveaupluscent").disabled = (niveau > 201);
    document.getElementById("niveaumoinscent").disabled = (niveau < 101 || getMaxCapitalPt(niveau-100) < capital);
    document.getElementById("niveaulabel").innerHTML = 'Niveau : ' + niveau;
    if (add != 0) {
        let deltavie = 97 + 3*niveau - caractere["Vie"]["min"];
        caractere["Vie"]["min"] += deltavie;
        caractere["Vie"]["pt"] += deltavie;
        majCapital();
        majToutesCaracteristiques();
        majToutesArmes(-1);
        majToutesPuces(-1);
    }
}



/*
 * MaJ du Capital
 */
function majCapital() {
    //console.log("maj capital");
    document.getElementById("capitallabel").innerHTML = 'Capital : ' + capital + "/" + getMaxCapitalPt(niveau);
}



/*
 * MaJ d'un Caractere
 */
function majCaracteristique(type, add) {
    console.log("maj caracteristique: type: "+type+", add:" + add);
    let coty = caractere[type]["pt"] + add;
    let cout = getCaractereCost(type,coty) - getCaractereCost(type,caractere[type]["pt"]);
    while (parseInt(cout) != cout) {
        coty += (add > 0 ? 1 : -1);
        cout = getCaractereCost(type,coty) - getCaractereCost(type,caractere[type]["pt"]);
    }
    if (coty < caractere[type]["min"]) return;
    if (capital + cout > getMaxCapitalPt(niveau)) return;
    document.getElementById(type + "label").innerHTML = type + ' : ' + coty;
    caractere[type]["capital"] += cout;
    capital += cout;
    caractere[type]["pt"] = coty;
    document.getElementById(type + "capitallabel").innerHTML = '(' + caractere[type]["capital"] + ')';
    majNiveau(0);
    majCapital();
    majToutesCaracteristiques();
}



/*
 * MaJ de tous les Caracteres
 */
function majToutesCaracteristiques() {
    console.log("majAll: caracteristique");
    for (let car in caractere) {
        document.getElementById(car + "plusun").disabled = (getMaxCapitalPt(niveau) < capital - caractere[car]["capital"] + getCaractereCost(car,caractere[car]["pt"]+1));
        document.getElementById(car + "moinsun").disabled = (caractere[car]["pt"] == caractere[car]["min"]);
        document.getElementById(car + "plusdix").disabled = (getMaxCapitalPt(niveau) < capital - caractere[car]["capital"] + getCaractereCost(car,caractere[car]["pt"]+10));
        document.getElementById(car + "moinsdix").disabled = (caractere[car]["pt"] < caractere[car]["min"] + 10 );
        document.getElementById(car + "pluscent").disabled = (getMaxCapitalPt(niveau) < capital - caractere[car]["capital"] + getCaractereCost(car,caractere[car]["pt"]+100));
        document.getElementById(car + "moinscent").disabled = (caractere[car]["pt"] < caractere[car]["min"] + 100);
        document.getElementById(car + "label").innerHTML = car + ' : ' + caractere[car]["pt"];
        document.getElementById(car + "capitallabel").innerHTML = '(' + caractere[car]["capital"] + ')';
    }
    for (let k=0; k<4; k++) majArme(k);
    for (let k=0; k<15; k++) majPuce(k);
}



/*
 * MaJ d'une Arme
 */
function majArme(ligne) {
    //console.log("maj arme: " + ligne);
    selectedWeapons[ligne] = majItem("arme", weapons, ligne);
    majToutesArmes(ligne);
}



/*
 * MaJ de toutes la Armes
 */
function majToutesArmes(fromLine) {
    //console.log("majAll armes from " + fromLine);
    // disable si besoin
    let nbArme = 4;
    if (niveau < 200) {
        document.getElementById("arme3").selectedIndex = 0;
        document.getElementById("arme3").disabled = true;
        nbArme = 3;
    } else
        document.getElementById("arme3").disabled = false;
    if (niveau < 100) {
        document.getElementById("arme2").selectedIndex = 0;
        document.getElementById("arme2").disabled = true;
        nbArme = 2;
    } else 
        document.getElementById("arme2").disabled = false;
    
    // maj des listes
    for (let k=0; k<nbArme; k++) {
        if (k == fromLine) continue;
        let opt = document.getElementById("arme" + k).options;
        for (let j=1; j<opt.length; j++) {
            let goodweapon = true;
            let weap = weapons[index2weapon[j]];
            if (weap["level"] > niveau)
                goodweapon = false;
            for (let p=0; p<nbArme; p++) {
                if (p == k) continue;
                if (selectedWeapons[p] == index2weapon[j]) goodweapon = false;
            }
            opt[j].disabled = !goodweapon;
        }
    }
}



/*
 * MaJ d'une Puce
 */
function majPuce(ligne) {
    console.log("maj puce: " + ligne);
    selectedChips[ligne] = majItem("puce", chips, ligne);
    majToutesPuces(ligne);
}



/*
 * MaJ de toutes les Puces
 */
function majToutesPuces(fromLine) {
    //console.log("majAll puces from " + fromLine);
    // disable si besoin (c'est fait tres salement, mais ca marche...)
    passniv = [50,75,100,125,150,200,250,300];
    let nbPuce = 15;
    let nbnb = 15;
    for (let k=passniv.length-1; k>=0; k--) {
        nbnb--;
        if (niveau < passniv[k]) {
            nbPuce--;
            document.getElementById("puce" + nbPuce).selectedIndex = 0;
            document.getElementById("puce" + nbPuce).disabled = true;
        } else
            document.getElementById("puce" + nbnb).disabled = false;
    }
    
    // maj des listes
    for (let k=0; k<nbPuce; k++) {
        if (k == fromLine) continue;
        let opt = document.getElementById("puce" + k).options;
        for (let j=1; j<opt.length; j++) {
            let goodchip = true;
            if (index2chip[j] < 0 || chips[index2chip[j]]["level"] > niveau)
                goodchip = false;
            for (let p=0; p<nbPuce; p++) {
                if (p == k) continue;
                if (selectedChips[p] == index2chip[j]) goodchip = false;
            }
            opt[j].disabled = !goodchip;
        }
    }
}



/*
 * MaJ d'un Item
 */
function majItem(genre, liste, ligne) {
    console.log("maj item: genre: " + genre + " liste: " + liste + " ligne: " +ligne);
    let i = document.getElementById(genre + ligne).selectedIndex;
    let item = document.getElementById(genre + ligne).options[i].value;
    let maj = {1:{"txt":"", "factor":"Force",   "balise":"damage"},
               2:{"txt":"", "factor":"Sagesse", "balise":"soin"  },
               3:{"txt":"", "factor":"Science", "balise":"boost"  },
               4:{"txt":"", "factor":"Resistance", "balise":"shield"  },
               6:{"txt":"", "factor":"Agilite", "balise":"return"  },
               7:{"txt":"", "factor":"Magie",   "balise":"poison"},
               9:{"txt":"", "factor":"Magie",   "balise":"nerf"  },
               1000:{"txt":"", "balise":"portee"},
               1001:{"txt":"", "balise":"cost"},
               1002:{"txt":"", "balise":"zone"}
              };
    if (genre == "puce")
        maj[1003] = {"txt":"", "balise":"cooldown"};
    let nerftype = {3:"Force", 4:"Agilite", 7:"MP", 8:"TP", 16:"Kill", 17:"MP",
                    18:"TP", 19:"Force", 21:"Resistance", 22:"Sagesse", 24:"Magie"};
    let areatype = {2:"laser", 3:"Z1", 4:"Z2", 5:"Z3"};

    if (item > 0) {
        // renseignement des effets
        for (let k=0; k<liste[item]["effects"].length; k++) {
            let effect = liste[item]["effects"][k];
            let type = effect["type"];
            if (type == 5 || type == 0 || type == 8) continue;
            if (maj[type]["txt"] != "")
                maj[type]["txt"] += "<br />";
            if (effect["id"] == 16)
                maj[type]["txt"] += "kill";
            else {
                let lemin = effect["value1"];
                let ledelta = effect["value2"];
                maj[type]["txt"] += parseInt(lemin * (1 + caractere[maj[type]["factor"]]["pt"]/100));
                if ((type == 4 && effect["id"] == 5) || type == 6)
                    maj[type]["txt"] += "%";
                if (ledelta > 0) {
                    maj[type]["txt"] += " - ";
                    maj[type]["txt"] += parseInt((lemin+ledelta) * (1 + caractere[maj[type]["factor"]]["pt"]/100));
                    if ((type == 4 && effect["id"] == 5) || type == 6)
                        maj[type]["txt"] += "%";
                }
				maj[type]["txt"] += " ("+parseInt(lemin * (1 + caractere[maj[type]["factor"]]["pt"]/100) * 1.4);
				maj[type]["txt"] += " - "+parseInt((lemin+ledelta) * (1 + caractere[maj[type]["factor"]]["pt"]/100) * 1.4) +")";
            }
            // complément d'info sur l'effet
            if (effect["turns"] > 0 || type == 9 || type == 3 || effect["targets"] < 31) {
                maj[type]["txt"] += " (";
                let dejainfo = false;
                if (effect["turns"] > 0) {
                    maj[type]["txt"] += effect["turns"] + "T";
                    dejainfo = true;
                }
                if (type == 9 || type == 3) {
                    if (dejainfo)
                        maj[type]["txt"] += ", ";
                    maj[type]["txt"] += nerftype[effect["id"]];
                    dejainfo = true;
                }
                if (effect["targets"] < 31) {
                    if (dejainfo) maj[type]["txt"] += ", ";
                    maj[type]["txt"] += ((effect["targets"] & 1) > 0) ? "E" : "-";
                    maj[type]["txt"] += ((effect["targets"] & 2) > 0) ? "A" : "-";
                    maj[type]["txt"] += ((effect["targets"] & 4) > 0) ? "C" : "-";
                    maj[type]["txt"] += ((effect["targets"] & 8) > 0) ? "P" : "-";
                    maj[type]["txt"] += ((effect["targets"] & 16) > 0) ? "B" : "-";                    
                    dejainfo = true;
                }
                maj[type]["txt"] += ")";
            }
        }
        // renseignements généraux de l'item
        maj[1000]["txt"] = liste[item]["min_range"];
        if (liste[item]["min_range"] != liste[item]["max_range"])
            maj[1000]["txt"] += " - " + liste[item]["max_range"];
        maj[1001]["txt"] = liste[item]["cost"];
        if (liste[item]["los"] > 0) maj[1002]["txt"] = "los";
        if (liste[item]["area"] > 1) {
            if (maj[1002]["txt"] != "") maj[1002]["txt"] += ", ";
            maj[1002]["txt"] += areatype[liste[item]["area"]];
        }
        if (genre == "puce") {
            if (liste[item]["cooldown"] > 0)
                maj[1003]["txt"] = liste[item]["cooldown"];
            if (liste[item]["initial_cooldown"] > 0)
                maj[1003]["txt"] += " (" + liste[item]["initial_cooldown"] + ")";
            if (liste[item]["team_cooldown"] > 0) 
                maj[1003]["txt"] += " [" + liste[item]["team_cooldown"] + "]";
        }
    }
    // tout est prêt, on envoie à la page.
    for (let type in maj)
        document.getElementById(genre.substring(0,1)+maj[type]["balise"] + ligne).innerHTML = maj[type]["txt"];
    // pour mettre à jour l'item selectionné
    return item;
}





/*
 * fonctions annexes
 */

function getMaxCapitalPt(n) {
    return 5*n + 45*(1 + parseInt(n/100)) + (n == 301 ? 95 : 0);
}

function getCaractereCost(ty,pt) {
    // cout pour avoir ce niveau de capacité
    if (ty == "Vie") {
        /*
	  vie < 1000 : 1 cap pour 4 vie
	  1000 < vie < 2000 : 1 cap pour 3 vie
	  2000 < vie : 1 cap pour 2 vie
        */
        let lavie = pt-caractere["Vie"]["min"];
        if (lavie < 1000) return lavie/4;
        if (lavie < 2002) return (lavie-250)/3;
        return (lavie-834)/2;
    }
    if (ty == "TP") {
        /*
	  1er TP : 30
	  2eme TP : 35
	  3eme TP : 40
	  ...
	  15eme TP : 100
	  16eme TP : 100
        */
        let lestp = pt - 10;
        if (lestp < 15) return 5*lestp*(lestp+1)/2 + 25*lestp;
        return 975 + 100*(lestp-15);
    }
    if (ty == "MP") {
        /*
	  1er MP : 20
	  2eme MP : 30
	  3eme MP : 40
	  ...
	  11eme MP : 100
	  12eme MP : 100
        */
        let lesmp = pt - 3;
        if (lesmp < 9) return 10*lesmp*(lesmp+1)/2 + 10*lesmp;
        return 540 + 100*(lesmp-9);
    }
    if (ty == "Frequence") {
        /*
	  1 freq pour 1 cap
        */
        return pt - 100;
    }
    /*
      caracs normales
      car < 200 : 1 cap pour 2 pt
      200 < car < 400 : 1 cap pour 1 pt
      400 < car < 600 : 2 cap pour 1 pt
      600 < car : 3 cap pour 1 pt
    */
    if (pt < 200) return pt/2;
    if (pt < 400) return pt - 100;
    if (pt < 600) return 2*pt - 500;
    return 3*pt - 1100;
}


/*
 * Fin script
 */























/*

function changeweapon(ind) {
    console.log("-->changeweapon("+ind+")");
    console.trace();
    i = document.getElementById("arme" + ind).selectedIndex;
    if (i == selectedWeapons[ind-1]) return;
    selectedWeapons[ind-1] = i;
    arme = document.getElementById("arme" + ind).options[i].value;
    majarme = {1:{"txt":"", "factor":"force",   "balise":"damage"},
               7:{"txt":"", "factor":"magie",   "balise":"poison"},
               2:{"txt":"", "factor":"sagesse", "balise":"soin"  },
               9:{"txt":"", "factor":"magie",   "balise":"nerf"  },
              };
    // nerf: 18:PT, 17:PM, 19:force
    nerftype = {17:"MP", 18:"TP", 19:"force"};

    if (arme != "--") {
        for (k=0; k<weapons[arme]["effects"].length; k++) {
            effect = weapons[arme]["effects"][k];
            type = effect["type"];
            if (majarme[type]["txt"] != "")
                majarme[type]["txt"] += "<br />";
            lemin = effect["value1"];
            ledelta = effect["value2"];
            majarme[type]["txt"] += parseInt(lemin * (1 + carac[majarme[type]["factor"]]["pt"]/100));
            majarme[type]["txt"] += " - ";
            majarme[type]["txt"] += parseInt((lemin+ledelta) * (1 + carac[majarme[type]["factor"]]["pt"]/100));
            if (type == 9)
                majarme[type]["txt"] += " (" + nerftype[effect["id"]] + ")";
        }
    }
    for (type in majarme)
        document.getElementById(majarme[type]["balise"] + ind).innerHTML = majarme[type]["txt"];
}


function majweapons(type) {

}

*/
