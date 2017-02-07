import Html exposing (div, p, text)

main =
    let
        cats : List Cat
        cats = [ someCat, agedCat ]
    in
        div []
            (List.map (\cat -> p [] [text ((.name cat) ++ ": " ++ (toString (.age cat))) ]) cats )
            -- (List.map (\cat -> p [] [text (.name cat)][text (.age cat)]) cats )
type alias Cat = { name : String, coatColor : String, age: Int}
someCat : Cat
someCat = { name = "Purry", age = 2, coatColor = "gray"}

haveBirthday : Cat -> Cat
haveBirthday cat =
  -- make a copy, but with changed age
  { cat | age = cat.age + 1 }

agedCat : Cat
agedCat = haveBirthday someCat
