<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";

onMounted(() => {
    store.dispatch("DataController", "getRoute");
});
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Route Info
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4">
                    <div class="flex justify-between">
                        <h1>
                            <b>
                                Route:
                            </b>
                            {{ store.route.name  }}
                        </h1>
                        <button @click="store.routeEdit = !store.routeEdit">Edit</button>
                    </div>

                    <form @submit.prevent="store.submit('DataController', 'storeRoute', ['route']); store.routeEdit = false" v-if="store.routeEdit">
                        <div>
                            <label for="name">Route Name</label>
                            <input type="text" name="name" v-model="store.route.name">
                        </div>

                        <div>
                            <button type="submit" class="bg-blue-600">Save</button>
                        </div>
                    </form>

                    <!-- Stops -->
                    <div class="flex justify-between my-6">
                        <h1>
                            <b>
                                Stops
                            </b>
                        </h1>

                        <button @click="store.stopEdit = !store.stopEdit; store.stop = {}">Add Stop</button>
                    </div>

                    <form @submit.prevent="store.submit('DataController', 'storeStop', ['stop', 'route']); store.stopEdit = false" v-if="store.stopEdit">
                        <div>
                            <label for="order">Order</label>
                            <input type="text" name="order" id="order" v-model="store.stop.order">
                        </div>

                        <div>
                            <label for="street">Street</label>
                            <input type="text" name="street" id="street" v-model="store.stop.street">
                        </div>

                        <div>
                            <label for="street">Apt #</label>
                            <input type="text" name="street" id="street" v-model="store.stop.street_2">
                        </div>

                        <div>
                            <label for="city">City</label>
                            <input type="text" name="city" id="city" v-model="store.stop.city">
                        </div>

                        <div>
                            <label for="state">State</label>
                            <input type="text" name="state" id="state" v-model="store.stop.state">
                        </div>

                        <div>
                            <label for="zip">Zip</label>
                            <input type="text" name="zip" id="zip" v-model="store.stop.zip">
                        </div>

                        <div class="flex flex-row justify-end">
                            <div>
                                <button @click="store.stopEdit = false; store.stop = {}" class="bg-red-600">Cancel</button>
                            </div>
                            <div>
                                <button type="submit" class="bg-blue-500 hover:bg-blue-700">Add Stop</button>
                            </div>
                        </div>
                    </form>

                    <div v-for="stop in store.stops" class="mb-3">
                        <p>
                            <b>
                                Order:
                            </b>
                            {{ stop.order }}
                        </p>

                        <p>
                            <b>
                                Address:
                            </b>
                            {{ stop.street }} {{ stop.street_2 ? `Apt: ${stop.street_2}` : '' }} {{ stop.city }}, {{ stop.state }} {{ stop.zip }}
                        </p>
                        <p>
                            <button @click="store.stop = stop; store.stopEdit = true">Edit</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
