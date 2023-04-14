<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Route;
use App\Models\Stop;

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

        $stop->order = $stopData['order'];
        $stop->street = $stopData['street'];
        $stop->street_2 = $stopData['street_2'];
        $stop->city = $stopData['city'];
        $stop->state = $stopData['state'];
        $stop->zip = $stopData['zip'];
        $stop->nc_x1h0___Route_id = $route['id'];
        $stop->save();

        $route = Route::find($route['id']);
        $stops = $route->stops;

        return [
            'stops' => $stops
        ];
    }
}
