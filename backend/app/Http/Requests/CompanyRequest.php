<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'company_name' => 'required|min:3',
            'document' => 'required',

        ];
    }

    public function messages()
    {
        return [
            'company_name.required' => 'The company name is required',
            'company_name.min' => 'The company name must have at least 3 characters',
        ];
    }
}
