<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="close" @click="$emit('close')">X</button>
          <div class="video-container"  v-if="trailerAdress.length > 0">
            <iframe
              width="650"
              height="405"
              :src="`https://www.youtube.com/embed/${trailerAdress[0].key}`"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p v-else>Brak Filmu w Bazie Danych</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["trailerAdress"]
};
</script>

<style lang="scss" scoped>
</style>