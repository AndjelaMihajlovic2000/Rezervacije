<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rezervacijas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mestoID')->references('id')->on('mestos')->onDelete('restrict');
            $table->foreignId('userID')->references('id')->on('users')->onDelete('restrict');
            $table->dateTime('datumIVreme');
            $table->string('komentar');
            $table->boolean('uspesno')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rezervacijas');
    }
};
