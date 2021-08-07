<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    private $categories = ['Home Expenses', 'Daily Living', 'Transportation', 'Health', 'Shopping', 'Charity/Gifts' ];
    public function run()
    {
        foreach($this->categories as $category) {
            \DB::table('categories')->insert([
                'name' => $category
            ]);
        }
    }
}
