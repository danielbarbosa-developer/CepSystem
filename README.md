# CepSystem

A single-page application that provides user with zip code data from the brazilian territory.

## How does it work?

The SPA uses axios to make requests as an HTTP client. 
It consumes a service provided by the API of the website: https://viacep.com.br/

## The User Interface

The user can input the zip code he wants to search in the search box, when clicking on the button "Pesquisar" the search result is showed below.
The informations about the zip code availables are:

1. Logradouro (Public area)
2. Bairro (Neighborhood)
3. Localidade (City)
4. Unidade Federativa (Federative State)
5. DDD (Area code)