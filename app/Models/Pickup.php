<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pickup extends Model
{
    use HasFactory;

    // Table Name
    protected $table = 'nc_x1h0___Pickups';


    // Many To Many Stops
    public function stops()
    {
        return $this->belongsToMany(Stop::class, 'nc_x1h0___nc_m2m_nyhygcgdu2', 'table1_id', 'table2_id');
    }
}
