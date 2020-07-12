<template>
  <div class="table-container">
    <slot></slot>
    <div class="scroll">
      <table class="table">
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
  </div>
</template>

<script>
export default {
  props: ['items'],
};
</script>

<style scoped>
/* Использование scoped, как альтернатива методолгиям вроде БЭМ. */

.scroll {
  height: calc(100vh - 120px);
  overflow: scroll;
}
</style>
