<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $table = 'client';

    protected $fillable = [
        'fullname',
        'email',
        'cellphone'
    ];

    public function companies(){
        return $this->belongsToMany(Company::class, 'card', 'client_id', 'company_id');
    }

    public function points(){
        return $this->hasMany(Point::class, 'card_id');
    }

    protected $with = ['points', 'companies'];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
