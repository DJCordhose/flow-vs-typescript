import Html exposing (text)

--main =
--    text (foo2 9)

main =
    let
        r : Maybe String
        r = foo6 11
--    in
--        case r of
--          Just message -> text message
--          Nothing -> text ""
    in
--        text (
--            case (foo6 11) of
--                Just message -> message
--                Nothing -> ""
--        )
        text (
            case r of
                Just message -> message
                Nothing -> ""
        )

-- Version 1: if needs an else
--foo num =
--    if num > 10 then
--        "cool"

-- Version 2: works, but there is no way not to return something on else
foo2 num =
    if num > 10 then
        "cool"
    else
        "not cool"

-- Version 3: inferred type made explicit
foo3 : Int -> String
foo3 num =
    if num > 10 then
        "cool"
    else
        "not cool"


-- Version 4: Maybe type not compatible with String (which is really returned)
-- `The definition of `foo4` does not match its type annotation.`

--foo4 : Int -> Maybe String
--foo4 num =
--    if num > 10 then
--        "cool"
--    else
--        "not cool"

-- Version 5: if and else produce differnt types
--`The branches of this `if` produce different types of values.`
--foo5 : Int -> Maybe String
--foo5 num =
--    if num > 10 then
----        Just "cool"
--        "cool"
--    else
--        Nothing

foo6 : Int -> Maybe String
foo6 num =
    if num > 10 then
        Just "cool"
    else
        Nothing


