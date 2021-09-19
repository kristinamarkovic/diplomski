<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\MonthlyExpenses;

class ExpenseController extends Controller
{
// GET	/photos	index()	photos.index
// GET	/photos/create	create()	photos.create
// POST	/photos	store()	photos.store
// GET	/photos/{photo}	show()	photos.show
// GET	/photos/{photo}/edit	edit()	photos.edit
// PUT/PATCH	/photos/{photo}	update()	photos.update
// DELETE	/photos/{photo}	destroy()	photos.destroy

    public function store(Request $request) {

        // $validator = Validator::make($request->all(), [[
        //     'user_id' => 'required|exists:users,id|numeric',
        //     'category_id' => 'required|exists:categories,id|numeric',
        //     'expense' => 'required',
        //     'year' => 'required'
        // ]]);

        // if ($validator->fails()) {
        //     return response()->json($validator->errors(), 422);
        // }
            // $user = $request->input('user_id');
            // $category = $request->input('category_id');
            // $year = $request->input('year');
            // $expense = $request->input('expense');

            try {
                MonthlyExpenses::insert($request->all());
                $expenses = MonthlyExpenses::all();
                

                //OVDE SAMO INSERT

                //SELECT user_id, year, SUM(expense) as total FROM `monthly_expenses` WHERE user_id = 1 && year = 2021

                //KADA BUDE U VUEX POZVAO SVE ZA USERA OVE INFO AVERAGE I TO ONDA TREBA I DA DOHVATI TOTAL EXPENSES I OVO EXPENSES I DA ISPISE
                if($expenses) {
                    return response()->json([
                        'message' => 'Monthly expenses successfully saved.',
                        'monthly_expenses' => $expenses
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
