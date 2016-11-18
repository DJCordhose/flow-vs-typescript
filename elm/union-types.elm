-- https://guide.elm-lang.org/types/union_types.html

import Html exposing (div, p, text)

main =
    let
        r : String
        r = callback (Res "response")
        e : String
        e = callback (Err 404)
    in
        div []
            [
                p [] [text r],
                p [] [text e]
            ]

type Resp = Res String | Err Int

callback : Resp -> String
callback response =
    case response of
        Res payload -> payload
        Err code -> if code >= 400 && code < 500 then "you messed up" else "we messed up"
