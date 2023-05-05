<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Modal from "@/Components/Modal.vue";
import VueGoogleAutocomplete from "vue-google-autocomplete";

onMounted(() => {
    store.dispatch("DataController", "getRoute");
});

const formatPickupDate = (date) => {
    // Validate date
    if (!date) return "";

    // Format 2023-04-30 to 04/30/2023 Date is off by one day
    date = new Date(date);
    date.setDate(date.getDate() + 1);
    date = date.toLocaleDateString("en-US");

    return date;
};

const getAddressData = (data) => {
    store.stop.street = `${data.street_number} ${data.route}`;
    store.stop.city = data.locality;
    store.stop.state = data.administrative_area_level_1;
    store.stop.zip = data.postal_code;
};
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
                            <a class="ml-4 text-blue-600" :href="'/pdf/route/'+store.route.id">Download</a>
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
                        <!-- Stop And Name -->
                        <div class="flex flex-col items-center space-y-2">
                            <p>
                                <b> Stop: </b>
                                {{ stop.order }}
                            </p>
                            <p v-if="stop.name">
                                <b>Name:</b>
                                {{ stop.name }}
                            </p>
                        </div>
                        <!-- Stop -->
                        <div class="flex justify-between space-x-2">
                            <button
                                class="flex-1 bg-blue-600 text-white rounded shadow text-xs font-bold p-1"
                                @click="
                                    store.stop = stop;
                                    store.stopEdit = true;
                                "
                            >
                                Edit Stop
                            </button>
                            <button
                                class="flex-1 bg-blue-600 text-white rounded shadow text-xs font-bold p-1"
                                @click="
                                    store.stop = stop;
                                    store.contact = {};
                                    store.contactEdit = true;
                                "
                            >
                                Add Contact
                            </button>

                            <button
                                class="flex-1 bg-blue-600 text-white rounded shadow text-xs font-bold p-1"
                                @click="
                                    store.pickupEdit = !store.pickupEdit;
                                    store.pickup = {};
                                    store.stop = stop;
                                "
                            >
                                Add Pickup
                            </button>
                        </div>

                        <!-- Address -->
                        <div>
                            <p>
                                <b> Address: </b>
                            </p>
                            <p>
                                <a
                                    :href="
                                        'http://maps.google.com/?q=' +
                                        stop.street +
                                        ' ' +
                                        stop.city +
                                        ' ' +
                                        stop.state +
                                        ' ' +
                                        stop.zip
                                    "
                                    target="_blank"
                                >
                                    {{ stop.street }}
                                    {{
                                        stop.street_2
                                            ? `Apt: ${stop.street_2}`
                                            : ""
                                    }}
                                </a>
                            </p>
                            <p>
                                {{ stop.city }}, {{ stop.state }} {{ stop.zip }}
                            </p>
                        </div>

                        <!-- Contacts -->
                        <div>
                            <p class="flex space-x-4">
                                <b> Contacts: {{ stop.contacts.length }} </b>
                                <button
                                    class="text-blue-600"
                                    @click="
                                        store[`show-stop-${stop.id}`] =
                                            !store[`show-stop-${stop.id}`]
                                    "
                                >
                                    Show
                                </button>
                            </p>

                            <div
                                v-for="contact in stop.contacts"
                                v-if="store[`show-stop-${stop.id}`]"
                            >
                                <div
                                    class="my-2 flex items-center space-x-2 flex-wrap"
                                >
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
                                    <a
                                        :href="'tel:' + contact.phone"
                                        class="text-purple-800 block"
                                    >
                                        {{ contact.phone }}
                                    </a>

                                    <p>
                                        {{ contact.email }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Pickups -->
                        <div>
                            <p class="flex space-x-4">
                                <b>Pickups: {{ stop.pickups.length }}</b>
                                <button
                                    class="text-blue-600"
                                    @click="store.viewPickup = stop"
                                >
                                    Show
                                </button>
                                <span>
                                    <b>Latest:</b>
                                    {{
                                        stop.pickups.length
                                            ? formatPickupDate(
                                                  stop.pickups[0].date
                                              )
                                            : "None"
                                    }}
                                </span>
                            </p>
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
                <button
                    class="text-red-600"
                    @click="store.deleteStopConfirm = !store.deleteStopConfirm"
                >
                    Remove Stop
                </button>
            </div>

            <div class="p-4 flex space-x-4" v-if="store.deleteStopConfirm">
                <p>Are you sure you want to delete this stop?</p>
                <button
                    class="text-red-600"
                    @click="
                        store.submit('DataController', 'deleteStop', ['stop']);
                        store.stopEdit = false;
                    "
                >
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
                <div class="flex flex-row space-x-4">
                    <div class="w-8/12">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            v-model="store.stop.name"
                        />
                    </div>

                    <div class="w-4/12">
                        <label for="order">Order</label>
                        <input
                            type="text"
                            name="order"
                            id="order"
                            v-model="store.stop.order"
                        />
                    </div>
                </div>

                <div>
                    <label for="map">Search Address</label>
                    <vue-google-autocomplete
                        id="map"
                        classname="form-control"
                        placeholder="Start typing"
                        v-on:placechanged="getAddressData"
                    ></vue-google-autocomplete>
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

                <div class="flex flex-row space-x-4">
                    <div class="w-8/12">
                        <label for="city">City</label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            v-model="store.stop.city"
                        />
                    </div>

                    <div class="w-4/12">
                        <label for="state">State</label>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            v-model="store.stop.state"
                        />
                    </div>
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

        <!-- Pickup Modal -->
        <Modal :show="store.pickupEdit">
            <h2 class="text-xl p-4">Add Pickup</h2>
            <form
                @submit.prevent="
                    store.submit('DataController', 'storePickup', [
                        'pickup',
                        'stop',
                        'route',
                    ]);
                    store.pickupEdit = false;
                "
                class="p-4"
            >
                <div>
                    <label for="first_name">Date</label>
                    <input
                        v-model="store.pickup.date"
                        type="date"
                        name="first_name"
                        id="first_name"
                    />
                </div>

                <div class="flex flex-row justify-end">
                    <button
                        type="button"
                        class="bg-red-600 min-w-[100px]"
                        @click="
                            store.pickupEdit = false;
                            store.stop = {};
                            store.pickup = {};
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

        <!-- Stop Pickup Modal -->
        <Modal :show="store.viewPickup" @close="store.viewPickup = false">
            <div>
                <h2 class="text-xl p-4">{{ store.viewPickup.name }} Pickups</h2>

                <!-- X SVG -->
                <svg
                    @click="
                        store.viewPickup = false;
                        store.deletePickupId = false;
                    "
                    class="absolute top-0 right-0 m-4 cursor-pointer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>

            <!-- ForEach Pickup -->
            <div>
                <div
                    v-for="pickup in store.viewPickup.pickups"
                    class="border-b"
                >
                    <div class="flex flex-row justify-between p-4">
                        <p>
                            <b>Date:</b>
                            {{ formatPickupDate(pickup.date) }}
                        </p>
                        <p>
                            <button @click="store.deletePickupId = pickup.id">
                                Delete
                            </button>
                        </p>
                    </div>

                    <!-- Confirm Delete -->
                    <div
                        class="flex flex-col justify-end p-4 text-center space-y-4"
                        v-if="store.deletePickupId === pickup.id"
                    >
                        <p>Are You Want To Delete This Pickup?</p>
                        <div class="flex text-bold">
                            <button
                                class="flex-1 bg-gray-600 text-white"
                                @click="store.deletePickupId = false"
                            >
                                Cancel
                            </button>
                            <button
                                class="bg-blue-600 text-white flex-1"
                                @click="
                                    store.submit(
                                        'DataController',
                                        'deletePickup',
                                        [
                                            'deletePickupId',
                                            'viewPickup',
                                            'route',
                                        ]
                                    );
                                    store.viewPickup = false;
                                    store.deletePickupId = false;
                                "
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </AppLayout>
</template>
