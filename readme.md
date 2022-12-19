# Testfall

## Testfall 1:  Ingen information ifylld

1. Navigera till http://127.0.0.1:5500/ i webbläsaren
2. Klicka på knappen "Logga in"
3. Nu ska texten "Du måste fylla in användarnamn och lösenord!" synas ovanför inloggningsformuläret

## Testfall 2: Fel information ifylld

1. Navigera till http://127.0.0.1:5500/ i webbläsaren
2. Skriv in "abc" i rutan "Användarnamn"
3. Skriv in "123" i rutan "Lösenord"
4. Klicka på knappen "Logga in"
5. Nu ska texten "Du har angett fel användarnamn eller lösenord!" synas ovanför inlogningsformuläret

## Testfall 3: Rätt information ifylld

1. Navigera till http://127.0.0.1:5500/ i webbläsaren
2. Skriv in "jonatan" i rutan "Användarnamn"
3. Skriv in "hejsan123" i rutan "Lösenord"
4. Klicka på knappen "Logga in"
5. Nu ska texten "Du är inloggad!" synas ovanför inlogningsformuläret

# Cypress

## Komma igång

```sh
npm install cypress
npx cypress open
```

