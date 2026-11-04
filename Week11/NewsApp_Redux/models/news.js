class News {
  constructor(id, headline, date, author, agency, description, imageUrl, type, fullArticle) {
    this.id = id;
    this.headline = headline;
    this.date = date;
    this.author = author;
    this.agency = agency;
    this.description = description;
    this.imageUrl = imageUrl;
    this.type = type;
    this.fullArticle = fullArticle;
  }
}

export default News;