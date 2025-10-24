<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function biodata(Request $request){
        return response()->json([
            "pesan" => "OK",
            "data" => $request->user()->load(['biodata','role','menu'])
        ],200);
    }
}
