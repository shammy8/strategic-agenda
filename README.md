# StrategicAgenda

The live version of the app is hosted on Firebase and can be found [here.](https://translation-projex-bbbb7.web.app/characters)

## Repo

This project was generated using [Nx](https://nx.dev/angular). The main Angular app is inside `apps/translation-projex`. But most of the code is lazily loaded from the feature-characters library under `libs/feature-characters`.

Clone the repository to your local PC and run `npm install`. Then run `nx serve` and navigate to http://localhost:4200/ for the dev server.

I mainly used the [PrimeNG](https://www.primefaces.org/primeng/) table component and have implemented feature such as:

- Reorderable columns
- Columns selection
- Row multi select
- Global filtering
- Sorting
- Pagination
- CSV export

As specified, I have also implemented simple CRUD functionality.

Furthermore, I used a package called [Transloco](https://ngneat.github.io/transloco/) to allow users to change languages in runtime. Unfortunately, I did not have enough time to fully complete it.

Finally, I wrote some simple [Cypress](https://www.cypress.io/) e2e tests which can be found under `apps/translation-projex-e2e`. To run the tests simply run `nx e2e --watch`.
