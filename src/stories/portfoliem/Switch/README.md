# DarkModeSwitch

```vue
<template>
  <dark-mode-switch @darkMode="onClick" />
</template>

<script>
import DarkModeSwitch from './DarkModeSwitch.vue';

export default {
  name: 'DarkModeSwitch',
  data: () => ({
    switchValue: false
  }),
  methods: {
    onClock() {
      this.switchValue = !this.switchValue;
    }
  }
};
</script>
```

## props
| Name         | Required | Type                                          | DefaultValue           | Description                    |
| ------------ | -------- | --------------------------------------------- | ---------------------- | ------------------------------ |
| -            | -        | -                                             | -                      | -                              |