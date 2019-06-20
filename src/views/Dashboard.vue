<template>
  <div>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="residents_data"
        :search="search"
        :pagination.sync="pagination"
        class="elevation-1"
      >
        <template slot="items" scope="props">
          <tr v-bind:bgcolor="getRowBackground(props.item.alerts)">
            <td font-weight-bold>{{ props.item.name }}</td>
            <td>{{ props.item.location }}</td>
            <td>{{ props.item.checkin }}</td>
            <td>{{ props.item.visitors }}</td>
            <td>
              <span v-for="alert in props.item.alerts" v-bind:key="alert.id">
                <v-chip v-bind:color="getAlertBackground(alert)" text-color="white">
                  <v-avatar>
                    <v-icon>{{getAlertIcon(alert)}}</v-icon>
                  </v-avatar>
                  {{alert}}
                </v-chip>
              </span>
            </td>
            <td>
              <v-avatar>
                <v-icon large color="black">assessment</v-icon>
              </v-avatar>
            </td>
          </tr>
        </template>
        <template v-slot:no-results>
          <v-alert
            :value="true"
            color="error"
            icon="warning"
          >Your search for "{{ search }}" found no results.</v-alert>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      pagination: {
        rowsPerPage: 20 // -1 for All",
      },
      headers: [
        {
          text: "Resident",
          align: "left",
          sortable: true,
          searchable: true,
          value: "name"
        },
        { text: "Location", value: "location" },
        { text: "Check-in", value: "checkin" },
        { text: "Visitors", value: "visitors" },
        { text: "Alerts", value: "alerts" },
        { text: "Reports", value: "reports" }
      ],
      residents_data: [
        {
          name: "Paul Smith",
          location: "Bedroom",
          checkin: "08:11",
          visitors: 2,
          alerts: ["fall"]
        },
        {
          name: "Mary Jewls",
          location: "Living Room",
          checkin: "07:31",
          visitors: 1,
          alerts: ["abnormal"]
        },
        {
          name: "Richard Jones",
          location: "Toilets",
          checkin: "05:58",
          visitors: 0,
          alerts: []
        },
        {
          name: "John Anders",
          location: "Kitchen",
          checkin: "07:41",
          visitors: 0,
          alerts: []
        },
        {
          name: "Judit Harris",
          location: "Kitchen",
          checkin: "06:37",
          visitors: 0,
          alerts: []
        },
        {
          name: "Carol Garcia",
          location: "Bedroom",
          checkin: "08:11",
          visitors: 0,
          alerts: ["respiration"]
        }
      ]
    };
  },
  methods: {
    getRowBackground(alerts) {
      var red = "#EF9A9A";
      if (alerts.length > 0) {
        return red;
      } else {
        return "";
      }
    },
    getAlertIcon(alert) {
      switch (alert) {
        case "fall":
          return "airline_seat_recline_extra";
        case "abnormal":
          return "transfer_within_a_station";
        case "respiration":
          return "voice_over_off";
      }
      return "";
    },
    getAlertBackground(alert) {
      switch (alert) {
        case "fall":
          return "red";
        case "abnormal":
          return "orange";
        case "respiration":
          return "primary";
      }
      return "";
    }
  }
};
</script>