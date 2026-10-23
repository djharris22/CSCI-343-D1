class VacationLocation {
  constructor(
    id,
    countryId,
    name,
    location,
    imageUrl,
    averageCost,
    foundedYear,
    rating
  ) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.location = location;
    this.imageUrl = imageUrl;
    this.averageCost = averageCost;
    this.foundedYear = foundedYear;
    this.rating = rating;
  }
}

export default VacationLocation;