## Composant de calendrier Vue

* Composant de calendrier léger et haute performance développé pour Vue 2.0.
* Faible utilisation de la mémoire, performances élevées.
* Développé en JavaScript natif, sans l'utilisation de bibliothèques tierces.


## Installation

```javascript
npm install git+https://github.com/DIMITA/vue-calendar-custom.git


## [github](https://github.com/DIMITA/vue-calendar-custom)


## Usage

```javascript
//vue
import VueCalendarCustom from 'vue-calendar-custom';

 components: {
    VueCalendarCustom
  }
    <VueCalendarCustom
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      // v-on:isToday="clickToday"
      // :markDate=arr // arr=['2018/4/1','2018/4/3'] Marquez le 1er et le 3 avril - marquage simple
      // :markDateMore=arr // Marquage multiple
      // Le premier et le deuxième marquage ne peuvent pas être utilisés simultanément
      // :agoDayHide='1514937600' // Interdit de cliquer sur une date antérieure à une certaine date - timestamp de 10 chiffres
      // :futureDayHide='1525104000' // Interdit de cliquer sur une date postérieure à une certaine date - timestamp de 10 chiffres
      // :sundayStart="true" // Par défaut, la semaine commence le lundi ; lorsque c'est true, elle commence le dimanche
    ></VueCalendarCustom>

clickDay(data) {
    console.log(data); // Sélection d'un jour
},
changeDate(data) {
    console.log(data); // Changement de mois en cliquant à gauche ou à droite
},
clickToday(data) {
    console.log(data); // Accéder au mois actuel
}

// Exemple de marquage multiple
arr=[{date:'2018/4/1',className:"mark1"}, {date:'2018/4/13',className:"mark2"}];
// Marquage avec différentes classes pour le 1er avril et le 13 avril
```

### API
| Propriété      | Description                                                         | Par défaut | Obligatoire |
| -------------- | ------------------------------------------------------------------- | :--------: | :---------: |
| choseDay       | Méthode appelée lorsqu'un jour est sélectionné, renvoie la date au format YY-MM-DD |    N/A     |     Non     |
| changeMonth    | Méthode appelée lorsqu'on change de mois, renvoie la date au format YY-MM-DD |    N/A     |     Non     |
| isToday        | Méthode appelée lorsqu'on change de mois et qu'on arrive au mois actuel, renvoie la date du jour |    N/A     |     Non     |
| markDate       | Si vous avez besoin de marquer certains jours dans le mois, fournissez un tableau de dates au format "YYYY/MM/DD" |    []     |     Non     |
| markDateMore   | Marquage de plusieurs dates, voir exemple ci-dessus                |    []     |     Non     |
| agoDayHide     | Empêche de cliquer sur des dates antérieures à une date spécifiée (timestamp 10 chiffres) |    0     |     Non     |
| futureDayHide  | Empêche de cliquer sur des dates postérieures à une date spécifiée (timestamp 10 chiffres) | Très grand |     Non     |
| sundayStart    | Si vrai, la semaine commence le dimanche, sinon elle commence le lundi |   false    |     Non     |
| textTop        | Texte en haut du calendrier, par défaut : [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ] |    ---     |     Non     |

```javascript
✅ Ajoutez l'attribut ref au composant Calendar pour exposer trois méthodes permettant de changer de mois directement
Par exemple : <Calendar ref="Calendar"></Calendar>

      ✅ this.$refs.Calendar.PreMonth();  
      ✅ this.$refs.Calendar.NextMonth(); 
      ✅ this.$refs.Calendar.ChoseMonth('2018-12-12'); 
      ✅ this.$refs.Calendar.ChoseMonth('2018-12-12',false);
```
## Erreur rencontrée
- Lors de la compilation avec UglifyJs, vous pouvez rencontrer une erreur.
  Cela est dû au fait que la version actuelle d'UglifyJs ne prend pas en charge la compilation des codes en ES6.
  
  Solution :
  **npm install --save-dev babel-preset-env** <br>
  Ensuite, créez un fichier .babelrc à la racine du projet et ajoutez le contenu suivant :
  ```json
  {
    "presets": ["env"]
  }

[Documentation officielle de babel-preset-env](https://github.com/babel/babel-preset-env)

## Autres informations
Vous pouvez trouver un exemple dans le fichier App.vue situé dans le dossier src, que vous pouvez utiliser comme référence.
Si vous avez d'autres questions ou rencontrez des problèmes d'incompatibilité de version ou de fonctionnalité, n'hésitez pas à nous contacter par e-mail à dimi145dimi@gmail.com. Veuillez fournir des détails précis sur le problème rencontré.