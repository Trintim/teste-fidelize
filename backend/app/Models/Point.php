<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Point extends Model
{
    use HasFactory;

    protected $table = 'point';

    protected $fillable = [
        'card_id',
        'points',
    ];

    public function clients(){
        return $this->belongsToMany(Client::class, 'card', 'company_id', 'client_id')->withPivot('points');
    }

    public function companies(){
        return $this->belongsToMany(Company::class, 'card', 'client_id', 'company_id')->withPivot('points');
    }

    public function card(){
        return $this->belongsTo(Card::class);
    }

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
