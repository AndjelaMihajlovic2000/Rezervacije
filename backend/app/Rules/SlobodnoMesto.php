<?php

namespace App\Rules;

use App\Models\Mesto;
use Illuminate\Contracts\Validation\Rule;

class SlobodnoMesto implements Rule {
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct() {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value) {
        $mesto = Mesto::find($value);
        return $mesto->dostupno;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message() {
        return 'Mesto je zauzeto!';
    }
}
