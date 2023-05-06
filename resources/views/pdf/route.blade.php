<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>


    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    {{-- Tailwind CDN --}}
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">

    {{-- Stop Zoom --}}
    {{-- Avoid Page Breaks--}}
    <style>
        @media print {
            body {
                zoom: 0.75;
                margin: 0;
                padding: 0;
            }

            .stop {
                page-break-inside: avoid;
                /* Never */

            }
        }
    </style>
</head>

<body class="font-sans antialiased">
    <h1 class="text-2xl">
        Route {{ $route->name }}
    </h1>
    {{-- Stops --}}
    <div class="flex flex-col space-y-2">
        @foreach ($stops as $id => $stop)
            <div class="stop flex flex-col space-y-2 p-4 border rounded mb-2 shadow-sm">
                <div class="stop__number">
                    <b>Stop #{{ $id + 1 }}</b>
                </div>
                <div class="stop__name">
                    <b>Name: </b>
                    {{ $stop->name }}
                </div>
                <div class="stop__address">
                    <b>Address: </b>
                    {{ $stop->street }} {{ $stop->street_2 }}, {{ $stop->city }}, {{ $stop->state }} {{ $stop->zip }}
                </div>

                {{-- ForEach Contacts --}}
                <p>
                    <b>Contacts: </b>
                </p>
                @foreach ($stop->contacts as $contact)
                    <div class="contact flex flex-col p-2 text-sm">
                        <div class="contact__name">
                            <b>Name: </b>
                            {{ $contact->first_name }}
                            {{ $contact->last_name }}
                        </div>
                        <div class="contact__phone">
                            <b>Phone: </b>
                            {{-- Anchor --}}
                            <a href="tel:{{ $contact->phone }}">
                                {{ $contact->phone }}
                            </a>
                        </div>
                        <div class="contact__email">
                            <b>Email: </b>
                            {{ $contact->email }}
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    </div>
</body>

</html>
