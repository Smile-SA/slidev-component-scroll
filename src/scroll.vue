<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { next, prev } from "@slidev/client/logic/nav";

function onWheel(event: WheelEvent) {
  if (event.deltaY > 0) {
    next();
  } else {
    prev();
  }
}

onMounted(() => window.addEventListener("wheel", onWheel));

onUnmounted(() => window.removeEventListener("wheel", onWheel));
</script>

<template>
</template>
