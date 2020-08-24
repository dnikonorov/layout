<template>
  <li class="transaction">
    <details>
      <summary>
        <div class="order">Заказ: <b> {{ transaction.id }}</b></div>
        <div class="time">{{ transaction.created_time }}</div>
        <div class="account">{{ transaction.account_number }}</div>
        <div class="amount rubles positive">{{ transaction.amount }}</div>
      </summary>
      <p class="description">{{transaction.description}}</p>
    </details>
  </li>
</template>

<script>
/**
 * Компонент для отображения одной транзакции
 */
export default {
  name: "Transaction",
  props: ['transaction']

}
</script>

<style scoped>

</style>