<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('mestas', function (Blueprint $table) {
            $table->id();
            $table->string('naziv');
            $table->string('brojStolica');
            $table->string('opis');
            $table->boolean('dostupno')->default(false);
            $table->foreignId('restoranID');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('mesta');
    }
};
