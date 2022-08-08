<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mesto extends Model {
    use HasFactory;

    protected $guarded = [''];

    public function user_that_created() {
        return $this->belongsTo(User::class);
    }

    public function rezervacija() {
        return $this->hasMany(Rezervacija::class);
    }
}
