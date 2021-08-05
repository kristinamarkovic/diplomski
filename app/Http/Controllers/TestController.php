<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestController extends Controller
{
    //

    public function __construct() {
        //$this->middleware('auth:api', ['except' => ['login', 'register']]);
        $this->middleware('api', ['except' => ['register']]);
    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => ['required']
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        try {
            $user = User::create(array_merge(
                $validator->validated(),
                ['password' => bcrypt($request->password)]
            ));
        }
        catch(\PDOException $ex) {
            return response()->json($ex->getMessage(), 421);
        }

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }
}
