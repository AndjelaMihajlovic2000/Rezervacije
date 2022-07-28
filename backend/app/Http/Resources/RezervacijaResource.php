<?php

namespace App\Http\Resources;

use App\Models\Mesto;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class RezervacijaResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'rezervacija';

    public function toArray($request) {
        return [
            'id' => $this->resource->id,
            'mestoID' => new MestoResource(Mesto::find($this->resource->mestoID)),
            'userID' => new UserResource(User::find($this->resource->userID)),
            'datumIVreme' => $this->resource->datumIVreme,
            'komentar' => $this->resource->komentar,
            'uspesno' => $this->resource->uspesno,
            'created_at' => $this->resource->created_at,
            'updated_at' => $this->resource->updated_at,
        ];
    }
}
