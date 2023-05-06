<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";

onMounted(() => {
    store.setData({
        route: {
            name: "",
        },
    })
});
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create Route
            </h2>

        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4">
                    <form @submit.prevent="store.submit('DataController', 'storeRoute', ['route'])">
                        <div>
                            <label for="name">Route Name</label>
                            <input type="text" name="name" v-model="store.route.name">
                        </div>

                        <div>
                            <button class="bg-blue-600" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
