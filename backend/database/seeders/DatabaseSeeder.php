<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {

        UserRole::factory()->create([
            'role_name' => 'Admin',
            'slug' => 'admin',
            'can_manage' => true
        ]);

        UserRole::factory()->create([
            'role_name' => 'Zaposleni',
            'slug' => 'zaposleni',
            'can_manage' => true
        ]);
        UserRole::factory()->create([
            'role_name' => 'Gost',
            'slug' => 'gost',
            'can_manage' => false
        ]);

        User::factory()->create([
            'username' => 'admin',
            'password' => Hash::make('admin'),
            'ime' => 'admin',
            'prezime' => 'admin',
            'datumRodjenja' => '2000-01-01',
            'adresa' => 'Adresa 1',
            'userRole' => 1,
        ]);
    }
}
