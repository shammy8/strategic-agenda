# StrategicAgenda

This project was generated using [Nx](https://nx.dev), visit the [Nx Documentation](https://nx.dev/angular) to learn more.

The live version is hosted on Firebase and can be found [here.](https://translation-projex-bbbb7.web.app/characters)

The main Angular app is inside `apps/translation-projex`. But most of the code is lazily loaded from the feature-characters library under `libs/feature-characters`.

Clone repository to your local PC and run `npm install`. Then run `nx serve` and navigate to http://localhost:4200/ for a dev server.

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

Finally, I wrote some simple Cypress e2e tests which can be found under `apps/translation-projex-e2e`. To run the tests simply run `nx e2e --watch`.
