<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyRequest;
use App\Models\Client;
use App\Models\Company;
use App\Models\Point;
use Illuminate\Http\Request;

class CompanyController extends Controller
{

    private $company;


    public function __construct(Company $company, Client $client, Point $point)
    {
        $this->company = $company;
    }

    public function index()
    {
        $companies = $this->company->get();
        if ($companies->isEmpty()) {
            return response()->json(['message' => 'No companies found'], 404);
        }

        return response()->json(['companies' => $companies], 200);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $company = $this->company->create($data);
        return response()->json($company, 200);
    }

    public function update(Request $request, $id)
    {
        $company = $this->company->find($id);
        if (!$company) {
            return response()->json(['message' => 'Company not found'], 404);
        }

        $company->update($request->all());
        return response()->json('success', 200);
    }

    public function destroy($id)
    {
        $company = $this->company->find($id);
        if (!$company) {
            return response()->json(['message' => 'Company not found'], 404);
        }

        $company->clients()->get()->each(function ($client) {
            $client->points()->delete();
        });
        $company->clients()->delete();
        $company->delete();
        return response()->json(['message' => 'Company deleted'], 200);
    }
}
