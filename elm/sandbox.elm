import Html exposing (div, p, text)

main =
    let
        obj : String
        obj = "yo"
        -- everything is const
        -- obj = 10

--        Error: `The definition of `obj2` does not match its type annotation.`
        -- obj2 : String
        obj2 : number
        obj2 = 10

        sayIt : String -> String
        sayIt what =
            "Saying: " ++ what

        said : String
        said = sayIt obj

    in
        div []
            [
                p [] [text ("Text1:" ++ obj)],
                p [] [text (toString obj2)],
                p [] [text said]
            ]
