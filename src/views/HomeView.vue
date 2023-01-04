<script setup>
import useSkills from "../composables/skills";
import { onMounted } from "vue";
const {skills,getSkills} = useSkills();
onMounted(()=>getSkills());

</script>

<template>
  <main>


    <div class="mt-12">
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
               name
            </th>
            <th scope="col" class="py-3 px-6">
              slug
            </th>
            <th scope="col" class="py-3 px-6">
            </th>
          </tr>
          </thead>
          <tbody>
          <tr  v-for="skill in skills" :key="skill.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

            <td class="py-4 px-6">{{skill.name}}</td>
            <td class="py-4 px-6">{{skill.slug}}</td>


          </tr>

          <tr class="bg-white dark:bg-gray-800">

          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
