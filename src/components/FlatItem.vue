<template>
  <!-- <div class="tile is-4 is-parent"> -->
    <div class="box notification is-primary is-light">
      <article class=" has-text-left">
        <p class="title is-5">{{ attributes.title }}</p>
        <p class="subtitle is-6">{{ type }}</p>
        <div class="content">
          <p><b>Комнат:</b> {{ attributes.rooms }}</p>
          <p><b>Адрес:</b> {{ address }}</p>
          <p><b>Площадь:</b> {{ area }}</p>
          <p><b>Агент:</b> {{ agent }}</p>
        </div>
      </article>
    </div>
  <!-- </div> -->
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
