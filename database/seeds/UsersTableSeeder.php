<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
		// Create 50 product records
        // $filePath = storage_path('images');
		for ($i = 0; $i < 50; $i++) {
			User::create([
                'picture' => $faker->image('public/storage/images',400,300, null, false) ,
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => bcrypt('secret'),
				'is_verified' => 1
            ]);
        }
    }
}
