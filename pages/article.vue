<template>
  <article>
    <section>
      <h1>Page Header</h1>
      <div>
          <ul>
          <li v-for="n in data" :key="n" class="item">
            <p>{{ n.nama }}</p>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script src="./article.js"></script>

<style scoped></style>
