function personnel(f) {
    document.getElementById("tva").innerHTML = "";
    document.getElementById("gender").innerHTML = "<input type='radio' name='gender' value='male' checked> Male<br><input type='radio' name='gender' value='female'> Female<br><input type='radio' name='gender' value='other'> Other<br><br>";
}

function professionnel(f) {
    document.getElementById("tva").innerHTML = "N° TVA:<br> <input type='text' name='tva'><br><br>";
    document.getElementById("gender").innerHTML = "";

}

function selectionville(f) {
    var e = document.getElementById("region");
    var region = e.options[e.selectedIndex].value;
    var villesdefault = "<input type=\"text\" name=\"ville\">";
    var villeshainaut = "<select name='ville' id='ville' onchange=\"return selectioncodepostal(this);\"> <option value=\"\">....</option> <option value='Mons'>Mons</option> <option>Charleroi</option> <option>La Louvière</option> <option>Chimay</option> <option>Tournai</option> <option>Mouscron</option></select>";
    var villesbw = "<select name='ville' id='ville' onchange=\"return selectioncodepostal(this);\"> <option value=\"\">....</option> <option value='Wavre'>Wavre</option> <option value='Waterloo'>Waterloo</option> <option value='Braine'>Braine-l'Alleud</option> <option value='Nivelles'>Nivelles</option> </select>";


    if (region == "hainaut") {
        document.getElementById("villediv").innerHTML = villeshainaut;
    }
    else if (region == "bw") {
        document.getElementById("villediv").innerHTML = villesbw;
    }
    else {
        document.getElementById("villediv").innerHTML = villesdefault;
    }


    return true;
}

function selectioncodepostal(f) {
    var e = document.getElementById("ville");
    var ville2 = e.options[e.selectedIndex].value;


    var cpdefault = "<input type=\"text\" name=\"code\">";
    var cpmons = "<select name='code' id='code'> <option value=\"\">....</option> <option>7000</option> <option>7010</option> <option>7011</option> <option>7012</option> <option>7020</option> <option>7021</option> <option>7022</option> <option>7024</option> <option>7030</option> <option>7031</option> <option>7032</option> <option>7033</option> <option>7034</option></select>";

    if (ville2 == "Mons") {
        document.getElementById("codepostal").innerHTML = cpmons;
    }
    else {
        document.getElementById("codepostal").innerHTML = cpdefault;
    }

    return true;
}

function mfValidation(f) {
    ok = true;
    var prenom = f.firstname.value;
    var nom = f.lastname.value;
    var email = f.mail.value;
    var phone = f.phone.value;
    var adresse = f.adresse.value;
    var ville = f.ville.value;
    var province = f.region.value;
    var code = f.code.value;



    var regex1 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    var regex2 = /^[0-9]{4}$/;
    var regex3 = /^[0-9]{3}$/;
    var errorMsg = "Veuillez corriger les erreurs suivantes : \n\n";


    if (prenom == "") {
        errorMsg += "Le champ Prénom est vide\n";
        ok = false;
    }

    if (nom == "") {
        errorMsg += "Le champ Nom est vide\n";
        ok = false;
    }

    if (email == "") {
        errorMsg += "L'adresse e-mail est manquante\n";
        ok = false;
    } else if ((p1 = email.indexOf("@")) == -1) {
        errorMsg += "L'adresse e-mail ne contient pas d'arobase\n";
        ok = false;
    } else if ((p2 = email.indexOf(".")) == -1) {
        errorMsg += "L'adresse e-mail ne contient pas de point\n";
        ok = false;
    }

    if (phone == "") {
        errorMsg += "Le numéro de téléphone est manquant\n";
        ok = false;
    } else if (!phone.match(regex1)) {
        errorMsg += "Le format du numéro de téléphone n'est pas correct\n";
        ok = false;
    }

    if (adresse == "") {
        errorMsg += "L'adresse est manquante\n";
        ok = false;
    }

    if (ville == "") {
        errorMsg += "La ville est manquante\n";
        ok = false;
    }

    if (province == "") {
        errorMsg += "La province est manquante\n";
        ok = false;
    }

    if (code == "") {
        errorMsg += "Le code postal est manquant\n";
        ok = false;
    }  else if (!code.match(regex2)) {
    errorMsg += "Le format du code postal n'est pas correct\n";
    ok = false;
}


    if (ok == false) {
        alert(errorMsg)
    }
    return ok;
}