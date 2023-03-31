<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { isPrintMode, next, prev } from "@slidev/client/logic/nav";

const scrollableOverflow = ["auto", "scroll", "overlay"];

function onWheel(event: WheelEvent) {
  if (isPrintMode.value) {
    return;
  }

  let element: HTMLElement | null = event.target as HTMLElement;
  let scrollable = false;
  do {
    scrollable =
      element.scrollHeight > element.clientHeight &&
      scrollableOverflow.includes(window.getComputedStyle(element).overflowY);
    element = element.parentElement;
  } while (!scrollable && element);

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

<template></template>
