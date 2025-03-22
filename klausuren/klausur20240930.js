console.log("Klausur 20240930")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Objekte mit Eigenschaften und sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) 
// Es soll das Volumen eines Würfels in Quadratzentimeter (cm3) ausgegeben werden. Arbeiten Sie mit einem Objekt und sprechenden Eigenschaften.
// Geben Sie das Volumen in einem Antwortsatz auf der Konsole aus.

let a = 5;
console.log('Volumen: ' + (a * a *a));

// Das ist der Bauplan, aus dem im Folgenden die Würfel-Objekte
// erzeugt werden sollen. Ohne diese Klassendefinition (= Bauplan)
// können keine Objekte instanziiert werden.

class Wuerfel{
    constructor(){
        this.Volumen
        this.Kantenlaenge
    }

    // Die Funktion BerechneVolumen soll das Volumen berechnen
    BerechneVolumen(){
        this.Volumen = this.Kantenlaenge * this.Kantenlaenge * this.Kantenlaenge
    }
}

// Deklaration (=Bekanntmachung), Instanziierung (=Speicherzellen reservieren), 
// let wuerfel mit kleinem "w"
// new Wuerfel mit großem "W"
// runde Klammern am Ende nicht vergessen!
let wuerfel = new Wuerfel();

// Initialisierung
wuerfel.Kantenlaenge = 6;

// Berechnung
wuerfel.Volumen = wuerfel.Kantenlaenge * wuerfel.Kantenlaenge * wuerfel.Kantenlaenge;

console.log("Das Volumen bei einer Kantenlänge von " + wuerfel.Kantenlaenge + " beträgt: " + wuerfel.Volumen + ".")

// NEU: Man kann die Berechnung auch zu einer Funktion innerhalb der Klasse abbilden.
// Dazu muss in die Klasse unterhalb des Constructors die Funktion BerechneVolumen() eingebaut werden.
// Alternative Berechnung mit der Funktion BerechneVolumen():

wuerfel.Kantenlaenge = 8;
wuerfel.BerechneVolumen();
console.log("Das Volumen bei einer Kantenlänge von " + wuerfel.Kantenlaenge + " beträgt: " + wuerfel.Volumen + ".")

// 1b 
// Wenn das Volumen 1000 oder mehr Quadratzentimeter beträgt soll eine Meldung auf der Konsole ausgegeben werden, die besagt,
// dass das Volumen 1000 oder mehr Quadratzentimeter beträgt.

if(wuerfel.Volumen >= 1000){
    console.log("Das Volummen beträgt 1000 oder mehr Quadratzentimeter.");
}

// 1c) - Nur Klausurschreiber
// Nutzen Sie die Math-Bibliothek .sqrt(), um die Wurzel aus dem Volumen zu errechnen. Geben Sie die Kantenlänge in einem Antwortsatz aus.

// Um die 3. Wurzel zu ziehen, kann die Funktion Math.pow verwendetet werden. 
wuerfel.Kantenlaenge = (Math.pow(wuerfel.Volumen,1/3))

console.log("Die Kantenlänge beträgt: " + wuerfel.Kantenlaenge)


console.log("Aufgabe 2")
// Sie werden beauftragt ein Schulverwaltungsprogramm für das BKB zu erstellen. Konkret sollen Sie sich in einem ersten Schritt
// die Zeugnisse vornehmen. Deklarieren, Instanziieren und Initialisieren Sie ein Zeugnisobjekt, 
// in dem Sie neben "Deutsch", "Mathe" und "Englisch" 5 weitere, geeignete Eigenschaften deklarieren. 

// 2a)
// Definieren Sie die class

class Zeugnis{
    constructor(){
        this.Deutsch
        this.Mathe
        this.Englisch
        this.Vorname
        this.Fehlstunden
        this.Bemerkung
        this.Klasse
        this.Adresse
        this.Nachname
        this.Klassenbeste
    }
}



// 2b)
// Deklarieren, Instanziieren und Initialisieren Sie ein Objekt von der Zeignisklasse.

let zeugnis = new Zeugnis();
zeugnis.Mathe = 1;
zeugnis.Deutsch = 2;
zeugnis.Englisch = 3;
zeugnis.Adresse = "Josefstraße 10, 46325 Borken";
zeugnis.Klasse = "GW23A";


// 2c)
// Geben Sie die Eigenschaftswerte Ihres Objekts auf der Konsole aus.

console.log("Mathe: " + zeugnis.Mathe);
console.log("Deustch: " + zeugnis.Deutsch);
console.log("Englisch: " + zeugnis.Englisch);
console.log("usw.: ");



// 2d) NUR KLAUSURSCHREIBER
// Berechnen Sie die Durchnittsnote Ihres Objekts. Geben Sie die Durchschnittsnote auf der Konsole aus.

let durchschnitt = (zeugnis.Mathe + zeugnis.Deutsch + zeugnis.Englisch) / 3;

// 2e) NUR KLAUSURSCHREIBER
// Lisa hat die Durchsnittsnote 3, Tom hat die Durschnittsnote 4, Max hat die Durschnittsnote 5
// Vergleichen Sie Ihre Zeugnis-Objekt-Durchschnittsnote aus 2d) mit den Zeugnisdurchschnittsnoten von Lisa, Tom und Max.
// Wenn Ihre Zeugnis-Objekt-Durschnittsnote besser ist als die der anderen, dann soll das auf der Konsole entsprechend
// ausgegeben werden. Wenn die Note schlechter ist als die aller anderen, soll das ebenfalls ausgegeben werden.
// Ergänzen Sie die Eigenschaft "Klassenbeste" in Ihrem Zeugnisobjekt. 
// Setzen Sie die Eigenschaft entsprechend der Zeugnisnote auf true oder false
// Es hilft Ihnen dabei die Funktion Math.min() aus der Math-Bibliothek.
// Beispiel der Anwendung von Math.min():
// let x = Math.min(5, 10); --> Es werden 5 und 10 verglichen. x nimmt jetzt den Wert 5 an, da 5 der niedrigste der kommaseparierten Werte ist.

let lisa = 3;    // bei lokalen Variablen mit Kleinbuchstaben beginnen. 
let tom = 4;
let max = 5;

if(durchschnitt < Math.min(lisa, tom, max)){   
    zeugnis.Klassenbeste = true;    // Es wird im Zeugnis eine neue Eigenschaft ergänzt.
    console.log("Lisa hat einen Durchschnitt von " + durchschnitt + ". Sie ist Klassenbeste.")
}else{
    zeugnis.Klassenbeste = false;
    console.log("Lisa hat einen Durchschnitt von " + durchschnitt + ". Sie ist nicht Klassenbeste.")
}


console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Netto-Rechnungsbetrag liegt bei 370,00 EUR.
// Die Mehrwertsteuer hängt von der Produktart ab: 
// * Lebensmittel, Zeitung und Buch: 7%
// * alles andere: 19%
// Dieses Produkt hat die Produktart "Zeitung"

// 3a)
// Deklarieren, Instanziieren Sie ein Objekt mit allen genannten Eigenschaften. 

class Produkt{
    constructor(){
        this.Art                        // Eigenschaften beginnen immer mit Großbuchstaben!
        this.MehrwertsteuerSatz         // Kamelhöckernotation verwenden!
        this.Mehrwertsteuer             // D.h. Wörter mit Großbuchstaben verbinden.
        this.NettoRechnungsbetrag       //  + Keine Leerezeichen in Namen!
        this.BruttoRechnungsbetrag      //  + Keine Bindestriche in Namen!
        this.Skontosatz
        this.Skonto
        this.Zahlungsbetrag
        this.Rabatt
        this.Rabattsatz
    }
}

let produkt = new Produkt();


// 3b
// Initialisieren Sie Ihr Objekt mit den gegebenen Werten. 
// Geben Sie die einen Anwortsatz auf der Konsole aus.

produkt.NettoRechnungsbetrag = 370   // Bitte kein Komma, sondern den Punkt für Nachkommastellen
                                     // verwenden! 
                                     // Bitte keine Einheit (z.B. EUR) dahinterschreiben!
                                     // "370,00 Euro" ist keine Zahl. Damit kann nicht gerechnet werden.

produkt.Art = "Zeitung"

// Wenn die Produktart Zeitung ODER Lebensmittel ODER Buch ist, dann ...
if(produkt.Art === "Zeitung" || produkt.Art === "Lebensmittel" || produkt.Art === "Buch"){
    
    produkt.MehrwertsteuerSatz = 0.07   // Alternativ kann man auch 7 schreiben. dann ändert sich
                                        // natürlich die Berechnung im Folgenden.

}else{

    produkt.MehrwertsteuerSatz = 0.19
    
}

console.log("Der MwST-Satz beträgt: " + produkt.MehrwertsteuerSatz)
console.log("Produktart: " + produkt.Art)


// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

produkt.Mehrwertsteuer = produkt.NettoRechnungsbetrag * produkt.MehrwertsteuerSatz

console.log("Mehrwertsteuer: " + produkt.Mehrwertsteuer)


// 3d)
// Berechnen Sie den Eigenschaftswert des Brutto-Rechnungsbetrags. 
// Wenn die Produktart sich ändert, muss Ihre Berechnung sich anpassen.
// Geben Sie den Wert in einen Anwortsatz auf der Konsole aus.

produkt.BruttoRechnungsbetrag = produkt.NettoRechnungsbetrag + produkt.Mehrwertsteuer

// 3e) NUR KLAUSURSCHREIBER
// Das Skonto ist gestaffelt abhängig vom Brutto-Rechnungsbetrags.
// Brutto-Rechnungsbetrag kleiner als   |     Skonto
//                                  100 | 1
//                                  200 | 1,1
//                                  300 | 1,4
//                                  400 | 1,5
//                                  500 | 1,6
//                                  500 | 1,7
//                                  500 | 1,8
//                                  500 | 1,9
//                                  500 | 2

// Berechnen Sie das Skonto und geben Sie das Ergebnis auf der Konsole aus.

produkt.Skonto 

if(produkt.BruttoRechnungsbetrag < 900) { produkt.Skonto = 2.0 }
if(produkt.BruttoRechnungsbetrag < 800) { produkt.Skonto = 1.9 }
if(produkt.BruttoRechnungsbetrag < 700) { produkt.Skonto = 1.8 }
if(produkt.BruttoRechnungsbetrag < 600) { produkt.Skonto = 1.7 }
if(produkt.BruttoRechnungsbetrag < 500) { produkt.Skonto = 2 }
if(produkt.BruttoRechnungsbetrag < 400) { produkt.Skonto = 2 }
if(produkt.BruttoRechnungsbetrag < 900) { produkt.Skonto = 2 }





console.log("Aufgabe 4") // NUR KLAUSURSCHREIBER

// Sie wollen Ihre Auto-Kaufentscheidung mit einem Programm stützen.

// 4a) // NUR KLAUSURSCHREIBER
// Erstellen Sie zwei Auto-Objekte mit den Eigenschaften Name, Leistung, Geschwindigkeit, Preis, Verbrauch
// Initialisieren Sie mit realsitischen Werten.




// 4b) // NUR KLAUSURSCHREIBER
// Vergleichen Sie die beiden Autos:
// Wenn eines der Autos in Preis und Verbrauch besser ist, dann soll es das Auto werden.
// Wenn Preis und Verbrauch gleich sind, dann entscheidet die Geschwindigkeit.
// Wenn auch die Geschwindigkeit gleich ist, entscheidet die Leistung.
// Geben Sie entsprechende Antworten auf der Kosnole aus.