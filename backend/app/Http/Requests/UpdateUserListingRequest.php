<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserListingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'username' => ['sometimes', 'required', 'string', 'max:255'],
            'location' => ['sometimes', 'required', 'string', 'max:255'],
            'make' => ['sometimes', 'required', 'string', 'max:255'],
            'model' => ['sometimes', 'required', 'string', 'max:255'],
            'engine' => ['sometimes', 'required', 'integer'],
            'transmission' => ['sometimes', 'required', 'string', 'max:255'],
            'image_url' => ['sometimes', 'required', 'string', 'max:255'],
            'day_rate' => ['sometimes', 'required', 'numeric'],
        ];
    }
}
