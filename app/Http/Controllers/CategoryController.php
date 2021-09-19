<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function getAll() {

        try {
            $categories = Category::all();
            if($categories) {
                return response()->json([
                    'categories' => $categories
                ]);
            }
        }
        catch(\Exception $ex) {
            return response()->json([
                'message' => $ex->getMessage(),
                'status' => 500
            ]);
        }
    }
}
