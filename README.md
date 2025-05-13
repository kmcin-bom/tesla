https://km1729.github.io/tesla/


# dev
install node & npx
```bash
npm install react-leaflet leaflet
git clone git@github.com:km1729/tesla.git
cd tesla
```

# Run
`npm start`

# Build
`npm run build`


> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.


> [!TIP]
> **ecCodes GRIB keys vs. xarray fields:**
> 
> | ecCodes Key    | xarray Attribute or Field        |
> |----------------|----------------------------------|
> | shortName      | ds.data_vars['t2m'], etc.        |
> | dataDate       | ds.time.values                   |
> | centre         | ds.attrs['GRIB_centre']          |
