<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DataMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Get All Models
        $allRequest = $request->all();
        $data = [];

        // For Each Model
        foreach ($allRequest as $model => $value) {
            // Get Model
            // Capitalize First Letter
            $modelSearch = ucfirst($model);
            $modelSearch = 'App\Models\\' . $modelSearch;

            // Check If Model Exists
            if (class_exists($modelSearch)) {
                // Find Model
                $find = $modelSearch::find($value);

                // Check If Model Exists
                if ($find) {
                    // Lowercase First Letter
                    $model = lcfirst($model);
                    // Add Model To Data
                    $data[$model] = $find;
                }
            }
        }

        // Add Data To Request
        $request->merge($data);
        return $next($request);
    }
}
