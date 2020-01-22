<template>
  <div class="syllabus-home" id="syllabus-home">
    
    
  <v-tabs center-active>
    <v-tab>Overview</v-tab>
    <v-tab>Scientific Method</v-tab>
    <v-tab>Atomic Theory</v-tab>
    <v-tab>KMT/Glasses</v-tab>
    <v-tab>Rxn Rates</v-tab>
    <v-tab>Types of Bonds</v-tab>
    <v-tab>Intermolecular</v-tab>
    <v-tab>Formulas and Equations</v-tab>
    <v-tab>Measurement</v-tab>
    <v-tab>Moles</v-tab>

    <v-tab-item>
      <v-card class="pa-5">
        <h2>Chem 1 Syllabus Overview</h2>
        <p class="col-xs-12 col-sm-5">The main website for the school contains a web page which has detailed notes on the content of this course. This syllabus was designed by several teachers in collaboration and is meant to be a guide to the essential course content. It should not be read as an exact map of what topics will be covered in what order, so there may be some differences that you notice between the order of topics on this site and the order presented in that document.</p>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card>
        <ScientificMethod />
      </v-card>
    </v-tab-item>
  </v-tabs>

  </div>
</template>

<script>
import ScientificMethod from './ScientificMethod'
export default {
  name: 'SyllabusHome',
  components: {
    ScientificMethod
  },
  data () {
    return {
      //active: 0
    }
  },
  methods: {
    //next () {
    //   const active = parseInt(this.active)
    //   this.active = (active < 2 ? active + 1 : 0)
    // }
  }
}
</script>

<style>

</style>