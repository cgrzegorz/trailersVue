<template>
  <div class="container">
    <Modal
      v-if="showModal && GET_TRAILER.payload !== null"
      v-on:close="closeModal"
      :trailerAdress="GET_TRAILER.payload"
    ></Modal>
    <div>
      <div class="row" v-for="(obj,index) in GET_MOVIE" :key="index">
        <div class="card col-12 col-lg-3" style="width: 10rem;" v-for="movie in obj.payload" :key="movie.id">
          <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
          <div class="card-body">
            <h5 class="card-title">{{movie.original_title}}</h5>
            <p class="card-text">
              {{movie.overview}}
            </p>
            
            <div class="buttonPosition">
              <button
                v-on:click="OpenTrailerModal(movie.id)"
                type="button"
                class="btn btn-success"
              >Watch Trailer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="MoreMovies" type="button" class="btn btn-warning moreBtn">Load More Movies</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
import Modal from "../components/modal";
export default {
  data() {
    return {
      showModal: false,
      pageNumber: 1,
      showLess:true
    };
  },
  components: {
    Modal
  },
  computed: {
    ...mapGetters(["GET_MOVIE", "GET_TRAILER"])
  },
  methods: {
    ...mapActions(["LOAD_MOVIES", "LOAD_TRAILER"]),
    ...mapMutations(["SET_TRAILER"]),

    OpenTrailerModal(id) {
      this.LOAD_TRAILER(id);
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.SET_TRAILER(null);
    },
    MoreMovies() {
      this.pageNumber = this.pageNumber + 1;
      this.LOAD_MOVIES(this.pageNumber);
    },
  },
  mounted() {
    this.LOAD_MOVIES(1);
  }
};
</script>

<style lang="scss" scoped>
</style>
