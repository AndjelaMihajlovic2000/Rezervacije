<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable {
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'ime',
        'prezime',
        'password',
        'datumRodjenja',
        'adresa',
        'userRole'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function restorani() {
        return $this->hasMany(Restoran::class);
    }

    public function mesta() {
        return $this->hasMany(Mesto::class);
    }

    public function rezervacije() {
        return $this->hasMany(Rezervacija::class);
    }

    public function uloga() {
        return $this->hasOne(UserRole::class);
    }

}
