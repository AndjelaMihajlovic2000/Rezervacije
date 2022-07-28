<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class RestoranResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'restoran';

    public function toArray($request) {
        return [
            'id' => $this->resource->id,
            'naziv' => $this->resource->naziv,
            'adresa' => $this->resource->adresa,
            'radnoVreme' => $this->resource->radnoVreme,
            'telefon' => $this->resource->telefon,
            'email' => $this->resource->email,
            'brojZvezdica' => $this->resource->brojZvezdica,
            'opis' => $this->resource->opis,
            'userID' => new UserResource(User::find($this->resource->userID)),
            'created_at' => $this->resource->created_at,
            'updated_at' => $this->resource->updated_at,
        ];
    }
}
