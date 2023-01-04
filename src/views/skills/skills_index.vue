<script setup>
import useSkills from "../../composables/skills";
import { onMounted } from "vue";
const {skills,getSkills} = useSkills();
onMounted(()=>getSkills());

</script>
<template>

  <div class="mt-12">
    <div class="flex justify-end m-2 p-2">
     <router-link :to="{name:'skill_create'}" class="px-4 py-2 bg-indigo-300 hover:bg-indigo-800 text-white rounded">New Skill</router-link>
    </div>
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
          <th scope="col" class="py-3 px-6">
          </th>
        </tr>
        </thead>
        <tbody>
        <tr  v-for="skill in skills" :key="skill.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

          <td class="py-4 px-6">{{skill.name}}</td>
          <td class="py-4 px-6">{{skill.slug}}</td>
          <td class="py-4 px-6"><button type="submit" class="text-white absolute right-2.5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/></td>
          <td class="py-4 px-6"><button type="submit" class="text-white absolute right-2.5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/></td>


        </tr>

        <tr class="bg-white dark:bg-gray-800">

        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>