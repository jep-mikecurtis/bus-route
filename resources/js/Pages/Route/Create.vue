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
            <div
                class="flex mt-4 justify-between shadow rounded overflow-hidden"
            >
                <Link
                    class="flex-1 bg-blue-600 text-white font-bold text-center py-2 text-sm"
                    href="/dashboard/routes"
                    >Add Route</Link
                >
                <Link
                    class="flex-1 bg-blue-600 text-white font-bold text-center py-2 text-sm"
                    href="/dashboard/stop/create"
                    >Add Stop</Link
                >
                <Link
                    class="flex-1 bg-blue-600 text-white font-bold text-center py-2 text-sm"
                    href="/dashboard/stop"
                    >Create Prospect</Link
                >
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <form @submit.prevent="store.submit('DataController', 'storeRoute', ['route'])">
                        <div>
                            <label for="name">Route Name</label>
                            <input type="text" name="name" v-model="store.route.name">
                        </div>

                        <div>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
