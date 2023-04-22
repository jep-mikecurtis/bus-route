<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
// Use Data Middleware
use App\Http\Middleware\DataMiddleware;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if(auth()->user()) {
        return redirect()->route('dashboard');
    }

    // Redirect to register
    return redirect()->route('login');

    // return Inertia::render('Register', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

// Handler For Data
Route::post('/{controller}/{action}', function(Request $request, $controller, $action) {
    $controller = 'App\Http\Controllers\\' . $controller;
    $controller = new $controller;
    return $controller->$action($request);
});

// Handler For Views
Route::get('/{view}', function(Request $request, $view) {
    return Inertia::render($view, $request->all(), [
        'request' => $request->all()
    ]);
});

// Handler For Views With Folder
Route::get('/{folder}/{view}', function(Request $request, $folder, $view) {
    // Capitalize first letter of folder and view
    $folder = ucfirst($folder);
    $view = ucfirst($view);
    return Inertia::render($folder . '/' . $view, [
        'request' => $request->all()
    ]);
});
