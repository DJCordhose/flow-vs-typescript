package sandbox;

import java.util.ArrayList;
import java.util.List;

class Animal {
    public String name;

    public Animal(String name) {
        this.name = name;
    }
}
class Cat extends Animal {

    public Cat(String name) {
        super(name);
    }
}
class Dog extends Animal {

    public Dog(String name) {
        super(name);
    }
}

public class Sandbox {
//    public static void logAnimals(List<Animal> animals) {
    public static void logAnimals(List<? extends Animal> animals) {
        animals.forEach(animal -> System.out.println("Animal: " + animal.name));
        // illegal:
//        animals.add(new Animal("Twinky"));
    }

    public static void main(String argv[]) {
        List<Animal> animals = new ArrayList<>();;
        animals.add(new Animal("Twinky"));
        List<Cat> cats = new ArrayList<>();
        cats.add(new Cat("Purry"));
        List<Dog> dogs = new ArrayList<>();
        dogs.add(new Dog("Brutus"));
        logAnimals(cats);
        logAnimals(dogs);
    }
}