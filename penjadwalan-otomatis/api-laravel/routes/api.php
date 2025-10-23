<?php

use Illuminate\Support\Facades\Route;

Route::get('/hello', fn() => response()->json(['message' => 'API Ready']));

