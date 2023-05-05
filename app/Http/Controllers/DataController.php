<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Route;
use App\Models\Stop;
use App\Models\Contact;
use App\Models\Pickup;

class DataController extends Controller
{
    public function getRoutes() {
        $routes = Route::all();
        return [
            'routes' => $routes
        ];
    }

    public function getRoute(Request $request) {
        $route = Route::find($request->id);
        return [
            'route' => $route,
            'stops' => $route->stops
        ];
    }

    public function storeRoute(Request $request) {
        $user = auth()->user();
        $routeData = $request->route;
        $updated = false;

        if(isset($routeData['id'])) {
            $route = Route::find($routeData['id']);
            $updated = true;
        } else {
            $route = new Route;
        }

        $route->name = $routeData['name'];
        $route->team_id = $user->current_team_id;
        $route->save();

        return [
            'route' => $route,
            'redirect' => $updated ? '' : '/route/view?id=' . $route->id
        ];
    }

    public function storeStop(Request $request)
    {
        $route = $request->route;
        $stopData = $request->stop;

        if(isset($stopData['id'])) {
            $stop = Stop::find($stopData['id']);
        } else {
            $stop = new Stop;
        }

        $stop->name = $stopData['name'] ?? '';
        $stop->order = $stopData['order'];
        $stop->street = $stopData['street'];
        $stop->street_2 = $stopData['street_2'] ?? '';
        $stop->city = $stopData['city'];
        $stop->state = $stopData['state'];
        $stop->zip = $stopData['zip'] ?? '';
        $stop->nc_x1h0___Route_id = $route['id'];
        $stop->save();

        $route = Route::find($route['id']);
        $stops = $route->stops;

        return [
            'stops' => $stops
        ];
    }

    public function deleteStop(Request $request)
    {
        $stop = Stop::find($request->stop['id']);

        $stop->contacts()->delete();

        $stop->delete();

        $route = Route::find($request->stop['nc_x1h0___Route_id']);
        $stops = $route->stops;

        return [
            'stops' => $stops
        ];
    }

    public function storeContact(Request $request)
    {
        $stop = $request->stop;
        $contactData = $request->contact;
        $route = $request->route;

        if(isset($contactData['id'])) {
            $contact = Contact::find($contactData['id']);
        } else {
            $contact = new Contact;
        }

        $contact->first_name = $contactData['first_name'];
        $contact->last_name = $contactData['last_name'] ?? '';
        $contact->phone = $contactData['phone'] ?? '';
        $contact->email = $contactData['email'] ?? '';
        $contact->nc_x1h0___Stop_id = $stop['id'];
        $contact->save();

        $route = Route::find($route['id']);
        $stops = $route->stops;

        return [
            'stops' => $stops
        ];
    }

    public function storePickup(Request $request)
    {
        $pickupData = $request->pickup;
        $stopData = $request->stop;
        $route = $request->route;

        // Check If Date Exists
        $pickup = Pickup::where('date', $pickupData['date'])->first();

        if(!$pickup) {
            $pickup = new Pickup;
            $pickup->date = $pickupData['date'];
            $pickup->save();
        }

        // Check If Stop Is Already Attached To Pickup
        $stop = $pickup->stops()->where('table2_id', $stopData['id'])->first();

        if(!$stop) {
            $pickup->stops()->attach($stopData['id']);
        }

        $route = Route::find($route['id']);
        $stops = $route->stops;

        return [
            'stops' => $stops
        ];
    }

    public function deletePickup(Request $request)
    {
        $pickup = Pickup::find($request->deletePickupId);

        if(!$pickup) {
            return [
                'error' => 'Pickup Not Found'
            ];
        }

        $pickup->stops()->detach($request->viewPickup['id']);
        $route = Route::find($request->route['id']);
        $stops = $route->stops;

        return [
            'stops' => $stops
        ];
    }
}
