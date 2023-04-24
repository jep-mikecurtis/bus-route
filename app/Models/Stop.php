<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stop extends Model
{
    use HasFactory;

    // Table nc_x1h0___Stop
    protected $table = 'nc_x1h0___Stop';

    // With
    protected $with = ['contacts', 'pickups'];

    public function route() {
        return $this->belongsTo(Route::class);
    }

    public function contacts() {
        // Order By Most Recent
        return $this->hasMany(Contact::class, 'nc_x1h0___Stop_id', 'id')->orderBy('created_at', 'desc');
    }

    // Many To Many Pickups
    public function pickups()
    {
        return $this->belongsToMany(Pickup::class, 'nc_x1h0___nc_m2m_nyhygcgdu2', 'table2_id', 'table1_id');
    }
}
