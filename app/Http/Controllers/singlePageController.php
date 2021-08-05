<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class singlePageController extends Controller
{
    public function index() {
        return view('app');
    }
}
