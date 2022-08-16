<?php

namespace App\Http\Controllers;

use App\Mail\FideliziMail;
use App\Models\Client;
use App\Models\Company;
use App\Models\Point;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PointController extends Controller
{
    private $point;
    private $client;
    private $company;

    public function __construct(Point $point, Client $client, Company $company)
    {
        $this->point = $point;
        $this->client = $client;
        $this->company = $company;
    }

    public function store($id, $clientId, Request $request){
        $company = $this->company->find($id);
        if (!$company) {
            return response()->json(['message' => 'Company not found'], 404);
        }

        $client = $company->clients()->find($clientId);
        if (!$client) {
            return response()->json(['message' => 'Client not found'], 404);
        }

        $client->points()->create($request->all());

        Mail::to($client->email)->send(new FideliziMail($client->points()->latest()->first()));

        return response()->json('success', 200);
    }
}
