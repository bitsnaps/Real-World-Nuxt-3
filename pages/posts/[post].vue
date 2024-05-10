<script setup lang="ts">
import type { PostDetails } from '@/data/posts'
import { getPostDetailsUrl } from '@/data/posts'

definePageMeta({
  layout: 'breadcrumb'
})

const postSlug = useParam('post')

const { data: post } = await useFetch<PostDetails>(
  getPostDetailsUrl(postSlug)
)

const categoryState = useCategoryState()

if (post.value) {
  categoryState.value = {
    name: post.value.category.name,
    slug: post.value.category.slug
  }
}
</script>

<template>
  <main>
    <template v-if="post">
      <h1>
        {{ post.title }}
        <CategoryLink :category="post.category" />
      </h1>
      <!-- This cause an error at the moment -->
      <!-- <RenderMarkdown :source="post.content" /> -->
      <!-- eslint-disable-next-line vue/no-v-html-->
      <p v-html="post.content" />
    </template>
  </main>
</template>
