<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactForm extends Model
{
    protected $table = 'potential_customers_contact';

    protected $fillable = ['name','email','company','state','zipCode','phone','message'];
}
