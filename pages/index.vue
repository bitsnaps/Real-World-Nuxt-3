<script setup lang="ts">
import type { Post } from '~/data/posts'
import { getPostsUrl } from '~/data/posts'

const { data: posts } = await useFetch<Post[]>(getPostsUrl())

</script>

<template>
  <main>
    <h1>Nuxt 3 Blog {{ posts?.length }}</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
      {{ post.title }}
</li>
    </ul>
  </main>
</template>
