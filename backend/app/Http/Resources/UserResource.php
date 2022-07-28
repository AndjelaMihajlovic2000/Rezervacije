<?php

namespace App\Http\Resources;

use App\Models\UserRole;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'user';

    public function toArray($request) {
        return [
            'id' => $this->resource->id,
            'username' => $this->resource->username,
            'ime' => $this->resource->ime,
            'prezime' => $this->resource->prezime,
            'datumRodjenja' => $this->resource->datumRodjenja,
            'adresa' => $this->resource->adresa,
            'userRole' => new UserRoleResource(UserRole::find($this->resource->userRole)),
            'created_at' => $this->resource->created_at,
            'updated_at' => $this->resource->updated_at
        ];
    }
}
