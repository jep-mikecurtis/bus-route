<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Route extends Model
{
    use HasFactory;

    // Table nc_x1h0___Route
    protected $table = 'nc_x1h0___Route';

    // Stops
    public function stops() {
        return $this->hasMany(Stop::class, 'nc_x1h0___Route_id', 'id')->orderBy('order', 'asc');
    }
}
