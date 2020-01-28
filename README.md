# Assessment test 1 

## Kesto
3h

## Johdanto
Ratkaisen ensin taso 1. Jos sinulla on aikaa, voit jatkaa taoslle 2
ja ratkaista sen.

Taso 2 on tässäkin vapaaehtoinen kuten normaaleissa checkpointeissa.

## Palautus
Palautus Canvaksen kautta. Tee zip-tiedosto projektista, **muista poistaa `node_modules` hakemisto!**.

## Arviointi

Läpipääsyyn vaaditaan seuraavat:

- Koodi toimii
- Kaikki Tason 1 yksikkötestit menevät läpi
- Koodi on toimivaa myös muilla syötteillä kuin mitä annetuissa 
testitapauksissa on käytetty

## Taso 1

Aja testit, alkutilanne pitäisi olla seuraava:


<pre>Test Suites: <span style="color: red;">1 failed</span>, <span style="color: green;">2 passed</span>, 3 total
Tests:       <span style="color: red;">3 failed</span>, <span style="color: green;">6 passed</span>, 9 total</pre>

Tason 1 läpäistäksesi sinun on siis katsottava kolmea testitiedostoa (Test Suite), sekä komea JavaScript tiedostoa joita testikoodit testaavat.

Toteuta `funktiot.js` moduulin funktiot siten, että seuraavat testit tiedostossa `funktiot.test.js` menevät läpi:

- lämmittelyä (*toteutus valmis*)
- lämmitelyä taulukon kanssa (*toteutus valmis*)
- add_four_and_then_multiply_by_three
- maybe_uppercase_and_decorate_text
- tell_relation_to_the_number_100

Tämän jälkeen kaikkien testien pitäisi näyttää <span style="color: green;">vihreää</span>. **Älä** kuitenkaan jää tähän.

Seuraavaksi ota käsittelyyn testit tiedostosta `vari.test.js`, ja luokan *Vari* toteutus tiedostosta `vari.js`. Testitiedostossa on kaksi testiä, toinen niistä on valmis, toteutus mukaan lukien, mutta toisessa testikoodi on kommenteissa. Ota kommentit pois, testikoodin pitäisi antaa tulos fail. Lisää luokkaan *Vari* koodia, jotta testi menee läpi.

Viimeinen vaihe on ottaa käsittelyyn testitiedosto `varilista.test.js`. Siinä on kaksi testifunktiota. Poista kommentit kummastakin, ja lisää luokkaan *Varilista* koodia jotta testit menevät läpi.

Lopuksi testien ajamisen tuloksena on siis että kaikki kolme Test Suitea ja niissä olevat yhteensä 9 testifunktiota näyttävät <span style="color: green;">vihreää</span>.

## Taso 2

Toteuta luokat *Hamsteri*, *Hamsterilaji* ja *Kolo*, jotta tason kaksi testit menevät läpi. Käytä myös koodissa (testi ja varsinainen) olevia kommentteja hyväksesi.
