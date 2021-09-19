<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SavingsRecommendation;
use Illuminate\Support\Facades\Validator;

class SavingsController extends Controller
{
    //

    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id|numeric',
            'monthly' => 'required',
            'yearly' => 'required',
            'percent' => 'required',
            'year' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
            $percent = $request->input('percent');
            $monthly = $request->input('monthly');
            $yearly = $request->input('yearly');
            $year = $request->input('year');
            $user = $request->input('user_id');

            try {
                
                SavingsRecommendation::create(array(
                    'percent' => $percent,
                    'monthly' => $monthly,
                    'yearly' => $yearly,
                    'year' => $year,
                    'user_id' => $user
                ));

                return response()->json([
                    'message' => 'Savings Recommendation successfully saved.'
                ]);
            }
            catch(\Exception $ex) {
                return response()->json([
                    'message' => $ex->getMessage(),
                    'status' => 500
                ]);
            }
        }
}
