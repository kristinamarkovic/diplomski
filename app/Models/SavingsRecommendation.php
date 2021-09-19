<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SavingsRecommendation extends Model
{
    protected $fillable = [
        'id',
        'percent',
        'monthly',
        'yearly',
        'year',
        'user_id'
    ];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    

    use HasFactory;
}
