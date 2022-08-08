<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rezervacija extends Model {
    use HasFactory;

    protected $guarded = [''];

    public function mesto() {
        return $this->belongsTo(Mesto::class);
    }

    public function user_that_reserved() {
        return $this->belongsTo(User::class);
    }

}
