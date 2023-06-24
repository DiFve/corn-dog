<template>
  <div class="flex flex-col absolute inset-0 justify-center items-center">
    <div class="text-2xl">Your training is complete</div>
    <div>Please upload a picture for our website to predict.</div>
    <div class="flex flex-row justify-center items-center">
      <div class="flex items-center justify-center w-96 h-96 mt-2">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              class="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            @change="previewImage"
          />
        </label>
      </div>

      <div class="border ml-32 p-3">
        <p>Preview Here:</p>
        <template v-if="preview">
          <img :src="preview" class="img-fluid w-56 h-56" />
        </template>
      </div>
    </div>

    <button
      class="btn rounded-3xl bg-ma_yellow hover:bg-[#FFE39B]"
      onclick="my_modal_1.showModal()"
      v-if="preview"
    >
      let's predict
    </button>
    <dialog id="my_modal_1" class="modal">
      <div method="dialog" class="modal-box bg-ma_yellow">
        <h3 class="font-bold text-lg">Confirm to predict?</h3>
        <p class="py-4">
          Processing can take a long time since the model is large.
        </p>
        <div class="modal-action flex flex-row justify-around">
          <!-- if there is a button in form, it will close the modal -->
          <button
            class="border rounded-2xl p-3 hover:border-base-100 hover:text-base-100"
            @click="confirm"
          >
            <div class="">Confirm</div>
          </button>
          <button
            class="border rounded-2xl p-3 hover:border-base-100 hover:text-base-100"
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
import Waiting from "../pages/Waiting.vue";

export default {
  data() {
    return {
      preview: null,
      image: null,
      showWarning: false,
    };
  },
  methods: {
    previewImage: function (event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },

    confirm() {
      this.$store.commit("SET_PAGES", Waiting);
    },
  },
};
</script>
