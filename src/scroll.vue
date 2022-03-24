<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { next, prev } from "@slidev/client/logic/nav";

function onWheel(event: WheelEvent) {
  let element: HTMLElement | null = event.target as HTMLElement;
  let scrollable = false;
  do {
    scrollable = element.scrollHeight > element.clientHeight;
    element = element.parentElement;
  } while (!scrollable && element)

  if (!scrollable) {
    if (event.deltaY > 0) {
      next();
    } else {
      prev();
    }
  }
}

onMounted(() => window.addEventListener("wheel", onWheel, { passive: true }));

onUnmounted(() => window.removeEventListener("wheel", onWheel));
</script>

<template>
</template>
