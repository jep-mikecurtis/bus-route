<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Modal from "@/Components/Modal.vue";

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
                <div
                    class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4"
                >
                    <div class="flex justify-between">
                        <h1>
                            <b> Route: </b>
                            {{ store.route.name }}
                        </h1>
                        <button @click="store.routeEdit = !store.routeEdit">
                            Edit
                        </button>
                    </div>

                    <form
                        @submit.prevent="
                            store.submit('DataController', 'storeRoute', [
                                'route',
                            ]);
                            store.routeEdit = false;
                        "
                        v-if="store.routeEdit"
                    >
                        <div>
                            <label for="name">Route Name</label>
                            <input
                                type="text"
                                name="name"
                                v-model="store.route.name"
                            />
                        </div>

                        <div>
                            <button type="submit" class="bg-blue-600">
                                Save
                            </button>
                        </div>
                    </form>

                    <!-- Stops -->
                    <div class="flex justify-between my-6">
                        <h1>
                            <b> Stops </b>
                        </h1>

                        <button
                            @click="
                                store.stopEdit = !store.stopEdit;
                                store.stop = {};
                            "
                        >
                            Add Stop
                        </button>
                    </div>

                    <div
                        v-for="stop in store.stops"
                        class="mb-6 border p-4 rounded shadow-sm flex flex-col space-y-4 max-w-xl"
                    >
                        <!-- Stop -->
                        <div class="flex justify-between">
                            <p>
                                <b> Stop: </b>
                                {{ stop.order }}
                            </p>
                            <div class="flex space-x-2">
                                <button
                                    class="bg-blue-600 text-white rounded shadow text-xs font-bold p-1"
                                    @click="
                                        store.stop = stop;
                                        store.stopEdit = true;
                                    "
                                >
                                    Edit Stop
                                </button>
                                <button
                                    class="bg-blue-600 text-white rounded shadow text-xs font-bold p-1"
                                    @click="
                                        store.stop = stop;
                                        store.contact = {};
                                        store.contactEdit = true;
                                    "
                                >
                                    Add Contact
                                </button>
                            </div>
                        </div>

                        <!-- Address -->
                        <div>
                            <p>
                                <b> Address: </b>
                            </p>
                            <p>
                                {{ stop.street }}
                                {{
                                    stop.street_2 ? `Apt: ${stop.street_2}` : ""
                                }}
                            </p>
                            <p>
                                {{ stop.city }}, {{ stop.state }} {{ stop.zip }}
                            </p>
                        </div>

                        <!-- Contacts -->
                        <div>
                            <p class="flex space-x-4">
                                <button
                                    class="text-blue-600"
                                    @click="
                                        store[`show-stop-${stop.id}`] =
                                            !store[`show-stop-${stop.id}`]
                                    "
                                >
                                    Show
                                </button>
                                <b> Contacts: {{ stop.contacts.length }} </b>
                            </p>

                            <div
                                v-for="contact in stop.contacts"
                                v-if="store[`show-stop-${stop.id}`]"
                            >
                                <div class="my-2">
                                    <button
                                        class="text-blue-600"
                                        @click="
                                            store.contactEdit = true;
                                            store.contact = contact;
                                            store.stop = stop;
                                        "
                                    >
                                        {{ contact.first_name }}
                                        {{ contact.last_name }}
                                    </button>
                                    <p>
                                        {{ contact.phone }}
                                    </p>
                                    <p>
                                        {{ contact.email }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modals -->

        <!-- Stop Modal -->
        <Modal :show="store.stopEdit">
            <div class="flex items-center justify-between p-4">
                <h2 class="text-xl">Add Stop</h2>
                <button class="text-red-600" @click="store.submit('DataController', 'deleteStop', ['stop']); store.stopEdit = false">
                   Delete Stop
                </button>
            </div>

            <form
                @submit.prevent="
                    store.submit('DataController', 'storeStop', [
                        'stop',
                        'route',
                    ]);
                    store.stopEdit = false;
                "
                class="p-4"
            >
                <div>
                    <label for="order">Order</label>
                    <input
                        type="text"
                        name="order"
                        id="order"
                        v-model="store.stop.order"
                    />
                </div>

                <div>
                    <label for="street">Street</label>
                    <input
                        type="text"
                        name="street"
                        id="street"
                        v-model="store.stop.street"
                    />
                </div>

                <div>
                    <label for="street">Apt #</label>
                    <input
                        type="text"
                        name="street"
                        id="street"
                        v-model="store.stop.street_2"
                    />
                </div>

                <div>
                    <label for="city">City</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        v-model="store.stop.city"
                    />
                </div>

                <div>
                    <label for="state">State</label>
                    <input
                        type="text"
                        name="state"
                        id="state"
                        v-model="store.stop.state"
                    />
                </div>

                <div>
                    <label for="zip">Zip</label>
                    <input
                        type="text"
                        name="zip"
                        id="zip"
                        v-model="store.stop.zip"
                    />
                </div>

                <div class="flex flex-row justify-end">
                    <button
                        @click="
                            store.stopEdit = false;
                            store.stop = {};
                        "
                        class="bg-red-600"
                    >
                        Cancel
                    </button>

                    <button type="submit" class="bg-blue-500 hover:bg-blue-700">
                        Add Stop
                    </button>
                </div>
            </form>
        </Modal>

        <!-- Contact Modal -->
        <Modal :show="store.contactEdit">
            <h2 class="text-xl p-4">Contact</h2>
            <form
                @submit.prevent="
                    store.submit('DataController', 'storeContact', [
                        'stop',
                        'contact',
                        'route',
                    ]);
                    store.contactEdit = false;
                "
                class="p-4"
            >
                <div>
                    <label for="first_name">First Name</label>
                    <input
                        v-model="store.contact.first_name"
                        type="text"
                        name="first_name"
                        id="first_name"
                    />
                </div>
                <div>
                    <label for="last_name">Last Name</label>
                    <input
                        v-model="store.contact.last_name"
                        type="text"
                        name="last_name"
                        id="last_name"
                    />
                </div>
                <div>
                    <label for="phone">Phone</label>
                    <input
                        v-model="store.contact.phone"
                        type="text"
                        name="phone"
                        id="phone"
                    />
                </div>
                <div>
                    <label for="email">Email</label>
                    <input
                        v-model="store.contact.email"
                        type="text"
                        name="email"
                        id="email"
                    />
                </div>
                <div class="flex flex-row justify-end">
                    <button
                        type="button"
                        class="bg-red-600 min-w-[100px]"
                        @click="
                            store.contactEdit = false;
                            store.stop = {};
                            store.contact = {};
                        "
                    >
                        Cancel
                    </button>
                    <button type="submit" class="bg-blue-600 min-w-[100px]">
                        Save
                    </button>
                </div>
            </form>
        </Modal>
    </AppLayout>
</template>
