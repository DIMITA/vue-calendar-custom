/**
 * Created by Wilfried HOUEDANOU on 2017/10/10.
 */
import VueCalendarCustom from './components/vue-calendar-custom/vue-calendar-custom.vue';

VueCalendarCustom.install = Vue => {
    Vue.component('vue-calendar-custom', VueCalendarCustom);
  };
  
  // Exportez l'objet MaBibliothequeVue pour qu'il puisse être importé par les utilisateurs
  export default VueCalendarCustom;
  
