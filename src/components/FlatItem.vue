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
    };
  },
  props: {
    flat: { type: Object, required: true },
  },
  computed: {
    attributes() {
      return this.flat.attributes;
    },
    type() {
      return this.types[this.flat.type] || 'Помещение';
    },
    address() {
      const { city, street, house, room } = this.attributes.address;
      return `${city}, ${street}, д. ${house}, кв. ${room}`;
    },
    area() {
      const { area, unit } = this.attributes;
      return `${area} ${unit}`;
    },

    agent() {
      const { first_name, last_name, middle_name } = this.flat.relationships.attributes;
      return `${last_name} ${first_name} ${middle_name}`;
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