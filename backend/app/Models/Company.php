<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $table = 'company';

    protected $fillable = [
        'company_name',
        'document',
    ];

    public function clients(){
        return $this->belongsToMany(Client::class, 'card', 'company_id', 'client_id');
    }

    public function points(){
        return $this->hasMany(Point::class, 'card_id');
    }

    //protected $with = ['clients', 'points'];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

}
