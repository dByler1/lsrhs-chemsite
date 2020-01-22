<template>
  <v-app id="LSRHS_ChemSite">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
        >
          <v-list-item-content>
            <v-list-item-title >{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      app
      class="top-app-bar"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="top-app-bar-icon" />
      <v-toolbar-title>LSRHS Chemistry 2</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
     
    </v-content>
    <v-footer
      app
      class="footer-background"
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      drawer: null,
      items: [
        {
          id: 1,
          name: 'Home',
          to: '/'
        },
        {
          id: 2,
          name: 'Syllabus',
          to: '/syllabus/home'
        },
        {
          id: 3,
          name: 'Homework',
          to: '/homework'
        },
        {
          id: 4,
          name: 'Resources',
          to: '/resources/home'
        },
        {
          id: 5,
          name: 'Contact',
          to: '/contact'
        },

      ]
    }
  }
  
};
</script>

<style>
  #LSRHS_ChemSite .top-app-bar-icon {
    color: #ffffff;
  }

  #LSRHS_ChemSite .top-app-bar {
    background-color: #303030;
    color: #ffffff;
  }

  #LSRHS_ChemSite .footer-background {
    background-color: #234A93;
  }

</style>
