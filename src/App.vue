<template>
  <v-app>
    <v-toolbar app color="#1976D2">
      <v-toolbar-title class="headline">
        <span class="display-1 font-weight-bold white--text">ECHO CARE </span>
        <span class="font-weight-light white--text">Nursing System</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat @click="$router.push('dashboard')">
        <v-icon class="white--text" left>dashboard</v-icon>
        <span class="white--text">Dashboard</span>
      </v-btn>
      <v-btn flat @click="$router.push('residents')">
        <v-icon class="white--text" left>supervisor_account</v-icon>
        <span class="white--text">Residents</span>
      </v-btn>
      <v-btn flat @click="$router.push('devices')">
        <v-icon class="white--text" left>developer_board</v-icon>
        <span class="white--text">Devices</span>
      </v-btn>
      <v-btn flat @click="$router.push('settings')">
        <v-icon class="white--text" left>settings</v-icon>
        <span class="white--text">Settings</span>
      </v-btn>
      <v-btn flat @click="$router.push('/')">
        <v-icon class="white--text" left>logout</v-icon>
        <span class="white--text">Logout</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>