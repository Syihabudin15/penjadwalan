<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function lihat(Request $request)
    {
        $query = Role::query();
        if ($request->has('nama')) {
            $query->where('nama', 'like', '%'.$request->nama.'%');
        }

        // ✅ Urutan data (sorting)
        if ($request->has('sort_by') && $request->has('sort_dir')) {
            $query->orderBy($request->sort_by, $request->sort_dir);
        } else {
            $query->latest(); // default: urut dari yang terbaru
        }

        // ✅ Pagination (misal 10 per halaman)
        $perPage = $request->get('per_page', 10);
        $data = $query->paginate($perPage);

        // ✅ Response JSON
        return response()->json([
            'status' => 'success',
            'data' => $data
        ],200);
    }

    public function tambah(Request $request){
        $validated = $request->validate([
            'nama' => 'required|string|max:100',
            'menu' => 'required|array|min:1',
            'menu.*.nama' => 'required|string|max:100',
            'menu.*.path' => 'required|string|max:100',
            'menu.*.akses' => 'required|string|max:100'
        ]);
        $role = Role::create([
            'nama' => $validated['nama'],
            'status' => "AKTIF"
        ]);
        foreach ($validated['menu'] as $item) {
            $role->menu()->create([
                'nama' => $item['nama'],
                'path' => $item['path'],
                'akses' => $item['akses']
            ]);
        }

        return response()->json([
            'pesan' => 'Role berhasil dibuat',
            'data' => $role->load('menu')
        ], 200);
    }
}
