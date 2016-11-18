-- Links
-- - https://github.com/sbrink/vscode-elm
-- - http://guide.elm-lang.org/get_started.html
-- - http://elm-lang.org/
-- - http://elm-lang.org/try
-- - https://www.manning.com/books/elm-in-action
-- - https://www.youtube.com/watch?v=DSjbTC-hvqQ
-- - https://terezka.github.io/elm-plot/
-- - http://outreach.mcmaster.ca/index.html

import Html exposing (text)


main =
  text (toString (foo 100))
  
--"adsfafds" ++ "asdfasdfadfs"

--[ 1, 2, 3 ] ++ [ 3, 4, 5 ]




-- getUserByEmail : String -> Request

  
add : Int -> Int -> Int
add num1 num2 =
    num1 + num2
    
subtract : number -> number -> number
subtract num1 num2 =
    num1 - num2

value1 : Float
value1 =
   subtract 1.1 2.2

value2 : Int
value2 =
    (List.length []) - 5


  
foo : number -> Maybe String
foo num =
    if num > 10 then
        Just "cool"
--        "cool"
    else
        Nothing
  
{-
type MaybeOlli a
    = Just a
    | Nothing
    | Olli
    | String
 
-}
r: Maybe String
r = foo 10



type alias LivingThing a = { a | lifeExpectancy : Int }

type alias Animal a = LivingThing { a | feet : Int, tail : Bool }

type alias Cat = Animal { coatColor : String }

type alias Plant = LivingThing {}

cat1 : Cat
cat1 = { feet = 3, tail = True, coatColor = "gray", lifeExpectancy = 5 }

someAnimal : Animal { foo : Int }
someAnimal = { feet = 3, tail = True, lifeExpectancy = 5, foo = 5 }

plant : Plant
plant = { lifeExpectancy = 1 }

cats : List Cat
cats = [ cat1, cat1 ]


doubleLifeExpectancy : LivingThing otherFields -> LivingThing otherFields
doubleLifeExpectancy record =
    { record | lifeExpectancy = record.lifeExpectancy * 2 }
    
    
longLivedCat : Cat
longLivedCat =
  doubleLifeExpectancy cat1
  
longLivedPlant : Plant
longLivedPlant =
  doubleLifeExpectancy plant
  
  
type alias Position = { x : Int, y : Int }

type alias Pos = ( Int, String, Cat )


pos = ( 3, "blah", cat1 )

( num, str, cat ) = pos


type alias Enemy = { hp : Int, strategy : String, position : Position }

type alias NPC = { hp : Int, position : Position }

type alias PositionedThing a = { a | position : Position }


type alias Strategy = String

moveThing : Strategy -> PositionedThing a -> PositionedThing a
moveThing strategy positionedThing =
  { positionedThing | position = move strategy positionedThing.position }


move : Strategy -> Position -> Position
move strategy position =
  { position | x = position.x + 1, y = position.y - 1 }


enemy : Enemy
enemy = { hp = 5, strategy = "blah", position = { x = 0, y = 0 } }

movedEnemy : Enemy
movedEnemy = { enemy | position = move "some strat" enemy.position }


movedEnemy2 : Enemy
movedEnemy2 = moveThing "some strat" enemy


type Optional val =
    Some val | None
