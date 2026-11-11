import Workout from "../models/workout";

export const WORKOUTS = [
  // Chest Workouts
  new Workout(
    1,
    "Barbell Bench Press",
    "Chest",
    "Pectoralis Major, Triceps",
    4,
    "8 - 12",
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    "https://www.youtube.com/watch?v=rT7DgCr-3pg",
    "Lie flat on the bench, grip the barbell slightly wider than shoulder-width apart, lower it smoothly to mid-chest, and press explosively to starting position while engaging your core."
  ),
  new Workout(
    2,
    "Incline Dumbbell Press",
    "Chest",
    "Upper Pectoralis, Anterior Deltoids",
    3,
    "10 - 12",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    "https://www.youtube.com/watch?v=8iPEnn-ltC8",
    "Set the incline bench to 30 degrees. Lower dumbbells smoothly to upper chest level and press vertically upward while keeping elbows angled around 45 degrees."
  ),
  new Workout(
    3,
    "Chest Dips",
    "Chest",
    "Lower Pectoralis, Triceps",
    3,
    "8 - 12",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    "https://www.youtube.com/watch?v=2z8JmcrW-As",
    "Mount the parallel bars, lean your torso slightly forward to shift emphasis to the chest, lower yourself until elbows reach a 90-degree angle, and press back up."
  ),
  new Workout(
    4,
    "Cable Crossovers",
    "Chest",
    "Pectoralis Major (Inner/Mid)",
    3,
    "12 - 15",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    "https://www.youtube.com/watch?v=taI4XduLlvY",
    "Set pulleys to high position, grab handles, step forward with a slight forward lean, and bring hands together in a hugging motion with a slight bend in your elbows."
  ),
  new Workout(
    5,
    "Flat Bench Dumbbell Flyes",
    "Chest",
    "Pectoralis Major (Stretch)",
    3,
    "10 - 15",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    "https://www.youtube.com/watch?v=eozdVDA78K0",
    "Lie on a flat bench holding dumbbells above your chest with a slight bend in your elbows. Open arms in a wide arc until you feel a chest stretch, then squeeze back up."
  ),

  // Back Workouts
  new Workout(
    6,
    "Conventional Barbell Deadlift",
    "Back",
    "Latissimus Dorsi, Erector Spinae, Hamstrings",
    4,
    "5 - 8",
    "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f",
    "https://www.youtube.com/watch?v=op9kVnSso6Q",
    "Stand with feet shoulder-width apart, hinge at the hips to grip the bar, keep your chest high and back flat, and push through the floor to lock out at the hips."
  ),
  new Workout(
    7,
    "Wide-Grip Lat Pulldown",
    "Back",
    "Latissimus Dorsi, Rhomboids",
    3,
    "10 - 15",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    "https://www.youtube.com/watch?v=CAwf7n6Luuc",
    "Grip the cable bar wider than shoulder-width, sit upright, lean back slightly, and pull the bar smoothly down to your upper chest while squeezing your shoulder blades together."
  ),
  new Workout(
    8,
    "Bent-Over Barbell Row",
    "Back",
    "Middle Back, Lats, Rear Deltoids",
    4,
    "8 - 10",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5",
    "https://www.youtube.com/watch?v=vT2GjY_Umpw",
    "Hinge forward at the hips with a flat back, grip the barbell, and pull it toward your lower ribcage by driving your elbows backward."
  ),
  new Workout(
    9,
    "Seated Cable Row",
    "Back",
    "Mid-Back, Rhomboids, Lats",
    3,
    "10 - 12",
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    "https://www.youtube.com/watch?v=GZbfZ033f74",
    "Sit on the cable row machine with feet braced, keep a slight bend in knees, pull handle toward your abdomen while keeping your chest proud and spine neutral."
  ),
  new Workout(
    10,
    "Pull-Ups",
    "Back",
    "Latissimus Dorsi, Biceps",
    3,
    "6 - 10",
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5",
    "https://www.youtube.com/watch?v=eGo4IYlbE5g",
    "Grab pull-up bar with an overhand grip wider than shoulders, pull yourself up until your chin clears the bar, and lower yourself under full control."
  ),

  // Leg Workouts
  new Workout(
    11,
    "Barbell Back Squat",
    "Legs",
    "Quadriceps, Glutes, Hamstrings",
    4,
    "6 - 10",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    "https://www.youtube.com/watch?v=ultWZbUMPL8",
    "Position the bar across your upper back, keep feet shoulder-width apart, descend until thighs are parallel to the floor, and drive up through your heel and mid-foot."
  ),
  new Workout(
    12,
    "Romanian Dumbbell Deadlift",
    "Legs",
    "Hamstrings, Gluteus Maximus",
    3,
    "10 - 12",
    "https://images.unsplash.com/photo-1434682881908-b43d0467b798",
    "https://www.youtube.com/watch?v=JCXUYuzwNrM",
    "Hold dumbbells in front of thighs, hinge back at hips with a soft bend in knees, lower weights down the shins until hamstrings stretch, then return upward."
  ),
  new Workout(
    13,
    "Leg Press",
    "Legs",
    "Quadriceps, Glutes",
    3,
    "10 - 15",
    "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
    "https://www.youtube.com/watch?v=IZxyjW7MPJQ",
    "Sit on the machine with feet shoulder-width on the sled platform. Lower the safety bars, lower the weight until knees form a 90-degree angle, and press back up."
  ),
  new Workout(
    14,
    "Walking Lunges",
    "Legs",
    "Quads, Glutes, Core Stability",
    3,
    "12 - 16",
    "https://images.unsplash.com/photo-1434682881908-b43d0467b798",
    "https://www.youtube.com/watch?v=D7KaRcUTQeE",
    "Step forward with one leg, lowering your hips until both knees are bent at a 90-degree angle, then push off the front foot to step directly into the next lunge."
  ),
  new Workout(
    15,
    "Seated Calf Raise",
    "Legs",
    "Soleus, Gastrocnemius",
    4,
    "15 - 20",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    "https://www.youtube.com/watch?v=JbyjNymZOt0",
    "Sit at the calf raise machine with the balls of your feet on the edge of the platform and pads resting on your lower thighs. Lower heels for a deep stretch, then press up onto your toes."
  ),

  // Arm Workouts
  new Workout(
    16,
    "Standing Barbell Bicep Curl",
    "Arms",
    "Biceps Brachii",
    3,
    "12 - 15",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    "https://www.youtube.com/watch?v=kwG2ipFRgfo",
    "Stand upright holding a barbell with an underhand grip, contract biceps to lift the bar toward chest height without swinging torso, and lower under control."
  ),
  new Workout(
    17,
    "Tricep Rope Cable Pushdown",
    "Arms",
    "Triceps Brachii",
    3,
    "12 - 15",
    "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
    "https://www.youtube.com/watch?v=vB5OHsJ3EME",
    "Attach a rope to a high pulley. Lock elbows at your sides, extend arms downward, and flare the ends of the rope outward at the bottom of the movement."
  ),
  new Workout(
    18,
    "Incline Dumbbell Hammer Curl",
    "Arms",
    "Brachialis, Biceps, Forearms",
    3,
    "10 - 12",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    "https://www.youtube.com/watch?v=7Xf5kZz7rXo",
    "Sit on an incline bench holding dumbbells with a neutral grip (palms facing each other). Curl the weights upward while keeping elbows locked in place."
  ),
  new Workout(
    19,
    "Overhead Dumbbell Tricep Extension",
    "Arms",
    "Triceps (Long Head)",
    3,
    "10 - 12",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    "https://www.youtube.com/watch?v=_gsUck-7M74",
    "Hold a single dumbbell with both hands overhead. Lower it behind your head by bending your elbows, then press back up until arms are fully extended."
  ),
  new Workout(
    20,
    "Barbell Preacher Curl",
    "Arms",
    "Biceps Brachii (Peak)",
    3,
    "10 - 12",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    "https://www.youtube.com/watch?v=fIWP-FRFNU0",
    "Rest your upper arms against a preacher bench pad holding an EZ-curl bar. Curl the bar upward toward your chin, then lower with a slow eccentric movement."
  ),
];