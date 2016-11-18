import Html exposing (div, p, text)

main =
    let
        cats : List Cat
        cats = [ cat1, cat2 ]
    in
        div []
            (List.map (\cat -> p [] [text (.name cat)]) cats )

type alias LivingThing a = { a | lifeExpectancy : Int }

type alias AbstractAnimal a = LivingThing { a | name : String }

type alias Animal = AbstractAnimal { }

type alias Cat = AbstractAnimal { coatColor : String }

type alias Dog = AbstractAnimal { breed : String }

type alias Plant = LivingThing {}

cat1 : Cat
cat1 = { name = "Purry", coatColor = "gray", lifeExpectancy = 15 }

cat2 : Cat
cat2 = { name = "Kitty", coatColor = "red", lifeExpectancy = 14 }

someAnimal : Animal
someAnimal = { name = "Sluggy", lifeExpectancy = 5 }

--plant : Plant
--plant = { lifeExpectancy = 1 }

cats : List Cat
cats = [ cat1, cat2 ]

animals : List Animal
animals = [someAnimal]

-- sure
moreAnimals : List Animal
moreAnimals = animals

-- nope
-- Error: Looks like a record is missing the `coatColor` field.
--catAnimals : List Animal
--catAnimals = cats

-- nope, same problem
--animalCats : List Cat
--animalCats = animals
