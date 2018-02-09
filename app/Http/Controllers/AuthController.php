<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;
use DB, Hash, Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Mail\Message;
class AuthController extends Controller
{
    public function users()
    {
		$array['perPage'] 		= 5; 
        $imgUrl					= url('/storage/images');
		$array 					= User::select(array(DB::raw('concat("'.$imgUrl.'/",picture) AS avatar'),'name','email','id'))->paginate($array['perPage']); 
		return $array;
    }
	
    public function user($user)
    {
		$imgUrl					= url('/storage/images');
		$array 					= User::select(array(DB::raw('concat("'.$imgUrl.'/",picture) AS avatar'),'name','email','id','designation','phone','address','postal_code','country','description'))->where('id',$user)->first(); 
		return $array;
    }
	
	public function update(Request $request,$user)
    {
        //dd($request->name);
		$userArray = User::find($user);
		
		$userArray->name = $request->name;
		$userArray->designation = $request->designation;
		$userArray->email = $request->email;
		$userArray->phone = $request->phoneno;
		$userArray->address = $request->address;
		$userArray->postal_code = $request->zip;
		$userArray->country = $request->country;
		$userArray->description = $request->selfDescription;
		
		$userArray->save();
		// $validator = Validator::make($request->all(), [
            // 'title' => 'required|unique:posts|max:255',
            // 'body' => 'required',
        // ]);

        // if ($validator->fails()) {
            // return redirect('post/create')
                        // ->withErrors($validator)
                        // ->withInput();
        // }
		
		// $product->update($request->all());
 
        return response()->json($userArray, 200);
    }
 
	public function store(Request $request)
    {
		$name = $request->name;
		$designation = $request->designation;
		$email = $request->email;
		$phoneno = $request->phoneno;
		$address = $request->address;
		$postal_code = $request->zip;
		$country = $request->country;
		$description = $request->selfDescription;
		$password = str_random(8);
		$user = User::create(['name' => $name, 'email' => $email, 'designation' => $designation, 'password' => Hash::make($password), 'phone' => $phoneno, 'address' => $address, 'postal_code' => $postal_code, 'country' => $country, 'description' => $description]);
		// $validator = Validator::make($request->all(), [
            // 'title' => 'required|unique:posts|max:255',
            // 'body' => 'required',
        // ]);

        // if ($validator->fails()) {
            // return redirect('post/create')
                        // ->withErrors($validator)
                        // ->withInput();
        // }
		
		// $product->update($request->all());
 
        return response()->json($user, 200);
    }
 

	/**
     * API Register
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $rules = [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|confirmed|min:6',
        ];
        $input = $request->only(
            'name',
            'email',
            'password',
            'password_confirmation'
        );
        $validator = Validator::make($input, $rules);
        if($validator->fails()) {
            $error = $validator->messages()->toJson();
            return response()->json(['success'=> false, 'error'=> $error]);
        }
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $user = User::create(['name' => $name, 'email' => $email, 'password' => Hash::make($password)]);
        $verification_code = str_random(30); //Generate verification code
        echo $verification_code;
		DB::table('user_verifications')->insert(['user_id'=>$user->id,'token'=>$verification_code]);
        $subject = "Please verify your email address.";
        Mail::send('email.verify', ['name' => $name, 'verification_code' => $verification_code],
            function($mail) use ($email, $name, $subject){
                $mail->from(getenv('FROM_EMAIL_ADDRESS'), "From User/Company Name Goes Here");
                $mail->to($email, $name);
                $mail->subject($subject);
            });
        return response()->json(['success'=> true, 'message'=> 'Thanks for signing up! Please check your email to complete your registration.']);
    }

	/**
     * API Verify User
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function verifyUser($verification_code)
    {
        $check = DB::table('user_verifications')->where('token',$verification_code)->first();
        if(!is_null($check)){
            $user = User::find($check->user_id);
            if($user->is_verified == 1){
                return response()->json([
                    'success'=> true,
                    'message'=> 'Account already verified..'
                ]);
            }
            $user->update(['is_verified' => 1]);
            DB::table('user_verifications')->where('token',$verification_code)->delete();
            return response()->json([
                'success'=> true,
                'message'=> 'You have successfully verified your email address.'
            ]);
        }
        return response()->json(['success'=> false, 'error'=> "Verification code is invalid."]);
    }
	
	/**
     * API Login, on success return JWT Auth token
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $rules = [
            'email' => 'required|email',
            'password' => 'required',
        ];
        $input = $request->only('email', 'password');
        $validator = Validator::make($input, $rules);
        if($validator->fails()) {
            $error = $validator->messages()->toJson();
            //return response()->json(['success'=> false, 'error'=> $error]);
            return response()->json([],404);
            //return response()->json($product, 201);
        }
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
            'is_verified' => 1
        ];
        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['success' => false, 'error' => 'Invalid Credentials. Please make sure you entered the right information and you have verified your email address.'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['success' => false, 'error' => 'could_not_create_token'], 500);
        }
        // all good so return the token
        return response()->json(['success' => true, 'data'=> [ 'token' => $token ]]);
    }
    /**
     * Log out
     * Invalidate the token, so user cannot use it anymore
     * They have to relogin to get a new token
     *
     * @param Request $request
     */
    public function logout(Request $request) {
        $this->validate($request, ['token' => 'required']);
        try {
            JWTAuth::invalidate($request->input('token'));
            return response()->json(['success' => true]);
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['success' => false, 'error' => 'Failed to logout, please try again.'], 500);
        }
    }
	
	/**
     * API Recover Password
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function recover(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            $error_message = "Your email address was not found.";
            return response()->json(['success' => false, 'error' => ['email'=> $error_message]], 401);
        }
        try {
            Password::sendResetLink($request->only('email'), function (Message $message) {
                $message->subject('Your Password Reset Link');
            });
        } catch (\Exception $e) {
            //Return with error
            $error_message = $e->getMessage();
            return response()->json(['success' => false, 'error' => $error_message], 401);
        }
        return response()->json([
            'success' => true, 'data'=> ['msg'=> 'A reset email has been sent! Please check your email.']
        ]);
    }
	
}
