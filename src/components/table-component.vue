<template>
  <div class="table-container">
    <table class="table">
      <caption>
        <slot></slot>
      </caption>
      <thead>
        <tr>
          <th>Price</th>
          <th>Ammount</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td >{{ item[0] }}</td>
          <td >{{ item[1] }}</td>
          <td>
            {{ item[0] * item[1] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['items'],
};
</script>
