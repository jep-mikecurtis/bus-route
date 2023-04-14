<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
onMounted(() => {
    store.dispatch("DataController", "getRoutes");
});
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Bus Dashboard
            </h2>
            <div
                class="flex mt-4 justify-between shadow rounded overflow-hidden"
            >
                <Link
                    class="flex-1 bg-blue-600 text-white font-bold text-center py-2 text-sm"
                    href="/route/create"
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
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4">
                    <h1 class="text-2xl mb-4">Routes</h1>
                    <div v-for="route in store.routes" class="mb-4">
                        <div class="flex space-x-2">
                            <span class="font-bold">Name:</span>
                            <span>{{ route.name }}</span>
                        </div>
                        <Link :href="'/route/view?id=' + route.id">
                            View
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
