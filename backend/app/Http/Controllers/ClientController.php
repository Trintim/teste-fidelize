<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Company;
use App\Models\Point;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    private $client;
    private $company;


    public function __construct(Client $client, Company $company)
    {
        $this->client = $client;

        $this->company = $company;
    }

    public function index($id){
        $company = $this->company->find($id);
        if (!$company) {
            return response()->json(['message' => 'Company not found'], 404);
        }
        $clients = $company->clients;
        if ($clients->isEmpty()) {
            return response()->json(['message' => 'Company has no clients'], 404);
        }else{
            return response()->json($clients, 200);
        }
    }

    public function store(Request $request, $id)
    {
        $company = $this->company->find($id);
        if (!$company) {
            return response()->json(['message' => 'Company not found'], 404);
        }

        $client = $this->client->create($request->all());

        $company->clients()->attach($client->id);

        return response()->json('success', 200);
    }

    public function update(Request $request, $id, $clientID)
    {
        $company = $this->company->find($id);
        if (!$company) {
            return response()->json(['message' => 'Company not found'], 404);
        }
        $client = $this->client->find($clientID);
        if (!$client) {
            return response()->json(['message' => 'Client not found'], 404);
        }
        $client->update($request->all());
        return response()->json($client, 200);
    }

    public function destroy($id, $clientID)
    {
        $company = $this->company->find($id);
        if (!$company) {
            return response()->json(['message' => 'Company not found'], 404);
        }
        $client = $this->client->find($clientID);
        if (!$client) {
            return response()->json(['message' => 'Client not found'], 404);
        }
        //$company->clients()->detach($client->id);
        $client->points()->delete();
        $client->delete();
        return response()->json(['message' => 'Client deleted'], 200);
    }

}
