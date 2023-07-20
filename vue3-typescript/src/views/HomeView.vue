<script setup lang="ts">
import RefComponent from '@/components/RefComponent.vue';
import ReactiveComponent from '@/components/ReactiveComponent.vue';
import EventComponent from '@/components/EventComponent.vue';
import ComputedComponent from '@/components/ComputedComponent.vue';
import PropsComponent from '@/components/PropsComponent.vue';
import PropsTypeComponent from '@/components/PropsTypeComponent.vue';
import EmitComponent from '@/components/EmitComponent.vue';

const propTypeTest = [
  { id: 1, name: '商品1'}, 
  { id: 2, name: '商品2'}
]

const emitTest = (message:string ) : void => { 
  console.log(message)
}

</script>

<template>
  <main>
    <RefComponent/>
    <ReactiveComponent/>
    <EventComponent/>
    <ComputedComponent/>
    <PropsComponent :id=1 name="香川"/>
    <PropsTypeComponent :items="propTypeTest" />
    <EmitComponent @btnClick="emitTest" />
  </main>
</template>
