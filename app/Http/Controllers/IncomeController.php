<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Income;
use Illuminate\Support\Facades\Validator;

class IncomeController extends Controller
{


// GET	/photos	index()	photos.index
// GET	/photos/create	create()	photos.create
// POST	/photos	store()	photos.store
// GET	/photos/{photo}	show()	photos.show
// GET	/photos/{photo}/edit	edit()	photos.edit
// PUT/PATCH	/photos/{photo}	update()	photos.update
// DELETE	/photos/{photo}	destroy()	photos.destroy
    

    
    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id|numeric',
            'budget' => 'required',
            'year' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        else {
            $user = $request->input('user_id');
            $year = $request->input('year');
            $budget = $request->input('budget');

            try {
                Income::create(array(
                    'budget' => $budget,
                    'year' => $year,
                    'user_id' => $user
                ));

                return response()->json([
                    'message' => 'Yearly Income successfully saved.',
                ]);
            }
            catch(\Exception $ex) {
                //return response($ex->getMessage(), 500);
                return response()->json([
                    'message' => $ex->getMessage(),
                    'status' => 500
                ]);
            }
        } 
    }


    public function getInfo($id) {
        
        try {
            // if($year != '') {
            //     $yearly_income = Income::where([
            //         ['user_id', '=',$user_id],
            //         ['year', '=' , $year]
            //     ])->first();
            // }
            // else {
            //     $yearly_income = Income::where([
            //         ['user_id', '=',$user_id]
            //     ])->first();
            // }
            //$yearly_income = Income::where('user_id','=', $request->id)->first();

            //$yearly_income = Income::where('user_id','=',$request->id)->whereYear('year','=', $request->year)->first();

            

            
            // return response()->json([
            //     'user_income' => $user_income
            // ]);
            // if($user_income && count($user_income) > 1) {
            //     // $yearly_income = Income::where([
            //     //     ['user_id', '=',$user_id],
            //     //     ['year', '=' , $year]
            //     // ])->first();
            // }
            // else {
            //     $yearly_income = Income::where([
            //         ['user_id', '=',$user_id]
            //     ])->first();
            // }
            //get user income for all years
            $user_income = Income::where('user_id', '=', $id)->get();
            //get average monthly income
            if($user_income) {
                $count = count($user_income);
                for($i = 0; $i < $count; $i++) {
                    $user_income[$i]['average_monthly_income'] = $this->getMonthlyIncome($user_income[$i]->budget);
                }
                return response()->json([
                    'user_income' => $user_income,
                    // 'message' => 'You have been already inserted income for '.$user_income->year.' year.'
                ]);
            }
            // first() za jedan ispis iz baze
            // get() za vise redova iz baze
        }
        catch(\Exception $ex) {
            return response()->json([
                'message' => $ex->getMessage(),
                'status' => 500
            ]);
        }
    }

    public function getMonthlyIncome($budget) {
        $monthly_income_value = number_format($budget/12, 2, '.', '');
        return floatval($monthly_income_value);
    }
}
