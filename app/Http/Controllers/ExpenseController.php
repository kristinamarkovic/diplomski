<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\MonthlyExpenses;
use App\Models\TotalExpense;

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
            try {

                $user = array_values($request[0])[3];
                $year = array_values($request[0])[1];

                //Insert Monthly Expenses
                MonthlyExpenses::insert($request->all());
                
                
                $expenses = MonthlyExpenses::where([
                    ['user_id', '=', $user],
                    ['year', '=', $year],
                ])->get();
                
                if($expenses) {
                    $count = count($expenses);
                    $sum = 0;
                        for($i = 0; $i < $count; $i++) {
                        $sum += $expenses[$i]->expense;
                    }
                    
                    
                    $total_monthly_sum = floatval($sum);
                    $total_yearly_sum = floatval($sum*12);
                    
                    //Insert Total Expenses
                    TotalExpense::create(array(
                        'monthly' => $total_monthly_sum,
                        'yearly' => $total_yearly_sum,
                        'year' => $year,
                        'user_id' => $user
                    ));

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
