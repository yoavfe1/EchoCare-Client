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
            <td>{{ props.item.first_name }}</td>
            <td>{{ props.item.last_name }}</td>
            <td>{{ props.item.id}}</td>
            <td>{{ props.item.age}}</td>
            <td>{{ props.item.email}}</td>
            <td>{{ props.item.phone_number}}</td>
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
        rowsPerPage: 20, // -1 for All",
      },
      headers: [
        { text: "First Name", value: "first_name" },
        { text: "Last Name", value: "last_name" },
        { text: "ID", value: "id" },
        { text: "Age", value: "age" },
        { text: "Email", value: "email" },
        { text: "Phone Number", value: "phone_number" },
      ],
      residents_data: [
        {
          first_name: "Paul",
          last_name: "Smith",
          id: 12345678,
          age: 72,
          email: "PaulSmith@gmail.com",
          phone_number: "050-1234567",
        },
                {
          first_name: "Mary",
          last_name: "Jewls",
          id: 39828492,
          age: 79,
          email: "MaryJewls@gmail.com",
          phone_number: "050-1234567",
        },
                {
          first_name: "Richard",
          last_name: "Jones",
          id: 8748937,
          age: 92,
          email: "RichardJones@gmail.com",
          phone_number: "050-1234567",
        },
                {
          first_name: "Carol",
          last_name: "Garcia",
          id: 4737493794,
          age: 79,
          email: "CarolGarcia@gmail.com",
          phone_number: "050-1234567",
        },
                {
          first_name: "John",
          last_name: "Anders",
          id: 473874837,
          age: 85,
          email: "JohnAnders@gmail.com",
          phone_number: "050-1234567",
        },
                {
          first_name: "Judit",
          last_name: "Harris",
          id: 320940244,
          age: 82,
          email: "JuditHarris@gmail.com",
          phone_number: "050-1234567",
        },
      ]
    }
  }
};
</script>