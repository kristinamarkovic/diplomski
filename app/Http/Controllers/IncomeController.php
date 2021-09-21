<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Income;
use App\Models\MonthlyExpenses;
use App\Models\TotalExpense;
use App\Models\SavingsRecommendation;

use Illuminate\Support\Facades\Validator;

class IncomeController extends Controller
{

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
                return response()->json([
                    'message' => $ex->getMessage(),
                    'status' => 500
                ]);
            }
        } 
    }


    public function getInfo($id) {
        // dd($_GET['year']);
        $year = $_GET["year"] ?? date('Y');

        // if ($request->missing('year')) {
        //     $year = date("Y");
        // }
        // else {
        //     $year = $_GET['year'];
        // }
        try {
            
            // $user_income = Income::where('user_id', '=', $id)->get();

            $user_income = Income::where([
                ['user_id', '=', $id],
                ['year', '=', $year]
            ])->first();

            $monthly_expenses = MonthlyExpenses::where([
                ['user_id', '=', $id],
                ['year', '=', $year]
            ])->first();

            $total_expenses = TotalExpense::where([
                ['user_id', '=', $id],
                ['year', '=', $year]
            ])->first();

            $savings_percent = SavingsRecommendation::where([
                ['user_id', '=', $id],
                ['year', '=', $year]
            ])->first();

        
            if($user_income) {
                // $count = count($user_income);
                // for($i = 0; $i < $count; $i++) {
                //     $user_income[$i]['average_monthly_income'] = $this->getMonthlyIncome($user_income[$i]->budget);
                //     $user_income[$i]['monthly_expenses'] = $monthly_expenses;
                //     $user_income[$i]['total_expenses'] = $total_expenses;
                //     $user_income[$i]['savings_percent'] = $savings_percent;
                // }



                $user_income['average_monthly_income'] = $this->getMonthlyIncome($user_income->budget);
                $user_income['monthly_expenses'] = $monthly_expenses;
                $user_income['total_expenses'] = $total_expenses;
                $user_income['savings_percent'] = $savings_percent;
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
    //get average monthly income by bydget
    public function getMonthlyIncome($budget) {
        $monthly_income_value = number_format($budget/12, 2, '.', '');
        return floatval($monthly_income_value);
    }
}
