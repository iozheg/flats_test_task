<template>
  <div class="box notification is-primary is-light">
    <article class=" has-text-left">
      <p class="title is-5">{{ attributes.title }}</p>
      <p class="subtitle is-6">{{ type }}</p>
      <div class="content">
        <ul class="flat-attrs-list">
          <li><b>Комнат:</b> {{ attributes.rooms }}</li>
          <li><b>Адрес:</b> {{ address }}</li>
          <li><b>Площадь:</b> {{ area }}</li>
          <li><b>Агент:</b> {{ agent }}</li>
        </ul>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span
              class="icon is-small"
              :class="likeColor"
              @click="like"
            >
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
              </svg>
            </span>
          </a>
        </div>
      </nav>
    </article>
  </div>
</template>

<script>
export default {
  name: 'FlatItem',
  data() {
    return {
      types: {
        flat: 'Квартира',
      },
      cities: {
        Tyumen: 'Тюмень',
      },
    };
  },
  props: {
    flat: { type: Object, required: true },
  },
  computed: {
    attributes() {
      return this.flat.attributes || {};
    },
    type() {
      return this.types[this.flat.type] || 'Помещение';
    },
    address() {
      const { city, street, house, room } = this.attributes.address || {};
      const addressParts = [
        city && `${this.cities[city]}`,
        street && `${street}`,
        house && `д. ${house}`,
        room && `кв. ${room}`,
      ].filter(Boolean);
      return addressParts.join(', ');
    },
    area() {
      const { area, unit = '' } = this.attributes;
      return area ? `${area} ${unit}` : '';
    },

    agent() {
      const {
        first_name = '',
        last_name = '',
        middle_name = '',
      } = this.flat.relationships?.attributes || {};
      return `${last_name} ${first_name} ${middle_name}`;
    },

    likeColor() {
      return this.flat.liked ? 'has-text-danger': 'has-text-black';
    },
  },

  methods: {
    like() {
      this.$emit('like');
    },
  },
};
</script>

<style scoped>
.flat-attrs-list {
  list-style-type: none;
  margin-left: 0;
}
</style>