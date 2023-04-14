<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stop extends Model
{
    use HasFactory;

    // Table nc_x1h0___Stop
    protected $table = 'nc_x1h0___Stop';

    public function route() {
        return $this->belongsTo(Route::class);
    }
}
