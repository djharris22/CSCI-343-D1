class Workout {
  constructor(id, title, category, targetMuscle, sets, reps, imageUrl, videoUrl, description) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.targetMuscle = targetMuscle;
    this.sets = sets;
    this.reps = reps;
    this.imageUrl = imageUrl;
    this.videoUrl = videoUrl;
    this.description = description;
  }
}

export default Workout;