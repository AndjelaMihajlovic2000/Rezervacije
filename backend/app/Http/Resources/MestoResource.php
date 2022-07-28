<?php

namespace App\Http\Resources;

use App\Models\Restoran;
use Illuminate\Http\Resources\Json\JsonResource;

class MestoResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'mesto';

    public function toArray($request) {
        return [
            'id' => $this->resource->id,
            'naziv' => $this->resource->naziv,
            'brojStolica' => $this->resource->brojStolica,
            'opis' => $this->resource->opis,
            'dostupno' => $this->resource->dostupno,
            'restoranID' => new RestoranResource(Restoran::find($this->resource->restoranID)),
            'created_at' => $this->resource->created_at,
            'updated_at' => $this->resource->updated_at,
        ];
    }
}
