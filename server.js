// Klassendefinition des Kunden
class Kunde{
	constructor(){
		this.Nachname
		this.Vorname
		this.Benutzername
		this.Kennwort
		// IstEingeloggt ist ein boolean.
		// Der Wert ist entweder wahr oder falsch.
		this.IstEingeloggt
	}
}

// Kundenobjekt deklariert und instanziiert
let kunde = new Kunde();

// Kundenobjekt initialisiert
kunde.Nachname = "Kiff"
kunde.Vorname = "Pit"
kunde.Benutzername = "pk"
kunde.Kennwort = "123"
kunde.IstEingeloggt = false

// Klassenefinition des Kundenberaters
class Kundenberater{
	constructor(){
		this.Nachname
		this.Vorname
		this.Telefonnummer
		this.Mail
		this.Bild
	}
}

// Deklaration und Instanziierung
let kundenberater = new Kundenberater();

// Initialisierung
kundenberater.Nachname = "Pass"
kundenberater.Vorname = "Hildegard"
kundenberater.Telefonnummer = "012345 67890"
kundenberater.Mail = "h.pass@borken-bank.de"

kundenberater.Bild = "pass.jpg"

'use strict';

// Das Modul express wird mit der Funktion require einer Konstanten namens express zugwiesen.

const express = require('express');

// Der Body-Parser ermöglicht es uns, Daten aus dem Kundenformular auf dem Server entgegenzunehmen.
// Der Body-Parser wird im Terminal mit dem Befehl 'npm install -g body-parser' installiert.

const bodyParser = require('body-parser');

// Cookies sind kleine Textdateien, die beim Besuch von Webseiten auf dem lokalen Rechner
// von Nutzern gespeichert werden. Beim erneuten Seitenbesuch können sie direkt an den Server 
// gesendet werden. 
// Cookies können notwendig sein oder z.B. der Werbung dienen.
// Cookies können z.B. ganz konkret einen Warenkorb nach Tagen wieder anzeigen, obwohl 
// der Nutzer sich bei dem Händler noch nicht registriert hat.
// Der cookieparser ist für die Verarbeitung der cookies unserer App zuständig.
// Mit dem cookieparser können wir cookies setzen und auslesen und löschen.
// Man kann Cookies am Browser anzeigen, indem man F12 drückt.
// Weil man Cookies im Browser sehr einfach auslesen kann, kann man Cookies signieren.


// In der Banking-App sollen Cookies wie folgt eingesetzt werden:
//    Wenn sich der Kunde an der App anmeldet, wird ein Cookie in seinem Browser gespeichert.
//    Der Cookie enthält seine Kundendaten.
//    Immer, wenn der Kunde nach der Anmeldung in der App einen Button drückt, werden
//    seine Kundendaten vom Browser an den Server übergeben. Der Server weiß dadurch, 
//    mit welchem Kunden er es zu tun hat. So ermöglichen wir, dass mehrere Kunden gleichzeitig
//    mit dem Server interagieren können.



const cookieParser = require('cookie-parser')

// Die Bibliothek email-validator prüft emails auf syntaktische Korrektheit.
// Die Anforderungen an gültige Mails sind exakt festgelegt im RFC 5322. 

const validator = require("email-validator");

// Die Funktion validate wird auf das validator-Objekt aufgerufen.
// Als Parameter wird eine Mail-Adresse an die Funktion übergeben.
// Der Rückgabewert der Funktion ist true oder false.

validator.validate("test@email.com"); // true

// Die Anweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links 
// zugewiesen an die Konstante namens PORT. Das einfache Gleichheitszeichen lässt sich also übersetzen
// mit "... wird zugewiesen an ..."

const PORT = 3000;

// Der Wert '0.0.0.0' wird zugewiesen an eine Konstante namens HOST 
const HOST = '0.0.0.0';

// App

const app = express();

// Es wird der App bekanntgegeben, wo die styles zu finden sind.
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Der Bodyparser wird in der app eingebunden.

app.use(bodyParser.urlencoded({extended: true}))

// Der cookie-pareser wird in die app eingebunden
// Cookies können verschlüsselt im Browser abgelegt werden. Dadurch kann ein im Browser gespeichertes Kennwort nicht mehr
// ausgelesen werden. Nur unsere App kann den verschlüsselten cookie verwenden. Dazu wird das secret geheim "genutzet"

app.use(cookieParser())


// Geheimer Schlüssel für signierte Cookies
const secretKey = 'mein_geheimer_schluessel';
//app.use(cookieParser(secretKey));



// Die app.get wird abgearbeitet, sobald die Index-Seite angesurft wird.
app.get('/', (req, res) => {

	// res ist die Antwort des Servers an den Browser.
	// send() ist die Anweisung etwas an den Browser zu senden
	// 'Hello ...' ist der Wert, der an die Anweisung send() übergeben wird
	//res.send('Hello remote world!\n');

	// Das res-Objekt kann noch mehr als nur eine Zeichenkette an den
	// Browser zu senden. Das res-Objekt kann mit der Funktion render()
	// eine HTML-Datei an den Browser senden.

	if(kunde.IstEingeloggt){

		// Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('index.ejs',{});

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}	
});

// Wenn im Browser die Adresse .../agb aufgerufen wird, wird der Server aufgefordert,
// die angefragte Seite an den Browser zurückzugeben.
// Der Server arbeitet dazu die Funktion app.get('agb)... ab.
app.get('/agb', (req, res) => {

	// Der Server gibt die gerenderte EJS-Seite an den 
	// Browser zurück.


	if(kunde.IstEingeloggt){

		// Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('agb.ejs',{});

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}
});

app.get('/hilfe', (req, res) => {

	if(kunde.IstEingeloggt){

		// Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('hilfe.ejs',{});

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}
});

app.get('/kontenuebersicht', (req, res) => {
	
	if(kunde.IstEingeloggt){

		// Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('kontenuebersicht.ejs',{});

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}
});

app.get('/profil', (req, res) => {
	
	if(kunde.IstEingeloggt){

		// Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('profil.ejs',{
			Meldung: "",
			Email: kunde.Mail
		});

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}
});

app.post('/profil', (req, res) => {
	
	var meldung = "";

	if(kunde.IstEingeloggt){

		// Der Wert von Email wird vom Browser entgegengenommen, sobald der Kunde
		// sein Profil ändern will.

		let email = req.body.Email;
		
		// Die übergebene Adresse wird in die Validate-Funktion übergeben und geprüft

		if(validator.validate(email)){

			console.log("Gültige EMail.")
			meldung = "EMail-adresse gültig";
			kunde.Mail = email;

		}else{
			console.log("Ungültige EMail.")
			meldung = "EMail-adresse ungültig";
		}
		
		// Die profil-Seite wird gerendert.
		res.render('profil.ejs',{
			Meldung: meldung,
			Email: ""
		});

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}
});

app.get('/postfach', (req, res) => {
	res.render('postfach.ejs',{});
});

// Sobald die Seite "Kredit beantragen" aufgerufen wird, wird die app.get abgearbeitet.
app.get('/kreditBeantragen', (req, res) => {
	
	
	if(kunde.IstEingeloggt){

		// Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('kreditBeantragen.ejs',{
			Laufzeit: "",
			Zinssatz: "",		
			Betrag: "",
			Meldung: ""
		});

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}
});


// Sobald der "Kredit berechnen"-Button gedrückt wird, wird die app.post abgearbeitet.
app.post('/kreditBeantragen', (req, res) => {

	// Der Server nimmt die Werte aus dem Browserformular entgegen:
	let zinsbetrag = req.body.Betrag;
	let laufzeit = req.body.Laufzeit;
	let zinssatz = req.body.Zinssatz;

	// Der Rückzahlungsbetrag wird berechnet
	let kredit = zinsbetrag * Math.pow(1+zinssatz/100,laufzeit);
	console.log("Rückzahlungsbetrag: " + kredit + " €.")

	// Die Funktion render() gibt die Werte an den Browser
	res.render('kreditBeantragen.ejs',{
		Laufzeit: laufzeit,
		Zinssatz: zinssatz,		
		Betrag: zinsbetrag,
		Meldung: "Rückzahlungsbetrag: " + kredit + " €."
	});
});

app.get('/ueberweisungAusfuehren', (req, res) => {

	if(kunde.IstEingeloggt){

		// Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('ueberweisungAusfuehren.ejs',{});

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}
});

// Die Funktion app.get('/geldAnlegen...) wird abgearbeitet, wenn der Benutzer die Seite geldAnlegen
// im Browser ansurft.

app.get('/geldAnlegen', (req, res) => {

	// Die Serverantwort an den Browser wird gerendert an den Browser zurückgegeben.
	// Dazu wird die Funktion render() aufgerufen. 

	if(kunde.IstEingeloggt){

		// Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('geldAnlegen.ejs',{

			// In der geldAnlegen.ejs gibt es die Variablen Betrag und Laufzeit.
			// Der Server übergibt die folgenden Werte an den Browser:
	
			Betrag:120,
			Laufzeit:2,
			Meldung: ""
		})

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}
});

// Die Funktion app.post('/geldAnlegen...) wird abgearbeitet, wenn der Kunde auf dem Formular den Absenden-Button klickt.

app.post('/geldAnlegen', (req, res) => {

	// Die Werte, die der Kunde im Formular eingegeben hat, werden an den Server gesendet.
	// Der Wert der Variablen Betrag wird aus dem body der Kundenanfrage (req) ausgelesen und zugewiesen an die lokale Variable
	// namens betrag.

	let betrag = req.body.Betrag;
	console.log("geldAnlegen: Gewünschter Betrag: " + betrag + " Euro")

	let laufzeit = req.body.Laufzeit;
	console.log("geldAnlegen: Gewünschte Laufzeit: " + laufzeit + " Jahre")

	let zinssatz = 0.1

	let zinsen = betrag * zinssatz;


	if(kunde.IstEingeloggt){

		// Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('geldAnlegen.ejs',{
			Betrag: betrag,
			Laufzeit: laufzeit,
			Meldung: "Ihre Zinsen betragen: " + zinsen
		});

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}
});

// Die app.get wird abgearbeitet, wenn die Seite im Browser angesurft wird.
app.get('/login', (req, res) => {

	kunde.IstEingeloggt = false;
	console.log("kunde.IstEingeloggt: " + kunde.IstEingeloggt)

	res.render('login.ejs',{
		Meldung: "Bitte Benutzername und Kennwort eingeben."
	});
});

// Die app.post wird abgearbeitet, wenn das Formular auf der Seite abgesendet wird.
app.post('/login', (req, res) => {
	
	// Der Benutzername wird vom Browser an den Server übergeben.
	let benutzername = req.body.IdKunde;
	console.log("login: Benutzername: " + benutzername)

	// Das Kennwort wird vom Browser an den Server übergeben
	let kennwort = req.body.Kennwort;
	console.log("login: Kennwort: " + kennwort)

	// Es muss geprüft werden, ob der Kunde mit diesem Benutzernamen das richtige
	// Kennwort eingeben hat.

	let meldung = "";

	// Die Kontrollstruktur prüft auf die Korrektheit der Zugangsdaten,
	if(kunde.Benutzername == benutzername && kunde.Kennwort == kennwort){
	
		console.log("Die Zugangsdaten wurden korrekt eingegeben.")
		meldung = "Die Zugangsdaten wurden korrekt eingegeben";
		
		// Die Eigenschaft IstEingeloogt wird auf true gesetzt.
		kunde.IstEingeloggt = true;
		console.log("kunde.IstEingeloggt: " + kunde.IstEingeloggt)


		// Wenn der Kunde seine Credentials korrekt eingegeben hat,
		// wird ein cookie wird gesetzt.
		// Um das ganze Kundenobjekt im Cookie speichern zu können, wird das 
		// Kundenobjekt in eine Zeichenkette umgewandelt. Dazu wird die stringify-Funktion
		// auf das JSON-Objekt aufgerufen.
		res.cookie('istAngemeldetAls', JSON.stringify(kunde) , { maxAge: 900000, httpOnly: true, signed: false });
		console.log("Das Kundenobjekt im Cookie gespeichert.")
		




		// Wenn die Eingangebdaten korrekt sind, dann wird die index-Seite gerendert.
		res.render('index.ejs',{
			Meldung: meldung
		});

	}else{
		console.log("Die Zugangsdaten wurden NICHT korrekt eingegeben.")
		meldung = "Die Zugangsdaten wurden NICHT korrekt eingegeben."
		kunde.IstEingeloggt = false;
		console.log("kunde.IstEingeloggt: " + kunde.IstEingeloggt)

		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite erneut gerendert.
		res.render('login.ejs',{
			Meldung: meldung
		});
	}
});




// Mit listen() wird der Server angewiesen, auf den angegebenen Host und
// Port zu lauschen.  
app.listen(PORT, HOST);

// Mit der Anweisung console.log() wird dem Server-Administrator auf der
// Konsole angezeigt, was der Server macht. Der Programmierer schreibt dazu 
// in die runden Klammern den Ausdruck, der auf der Konsole angezeigt
// werden soll. Die Werte der beiden Konstanten HOST und PORT werden in den
// Ausdruck übergeben. Ein Verb mit anschließenden runden Klammern steht
// immer für eine Anweisung etwas zu tun. 
console.log(`Running on http://${HOST}:${PORT}`);

//require('./uebungen/01-grundlagen.js');
//require('./uebungen/03-objekte.js');
//require('./klausuren/klausur20240930.js');
//require('./uebungen/04-funktionen.js');