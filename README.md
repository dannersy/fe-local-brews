# Local Brews

Local Brews is an application with the US traveler and beer lover in mind. Microbreweries are increasingly popular and this app will allow you to input a location to find local breweries.

Users can enter a city, address or zipcode which will autocomplete using Google Places. The map will go to the entered location and list any local breweries. Breweries are listed shortest to longest distance away from selected location, within the selected radius.

A user can select a brewery via the list or marker on the map and choose to see more information on a selected brewery. This info card will show the address and contact info of the brewery and if any beers are available in the BreweryDB database.


### Technology Frontend:
- `react`
- `react-bootstrap`
- `google-maps-react` - Render custom components ontop of Google Maps
- `react-geosuggest` - Uses Google Places API to auto-correct search input

### Technology Backend:
- Node/Express
- [BreweryDB API](http://www.brewerydb.com/)

#### Features To Come:
- User authentication to add brews to a "to try" list.
- Link with directions from current geolocation to brewery.
- Uber link for promoting safe travels.
- Achievements based on beers tasted and locations visited.
