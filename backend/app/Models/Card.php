<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $table = 'card';

    protected $fillable = [
        'company_id',
        'client_id',
    ];

    public function client(){
        return $this->belongsTo(Client::class);
    }

    public function company(){
        return $this->belongsTo(Company::class);
    }

    public function points(){
        return $this->hasMany(Point::class);
    }

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
