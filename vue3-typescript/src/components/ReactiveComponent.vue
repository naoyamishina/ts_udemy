<script setup lang="ts">
import { reactive} from 'vue';

type User = {
  id: number,
  name: string
}

const user1: User = reactive({
  id: 1,
  name: "堂安"
})

const user2 = reactive({} as User)
user2.id = 2

</script>

<template>
  <div>
    <h2>
      Reactive
    </h2>
    {{user1}}
    {{user2}}
  </div>
</template>
